## Settings

### Changing Settings

You can open and changes settings through the UI or through the `settings.json` file. To open the settings UI, press `Ctrl + ,` (win) or `Cmd + ,` (mac). To open the `settings.json` file, press `Ctrl + Shift + P` (win) or `Cmd + Shift + P` (mac) and search for `Preferences: Open Settings (JSON)`.

### Settings Sync

Turn on settings sync to sync your settings across devices. You can turn on settings sync by clicking the icon in the bottom left corner of VSCode. You will need to sign in with a Microsoft or GitHub account.

You can also create different profiles for different devices. For example, you can have a profile for your work computer and a profile for your home computer. You could also split the profiles by language, project, etc... Each profile will have their own settings and extensions.

### Useful Settings

Here are some useful settings, feel free to copy paste these into your settings.json.

```json
{
    /* Renaming and moving files */
    "typescript.updateImportsOnFileMove.enabled": "always",
    "typescript.preferences.useAliasesForRenames": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.preferences.useAliasesForRenames": false,

    /* Formatting for prettier */
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",

    /* Editor rules */
    "editor.rulers": [80, 120],
}
```