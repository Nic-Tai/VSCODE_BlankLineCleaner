"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('blanklinecleaner.clean', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const fullText = document.getText();
            const lines = fullText.split('\n');
            // Keep track of lines
            let cleanedLines = [];
            // Add first line if it exists
            if (lines.length > 0) {
                cleanedLines.push(lines[0]);
            }
            // Process remaining lines
            for (let i = 1; i < lines.length; i++) {
                const currentLine = lines[i];
                const previousLine = cleanedLines[cleanedLines.length - 1];
                // If current line has content, add it
                if (currentLine.trim() !== '') {
                    cleanedLines.push(currentLine);
                }
                // If current line is blank but previous line has content
                // and next line (if exists) has content, skip it
                else if (previousLine.trim() !== '' &&
                    i < lines.length - 1 &&
                    lines[i + 1].trim() !== '') {
                    // Skip this blank line
                    continue;
                }
                // Otherwise add the blank line
                else {
                    cleanedLines.push(currentLine);
                }
            }
            // Create a new edit and replace the entire document
            editor.edit(editBuilder => {
                const fullRange = new vscode.Range(document.lineAt(0).range.start, document.lineAt(document.lineCount - 1).range.end);
                editBuilder.replace(fullRange, cleanedLines.join('\n'));
            }).then(() => {
                vscode.window.showInformationMessage('Cleaned up blank lines!');
            });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map