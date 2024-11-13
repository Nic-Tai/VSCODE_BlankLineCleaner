## Step1 Directly drag and drop the blank-line-cleaner-x.x.x to the cursor plugin as shown in image below:
![image](https://github.com/user-attachments/assets/1fc3e594-8d84-4bb8-9aef-7bc59eed2afb)

## Step2 At your Cursor search bar, type >Remove, and then it will autofill for you and choose the file as shown in image below:
![image](https://github.com/user-attachments/assets/96e6ca24-873d-4d67-b982-65644a46918a)

Viola!

# Even Row Remover

A Visual Studio Code extension that removes even-numbered rows from your documents to specifically solve the Cursor blank row bug.

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
