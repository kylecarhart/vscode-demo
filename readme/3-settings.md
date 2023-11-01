## Settings

### Changing Settings

You can open and changes settings through the UI or through the `settings.json` file.

To open the settings UI:

1. Press `Ctrl + ,` (win) or `⌘ + ,` (mac).

To open the `settings.json` file:

1. Press `Ctrl + Shift + P` (win) or `⌘ + Shift + P` (mac)
2. Search for `Preferences: Open Settings (JSON)`.

### Settings Sync

Activate the settings sync feature to synchronize your configurations across multiple devices. This can be done by clicking the icon located at the bottom left corner of VSCode and signing in with either a Microsoft or GitHub account.

Additionally, you have the option to create distinct profiles for various devices. This could mean having one profile for your office computer and another for your personal computer at home. You could even categorize profiles based on language, project, and so on. Each profile will maintain its own unique settings and extensions.

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
  "editor.rulers": [80, 120]
}
```
