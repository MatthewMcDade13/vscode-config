"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childOnError = exports.childOnStd = exports.spawnCompiler = exports.spawnTools = exports.searchProblemsFromRaw = exports.searchProblems = exports.getSymbols = exports.isNotLib = exports.isNotKeyword = exports.tryWindowsPath = exports.Concurrent = exports.diagnosticCollection = void 0;
const vscode = require("vscode");
const child_process_1 = require("child_process");
// -----------------------------
// Private utilities (no export)
// -----------------------------
// Allow status bar messages
const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
// VSCode config in settings.json
const config = vscode.workspace.getConfiguration("crystal-lang");
// Allow to create enviroments variables
const CRENV = Object.create(process.env);
// Root folder for current workspace
const ROOT = vscode.workspace.rootPath;
// Workspace checker for Bash on Windows
const WORKSPACE = (() => {
    if (ROOT != undefined) {
        let letter = ROOT.slice(0, 1).toLowerCase();
        if (config["bashOnWindows"]) {
            return '/mnt/' + letter + '/' + ROOT.slice(3).replace(/\\/g, '/');
        }
        else {
            return ROOT;
        }
    }
})() || "";
// Get and verify standard library path from Crystal env
const STDLIB = (() => {
    const regex = /(.*)\n/;
    try {
        let output = child_process_1.execSync(`${config["compiler"]} env CRYSTAL_PATH`);
        const match = regex.exec(output.toString());
        if (match && match.length === 2) {
            return match[1];
        }
        return "lib";
    }
    catch (ex) {
        vscode.window.showWarningMessage("Crystal compiler not found. Some features can throw errors.");
        console.error(ex);
        return "lib";
    }
})();
// Set CRYSTAL_PATH for current workspace
CRENV.CRYSTAL_PATH = `${WORKSPACE}/lib:${STDLIB}`;
// Crystal keywords to ignore on hover
// https://github.com/crystal-lang/crystal/wiki/Crystal-for-Rubyists#available-keywords
const KEYWORDS = [
    "def", "if", "else", "elsif", "end", "true", "false", "class", "module", "include",
    "extend", "while", "until", "nil", "do", "yield", "return", "unless", "next", "break",
    "begin", "lib", "fun", "type", "struct", "union", "enum", "macro", "out", "require",
    "case", "when", "in", "select", "then", "of", "rescue", "ensure", "is_a?", "alias",
    "sizeof", "as", "as?", "typeof", "for", "in", "with", "self", "super", "private", "asm",
    "nil?", "abstract", "pointerof", "protected", "uninitialized", "instance_sizeof"
];
const spawnOptions = {
    cwd: ROOT,
    env: CRENV,
    shell: "bash",
    stdio: ["ignore", "pipe", "pipe"]
};
/**
 * Check main file in current workspace
 */
function mainFile(document) {
    const config = vscode.workspace.getConfiguration("crystal-lang");
    if (config["mainFile"]) {
        return config["mainFile"].replace("${workspaceRoot}", WORKSPACE);
    }
    return document;
}
/**
 * Check Linux path for Bash on Windows
 */
function tryLinuxPath(path) {
    if (config["bashOnWindows"]) {
        let letter = path.slice(0, 1).toLowerCase();
        return `/mnt/${letter}/${path.slice(3).replace(/\\/g, '/')}`;
    }
    return path;
}
// -----------------------------------
// Public constants utilities (export)
// -----------------------------------
// Diagnostics provider
exports.diagnosticCollection = vscode.languages.createDiagnosticCollection("crystal");
/**
 * Counter for Crystal processes
 */
class Concurrent {
    static limit() {
        return config["processesLimit"];
    }
}
exports.Concurrent = Concurrent;
Concurrent.counter = 0;
/**
 * Check Windows path for Bash on Windows
 */
function tryWindowsPath(path) {
    if (config["bashOnWindows"]) {
        let stdlib = STDLIB.split(":");
        if (path.startsWith(stdlib[0]) || path.startsWith(stdlib[1])) {
            console.error("ERROR: Windows can't access to Linux subsystem files yet.");
        }
        let letter = path[5];
        let file = path.slice(6);
        return `${letter}:${file}`;
    }
    return path;
}
exports.tryWindowsPath = tryWindowsPath;
/**
 * Check if word is a Crystal keyword
 */
function isNotKeyword(word) {
    return KEYWORDS.indexOf(word) < 0;
}
exports.isNotKeyword = isNotKeyword;
/**
 * Ensure that file is not inside lib folders
 */
function isNotLib(file) {
    let stdlib = STDLIB.split(":");
    if (file.startsWith(stdlib[0]) || file.startsWith(stdlib[1]) || file.startsWith(`${ROOT}/lib`)) {
        return false;
    }
    return true;
}
exports.isNotLib = isNotLib;
/**
 * Seach symbols for a crystal document
 */
function getSymbols(uri) {
    return vscode.commands.executeCommand("vscode.executeDocumentSymbolProvider", uri)
        .then(symbols => symbols === undefined ? [] : symbols);
}
exports.getSymbols = getSymbols;
/**
 * Parse JSON response and create diagnostics
 */
