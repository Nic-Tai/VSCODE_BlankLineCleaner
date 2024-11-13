# Even Row Remover

A Visual Studio Code extension that removes even-numbered rows from your documents.

## CMD

npm run compile
vsce package

if above give error, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process


## Features

- Removes all even-numbered rows (2, 4, 6, etc.) from the active document
- Keeps all odd-numbered rows (1, 3, 5, etc.) intact
- Simple one-click operation

## Installation

### From VSIX file

1. Install the required tools:   ```bash
   npm install -g @vscode/vsce   ```

2. Clone the repository:   ```bash
   git clone https://github.com/yourusername/blank-line-cleaner
   cd blank-line-cleaner   ```

3. Install dependencies:   ```bash
   npm install   ```

4. Compile the extension:   ```bash
   npm run compile   ```

5. Package the extension:   ```bash
   vsce package   ```
   This will create a `.vsix` file in your project directory.

6. Install the extension in VS Code:
   - Launch VS Code
   - Go to the Extensions view (Ctrl+Shift+X)
   - Click on the "..." (More Actions) button at the top
   - Select "Install from VSIX..."
   - Choose the `.vsix` file you created

## Usage

1. Open any text document in VS Code
2. Open the Command Palette (Ctrl+Shift+P)
3. Type "Remove Even-Numbered Rows" and select the command
4. All even-numbered rows will be removed from your document

## Development

- Run `npm run compile` to compile the TypeScript code
- Run `npm run watch` to watch for changes during development
- Use `vsce package` to create a new VSIX file after making changes

## License

This project is licensed under the MIT License - see the LICENSE file for details