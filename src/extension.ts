import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('blanklinecleaner.clean', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const fullText = document.getText();
            const lines = fullText.split('\n');

            // Keep only odd-numbered lines (1-based index)
            let cleanedLines: string[] = lines.filter((_, index) => index % 2 === 0);

            // Create a new edit and replace the entire document
            editor.edit(editBuilder => {
                const fullRange = new vscode.Range(
                    document.lineAt(0).range.start,
                    document.lineAt(document.lineCount - 1).range.end
                );
                editBuilder.replace(fullRange, cleanedLines.join('\n'));
            }).then(() => {
                vscode.window.showInformationMessage('Removed even-numbered rows!');
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
