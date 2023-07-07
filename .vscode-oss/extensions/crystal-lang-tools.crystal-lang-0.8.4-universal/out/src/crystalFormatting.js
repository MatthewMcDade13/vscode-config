"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalFormattingProvider = void 0;
const vscode = require("vscode");
const child_process_1 = require("child_process");
const crystalUtils_1 = require("./crystalUtils");
/**
 * Formatting provider using VSCode module
 */
class CrystalFormattingProvider {
    /**
     * Execute crystal tool format and get response.
     * Returns tuple of [stdout, stderr] texts.
     */
    execFormat(document) {
        return new Promise(function (resolve, reject) {
            let responseOut = "";
            let responseErr = "";
            const config = vscode.workspace.getConfiguration("crystal-lang");
            let child = child_process_1.spawn(`${config["compiler"]}`, ["tool", "format", "--no-color", "-"]);
            child.stdin.write(document.getText());
            child.stdin.end();
            child.stdout.setEncoding('utf-8');
            crystalUtils_1.childOnError(child);
            child.stdout.on("data", (data) => {
                responseOut += data;
            });
            child.stderr.on("data", (data) => {
                responseErr += data;
            });
            crystalUtils_1.childOnStd(child, "end", () => {
                return resolve([responseOut, responseErr]);
            });
        });
    }
    /**
     * Return formatted document to VSCode
     */
    provideDocumentFormattingEdits(document) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.execFormat(document);
            let responseOut = response[0];
            let responseErr = response[1];
            let textEditData = [];
            // OnFly error check is disabled because -f json was removed from crystal, see:
            // https://github.com/crystal-lang/crystal/pull/7257 (this is good reason to migrate to Scry :D)
            // if ((searchProblems(response.toString(), document.uri).length == 0) &&
            // 	response.toString().length > 0) {
            // }
            // QuickFix to replace current code with formated one only if no syntax error is found
            if ((crystalUtils_1.searchProblemsFromRaw(responseErr, document.uri).length == 0) &&
                responseOut.length > 0) {
                let lastLineId = document.lineCount - 1;
                let range = new vscode.Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
                textEditData = [vscode.TextEdit.replace(range, responseOut)];
            }
            return textEditData;
        });
    }
}
exports.CrystalFormattingProvider = CrystalFormattingProvider;
//# sourceMappingURL=crystalFormatting.js.map