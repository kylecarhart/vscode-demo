## The Sidebar

### Explorer

This is where you can view the files in your project.

The `Outline` accordion allows you to see an outline of your file. This is especially useful for larger files.

The `Timeline` accordion shows changes to your files.

### File Search

This is where you can search for files in your project. You can also get to this by pressing `Ctrl + Shift + F` (win) or `⌘ + Shift + F` (mac).

You can search by case, whole word, or even regex.

Clicking the down arrow next to the search bar opens the find & replace.

Clicking the 3 dots below the search bar, you can further define your search for files you want to include/exclude. Use asterisks as wildcards, and commas to define more than one rule.

> For example: This will search for all `ts` and `tsx` files, but not include any test files within your project:

```
files to include: *.ts, *.tsx
files to exclude: *.test.ts, *.test.tsx
```

#### Search Editor

You can open a "Search Editor" which allows you to see context surrounding a search with syntax highlighting, linking, and intellisense.

### Git

This includes numerous fundamental Git commands for those who prefer not to use the terminal.

_However, I strongly suggest mastering Git through the terminal. In fact, an entire session could be devoted solely to this topic._

### Debug

While I won't delve deeply into this topic here, it's worth noting that you can establish run configurations for your applications. This simplifies the debugging process by enabling you to set breakpoints and examine variables within the context of an operational application.

_This topic is substantial enough to warrant its own dedicated session._

### Extensions

Boost your VSCode experience by installing extensions, created by both the community and Microsoft.

_View the `extensions` readme for more information._
