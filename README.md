# VSCode Demo

## Goal

The goal of this demo is to show the many different features of VSCode, and how to use them more effectively.

### Quickstart!

If you want to just clone my vscode entirely, you can click the link below and select **Create Profile in Visual Studio Code**.

Link to profile: https://vscode.dev/profile/github/9da1f33df8612b5151d1034d7ef164e5

## Extensions

Here is a list of some of my most used extensions. You can install them by clicking the links below, or by searching for them in the extensions tab in VSCode.

**General**

1. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically rename paired HTML/XML tag.
2. [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) - Mark lines and jump to them.
3. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Spelling checker for source code.
4. [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Free real-time collaborative development, great for pair programming.
5. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter.
6. [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) - Highlight TODOs, FIXMEs, and any keywords, annotations...

**Git**

1. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - View inline blames, graphs, history, and more.
2. [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - View a git graph of your repository.

**Artificial Intelligence**

1. [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - AI pair programmer (requires subscription $$$).
2. [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) - Chat with GitHub Copilot in the context of your code (requires subscription $$$).
3. [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - AI-assisted development (free!).

**Syntax Highlighting / Intellisense / Config**

1. [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - Syntax highlighting for .env files.
2. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - EditorConfig support for VS Code.
3. [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) - Syntax highlighting for styled-components.
4. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS IntelliSense.
5. [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) - CSS Modules support for VSCode.

**Linting**

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Snippets**

1. [ES7+ React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

**Themes**

1. [Palenight Theme](https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme)
2. [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) (I think they are ugly but they are also super popular, so you do you..)

## Settings

### Changing Settings

You can open and changes settings through the UI or through the `settings.json` file. To open the settings UI, press `Ctrl + ,` (win) or `Cmd + ,` (mac). To open the `settings.json` file, press `Ctrl + Shift + P` (win) or `Cmd + Shift + P` (mac) and search for `Preferences: Open Settings (JSON)`.

#### Configuring Prettier Extension:

1. Open the settings UI.
2. Search for `"Default formatter"` and select `esbenp.prettier-vscode`.
3. Search for `"Format on save"` and check the box.
4. Search for `"Format on paste"` and check the box (optional).

### Settings Sync

Turn on settings sync to sync your settings across devices. You can turn on settings sync by clicking the icon in the bottom left corner of VSCode. You will need to sign in with a Microsoft or GitHub account.

You can also create different profiles for different devices. For example, you can have a profile for your work computer and a profile for your home computer. You could also split the profiles by language, project, etc...

## Shortcuts

### General

| Shortcut (win)             | Shortcut (mac)            | Description                               |
| -------------------------- | ------------------------- | ----------------------------------------- |
| `Ctrl + Shift + P` or `F1` | `Cmd + Shift + P` or `F1` | Open the command palette                  |
| `Ctrl + ~`                 | `Ctrl + ~`                | Open the terminal                         |
| `Ctrl + Shift + N`         | `Cmd + Shift + N`         | Open a new window                         |
| `Ctrl + N`                 | `Cmd + N`                 | Open a new tab                            |
| `Ctrl + W`                 | `Cmd + W`                 | Close the current tab                     |
| `Ctrl + Shift + W`         | `Cmd + Shift + W`         | Close the current window (aka. rage quit) |
| `Ctrl + Shift + T`         | `Cmd + Shift + T`         | Reopen the last closed tab                |

### Search & Navigation

| Shortcut (win)     | Shortcut (mac)    | Description                    |
| ------------------ | ----------------- | ------------------------------ |
| `Ctrl + P`         | `Cmd + P`         | Search for file by name        |
| `Ctrl + Shift + F` | `Cmd + Shift + F` | Search for text in files       |
| `Ctrl + T`         | `Cmd + T`         | Search for symbol in workspace |
| `Ctrl + G`         | `Cmd + G`         | Go to line                     |
| `Ctrl + Click`     | `Cmd + Click`     | Go to definition               |

### Editor

| Shortcut (win)     | Shortcut (mac)     | Description                                 |
| ------------------ | ------------------ | ------------------------------------------- |
| `Alt + Up/Down`    | `Option + Up/Down` | Move line up/down                           |
| `Ctrl + Shift + K` | `Cmd + Shift + K`  | Delete current line                         |
| `Ctrl + D`         | `Cmd + D`          | Select next occurrence of current selection |
| `Ctrl + Shift + L` | `Cmd + Shift + L`  | Select all occurrences of current selection |
| `Ctrl + Shift + I` | `Cmd + Shift + I`  | Add cursor to line ends                     |
| `F2`               | `F2`               | Rename symbol                               |
| `Ctrl + .`         | `Cmd + .`          | Quick fix                                   |

You can also manually add multiple cursors by holding `Alt` (`Option` on mac) and clicking where you want to add a cursor.

## Commands

Commands are an important way to interact with VSCode and your code. To open the command palette, press `Ctrl + Shift + P` (win) or `Cmd + Shift + P` (mac) or `F1` (win & mac).

**Useful Commands:**

- Format Document
- Organize Imports
- Sort Lines Ascending/Descending
- Transform to Uppercase/Lowercase
- **Reload Window** (SUPER USEFUL IF SOMETHINGS ACTING WEIRD)

## Snippets

Snippets are a way to quickly insert code. A commonly used snippet is the `for` loop snippet. To use it, type `for` and press `Tab`, which will insert a for-loop. The `for` loop snippet will also allow you to tab through the variable name, the condition, and the increment.

Some extensions main purpose are snippets. The extension `ES7+ React/Redux/GraphQL/React-Native snippets` adds a bunch of snippets for React, allowing to easily create components, hooks, and more. For example, typing `tsrfc` and pressing `Tab` will create a blank React functional component in typescript.

## Scenarios

Try out some of the scenarios in the scenarios folder to get a feel for VSCode! Try and solve them in the least amount of steps as possible!
