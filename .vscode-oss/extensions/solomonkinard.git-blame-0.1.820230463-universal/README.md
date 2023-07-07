# Blazing Fast

![Log](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230460.png)

# Precise

![Log](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230439.png)

# Diff interactively

![Interactive](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230453.png)

# Git online

![Command Palette](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230420.png)

# User friendly

![Settings](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.6.png)

# Line history

![Diff](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230418.png)

# Search

![Search](https://whowideweb.com/?f=2023/05/Git%20Search/0.0.3.gif)

# Custom urls

![Click](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230427.png)

## Commands
* \> Git Blame: Search Log
* \> Git Blame: Line History
* \> Git Blame: File History
* \> Git Blame: Reflog

### Search
* Search by commit message, author, file, and etc.
* If nothing is typed, the selected item will be searched.
* To search without filters, press space and then enter.
* Click the buttons to Edit or Delete previous searches.

### Line history
* It's now trivial to see line history in any file.
* The history is blazing fast and speedier than ever.
* Click the result to view the log.

### File history
* It's now trivial to see the file history in any file.
* The history is blazing fast and speedier than ever.
* Click the result to view the log.

### Log and reflog
* Click a button to see the patch that caused the line.
* Click a button to see the diff between the patch (inclusive) and what's shown.
* Click a button next to the line total to see the full patch.
* Click a button to open the file.
* See the total and individual changes for each file.

# Developers

package.json
```
{ "extensionDependencies": ["solomonkinard.git-blame"] }
```

Get the commit id for the current line.
```
const id: string | undefined =
  await vscode.commands.executeCommand("gitBlame.getShaForCurrentLine");
console.log(id);
```

Get the git commit ids whenever a line is focused.
```
vscode.commands.executeCommand("git-blame.commands.onShaForCurrentLine",
  (ids: string[]) => console.log(ids));
```

Get the git commit ids whenever a file is focused.
```
vscode.commands.executeCommand("git-blame.commands.onAllShasForFile",
  (ids: string[]) => console.log(ids));
```

Get the git commit ids for the file.
```
const ids =
  vscode.commands.executeCommand("git-blame.commands.getAllShasForFile");
console.log(ids);
```

Get the commits for the file.
```
vscode.commands.executeCommand(
  "git-blame.commands.onShaListingIndexedByLine", (shaForEachLine: string[]) =>
    console.log(shaForEachLine));
```

Get commits for the commit ids.
```
const shaToCommitMap: Map<string, Commit> =
  await vscode.commands.executeCommand("git-blame.commands.getAllCommits");
console.log(shaToCommitMap);
```

Commit type:
```
interface Commit {
  sha: string;
  date?: string;
  author?: string;
  mail?: string;
  summary?: string;
  previous?: string;
}
```