function searchProblems(response, uri) {
    let diagnostics = [];
    const config = vscode.workspace.getConfiguration("crystal-lang");
    if (response.startsWith(`[{"file":"`)) {
        try {
            let results = JSON.parse(response);
            let maxNumberOfProblems = config["maxNumberOfProblems"];
            for (let [index, problem] of results.entries()) {
                if (index >= maxNumberOfProblems) {
                    break;
                }
                if (problem.line == null) {
                    problem.line = 1;
                    problem.column = 1;
                }
                let range = new vscode.Range(problem.line - 1, problem.column - 1, problem.line - 1, (problem.column + (problem.size || 0) - 1));
                let diagnostic = new vscode.Diagnostic(range, problem.message, vscode.DiagnosticSeverity.Error);
                let file;
                if (problem.file.length > 0) {
                    if (!problem.file.endsWith(".cr")) {
                        file = vscode.Uri.file(vscode.workspace.rootPath + "/" + problem.file);
                    }
                    else {
                        file = vscode.Uri.file(tryWindowsPath(problem.file));
                    }
                }
                else {
                    file = uri;
                }
                diagnostics.push([file, [diagnostic]]);
            }
        }
        catch (err) {
            console.error("ERROR: JSON.parse failed to parse Crystal output");
            throw err;
        }
    }
    else {
        exports.diagnosticCollection.clear();
    }
    if (config["problems"] != "none") {
        exports.diagnosticCollection.set(diagnostics);
    }
    return diagnostics;
}
exports.searchProblems = searchProblems;
/**
 * Parse raw output from crystal tool format - response and create diagnostics
 */
function searchProblemsFromRaw(response, uri) {
    let diagnostics = [];
    const config = vscode.workspace.getConfiguration("crystal-lang");
    let responseData = response.match(/.* in .*?(\d+):\S* (.*)/);
    let parsedLine;
    try {
        parsedLine = parseInt(responseData[1]);
    }
    catch (e) {
        parsedLine = 0;
    }
    let columnLocation = 1; // No way to get column from crystal tool format -
    if (parsedLine != 0) {
        let problem = {
            line: parsedLine,
            column: columnLocation,
            message: responseData[2]
        };
        let range = new vscode.Range(problem.line - 1, problem.column - 1, problem.line - 1, problem.column - 1);
        let diagnostic = new vscode.Diagnostic(range, problem.message, vscode.DiagnosticSeverity.Error);
        diagnostics.push([uri, [diagnostic]]);
    }
    if (diagnostics.length == 0) {
        exports.diagnosticCollection.clear();
    }
    else if (config["problems"] != "none") {
        exports.diagnosticCollection.set(diagnostics);
    }
    return diagnostics;
}
exports.searchProblemsFromRaw = searchProblemsFromRaw;
/**
 * Execute Crystal tools context and implementations
 */
function spawnTools(document, position, command, key) {
    return new Promise(function (resolve, reject) {
        let response = "";
        const config = vscode.workspace.getConfiguration("crystal-lang");
        if (Concurrent.counter < Concurrent.limit() && config[key]) {
            let file = tryLinuxPath(document.fileName);
            let scope = mainFile(file);
            Concurrent.counter += 1;
            statusBarItem.text = `${config["compiler"]} tool ${command} is working...`;
            statusBarItem.show();
            let child = child_process_1.spawn(config["compiler"], [
                "tool",
                command,
                "-c",
                `${file}:${position.line + 1}:${position.character + 1}`,
                scope,
                "--no-color",
                "--error-trace",
                "-f",
                "json"
            ], spawnOptions);
            childOnStd(child, "data", (data) => {
                response += data;
            });
            childOnStd(child, "end", () => {
                searchProblems(response.toString(), document.uri);
                Concurrent.counter -= 1;
                statusBarItem.hide();
                return resolve(response);
            });
            childOnError(child);
        }
        else if (config[key]) {
            return resolve(`{"status":"blocked"}`);
        }
        else {
            return resolve("");
        }
    });
}
exports.spawnTools = spawnTools;
/**
 * Execute Crystal compiler or parser
 */
function spawnCompiler(document, build) {
    const config = vscode.workspace.getConfiguration("crystal-lang");
    let file = tryLinuxPath(document.fileName);
    let scope = mainFile(file);
    let response = "";
    let args = (() => {
        if (build) {
            Concurrent.counter += 1;
            statusBarItem.text = `${config["compiler"]} build --no-codegen is working...`;
            statusBarItem.show();
            return [
                "build",
                "--no-debug",
                "--no-color",
                "--no-codegen",
                "--error-trace",
                scope,
                "-f",
                "json"
            ];
        }
        return [
            "tool",
            "format",
            "--check",
            "--no-color",
            scope
        ];
    })();
    let child = child_process_1.spawn(config["compiler"], args, spawnOptions);
    childOnStd(child, "data", (data) => {
        response += data;
    });
    childOnStd(child, "end", () => {
        if (build) {
            searchProblems(response.toString(), document.uri);
            Concurrent.counter -= 1;
            statusBarItem.hide();
        }
        else {
            searchProblemsFromRaw(response.toString(), document.uri);
        }
    });
    childOnError(child);
}
exports.spawnCompiler = spawnCompiler;
/**
 * Helper method for using process stdout and stderr
 */
function childOnStd(child, event, block) {
    child.stdout.on(event, block);
    child.stderr.on(event, block);
}
exports.childOnStd = childOnStd;
/**
 * Helper method for printing crystal plugin errors
 */
function childOnError(child) {
    child.on("error", (err) => {
        vscode.window.showErrorMessage("Error executing Crystal plugin. " + err.message);
        console.error(err.message);
    });
}
exports.childOnError = childOnError;
//# sourceMappingURL=crystalUtils.js.map