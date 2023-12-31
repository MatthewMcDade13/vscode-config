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
exports.CrystalHoverProvider = void 0;
const vscode = require("vscode");
const TDATA = require("./crystalCompletionData");
const crystalContext_1 = require("./crystalContext");
const crystalUtils_1 = require("./crystalUtils");
// Basic Crystal information about types and methods
const TYPES = [
    TDATA.REFLECTION_METHODS, TDATA.NIL_METHODS, TDATA.BOOL_METHODS, TDATA.INT_METHODS,
    TDATA.FLOAT_METHODS, TDATA.CHAR_METHODS, TDATA.STRING_METHODS, TDATA.SYMBOLS_METHODS, TDATA.ARRAY_METHODS,
    TDATA.HASH_METHODS, TDATA.RANGE_METHODS, TDATA.REGEX_METHODS, TDATA.TUPLE_METHODS, TDATA.NAMEDTUPLE_METHODS,
    TDATA.PROC_METHODS, TDATA.FILE_METHODS, TDATA.DIR_METHODS, TDATA.CHANNEL_METHODS,
    TDATA.TOP_LEVEL_METHODS, TDATA.STRUCTS, TDATA.CLASSES, TDATA.MODULES, TDATA.ALIAS, TDATA.ENUMS
];
/**
 * Get information of hovered method or class
 */
class CrystalHoverProvider extends crystalContext_1.CrystalContext {
    constructor() {
        super(...arguments);
        this.position = new vscode.Position(0, 0);
    }
    equalPositions(stored, current) {
        return (stored.line == current.line) && (stored.character == current.character);
    }
    /**
     * Return tooltip information to VSCode
     */
    provideHover(document, position, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = vscode.workspace.getConfiguration("crystal-lang");
            if (!config["hover"] || this.equalPositions(this.position, position)) {
                return;
            }
            this.position = position;
            let line = document.getText(new vscode.Range(position.line, 0, position.line, position.character));
            // Check if line isn't a comment or string
            let quotes = null;
            let comment = null;
            if (line) {
                quotes = line.match(/(\")/g);
                comment = line.match(/^[^\"]*#.*$/);
            }
            if (quotes == null && comment == null) {
                let stop = false;
                let range = document.getWordRangeAtPosition(new vscode.Position(position.line, position.character));
                if (range) {
                    let word = document.getText(range);
                    if (crystalUtils_1.isNotKeyword(word) && word.toLowerCase() == word && !parseInt(word)) {
                        // Checks for variables using context tool
                        let crystalOutput = yield this.crystalContext(document, position, "hover");
                        if (crystalOutput.toString().startsWith(`{"status":"`)) {
                            try {
                                let crystalMessageObject = JSON.parse(crystalOutput.toString());
                                if (crystalMessageObject.status == "ok") {
                                    for (let element of crystalMessageObject.contexts) {
                                        let type = element[word];
                                        if (type) {
                                            return new vscode.Hover(`${word} : ${type}`);
                                        }
                                    }
                                }
                                else if (crystalMessageObject.status != "failed") {
                                    stop = true;
                                }
                            }
                            catch (err) {
                                stop = true;
                                console.error("ERROR: JSON.parse failed to parse crystal context output when hover");
                                throw err;
                            }
                        }
                    }
                    if (crystalUtils_1.isNotKeyword(word) && !parseInt(word) && !stop) {
                        // Checks Symbols
                        let symbols = yield crystalUtils_1.getSymbols(document.uri);
                        for (let symbol of symbols) {
                            if (symbol.name == word) {
                                let container = symbol.containerName ? ` of ${symbol.containerName}` : "";
                                return new vscode.Hover({
                                    language: "plaintext",
                                    value: `${vscode.SymbolKind[symbol.kind]} ${symbol.name}${container}`
                                });
                            }
                        }
                        // Checks completion data
                        let hoverTexts = [];
                        for (let type of TYPES) {
                            for (let element of type) {
                                if (element[0] == word) {
                                    hoverTexts.push({
                                        language: "crystal",
                                        value: `${element[1]}`
                                    });
                                    if (element[2] !== "") {
                                        hoverTexts.push({
                                            language: "plaintext",
                                            value: `${element[2]}`
                                        });
                                    }
                                }
                            }
                        }
                        // -------------------------------
                        // TODO: Improve hover information
                        // -------------------------------
                        return new vscode.Hover(filter(hoverTexts));
                    }
                }
            }
        });
    }
}
exports.CrystalHoverProvider = CrystalHoverProvider;
/**
 * Remove duplicate methods and descriptions.
 */
function filter(hoverTexts) {
    if (hoverTexts.length <= 1) {
        return hoverTexts;
    }
    let prev = false;
    return hoverTexts.filter((item, index, self) => {
        if (index % 2 == 0) {
            let objectIndex = self.findIndex((t) => {
                return t.value == item.value;
            });
            let nextObjectIndex = self.findIndex((t) => {
                if (self[index + 1] == undefined) {
                    return false;
                }
                else {
                    return t.value == self[index + 1].value;
                }
            });
            prev = objectIndex == index && nextObjectIndex == index + 1;
            return prev;
        }
        else {
            return prev;
        }
    });
}
//# sourceMappingURL=crystalHover.js.map