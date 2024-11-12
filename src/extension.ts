import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('blanklinecleaner.clean', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const document = editor.document;
            const fullText = document.getText();
            const lines = fullText.split('\n');
            
            // Keep track of lines
            let cleanedLines: string[] = [];
            
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
                const fullRange = new vscode.Range(
                    document.lineAt(0).range.start,
                    document.lineAt(document.lineCount - 1).range.end
                );
                editBuilder.replace(fullRange, cleanedLines.join('\n'));
            }).then(() => {
                vscode.window.showInformationMessage('Cleaned up blank lines!');
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}