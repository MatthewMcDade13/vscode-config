# Changelog

## 0.1.820230463

* Added a button to commits in Document show the log when clicked.
* Added a button to Diff navigation to show individual and full diff statistics.
* Added ability to click the line from Diff statistics to instantly see a diff.
* Removed some duplicate code.
* Removed some keywords.

## 0.1.820230462

* Changed Visible commit so that clicking it only expands or collapses, not log.
* Changed Visible commits that are now collapsible and can show files.
* Removed Visible visible bottom panel.

## 0.1.820230461

* Added a button to commits in File to open the log menu.
* Added a button to Log and File files to open the current version of it.
* Changed Log and File to open diff by default when clicking a file.

## 0.1.820230460

* Added image to README.md with new activity bar logo, as the first image.
* Changed branch date to use author to get respect for --date.
* Changed inline blame to not display if wordWrap is not configured "off" ([bug](https://github.com/microsoft/vscode/issues/186837)).

## 0.1.820230459

* Changed Branch file button click to open the current version of the file.
* Changed default Branch file click to show the patch.

## 0.1.820230458

* Added ability to show the patch from a Branch file.
* Fixed theoretical invalid git commit ids.

## 0.1.820230457

* Added automatic git commit id / sha verification.
* Added listing of files available for each branch in Branch.
* Fixed diff view click of file to see the diff, not a circular error.
* Fixed previous file history proactively to only allow valid commit ids.

## 0.1.820230456

* Added a Branch menu that shows branches when refreshed.
* Added a new Git Blame activity bar (menu item).
* Added max count config for File and Branch menus.
* Changed Diff menu pencil icon to a source control icon.
* Changed location of Git Blame activity bar from Source Control to Git Blame.
* Changed the order of activity bar items based on a likely priority order.
* Fixed File menu to actually search by author or ref.

## 0.1.820230455

* Added Git Blame Document to show the deep history of the file.
* Added Git Blame File to show the quick history of the file.
* Change location of where left is defined for the diff view
* Changed full diff line hyperlinks to open the diff instead of just the file.

## 0.1.820230454

* Added automatic cursor placement on the line of file opened from full diff.

## 0.1.820230453

* Added hyperlinks to the full diff to go to the specific line or file.
* Changed the name of Git Blame Branch to Git Blame Diff.

## 0.1.820230452

* Changed Log to have non-collapsable merge commits.
* Fixed Log limits when no body is available.

## 0.1.820230451

* Added Git Blame Files diff for all files, including color coding.
* Changed Git Blame Files to persist the ref between refreshes.
* Changed Git Blame Files to show the saved rev when changing it.
* Fixed Git Blame Files bug that failed to open untracked relative file paths.
* Fixed Git Blame Files to show the renamed file path, not just the target.
* Removed a small amount of duplicated code for a few things.
* Changed the name of Git Blame Files to Git Blame Branch.
* Changed the name of Git Blame Log Files to Git Blame Log.

## 0.1.820230450

* Added ability to view the reflog in Log Files, instead of only the log.
* Added ability to open the older version of a file with a click, via Log Files.

## 0.1.820230449

* Added a customizable configuration to set the max number of commits.
* Added a refresh button for Log Files to only load immedately after each click.
* Added ability in Log Files to search by author and/or ref.
* Added buttons in Log Files to open the log or the files in any commit.
* Added full commit message to Log File commits when hovering over it.
* Added Git Blame Log Files menu to interact with recent commits.
* Added title to Git Files prompt for a hint that the ref should be input.
* Fixed Git Files prompt to do nothing if escape is pressed.

## 0.1.820230448

* Added configuration to determine whether inline blame hover is enabled.
* Changed default inline blame hover behavior to be off by default.
* Fixed Git Blame Files to not show an object and fail to load when remote.

## 0.1.820230447

* Fixed Windows: Status log shown in general and while debugging.
* Fixed Windows: Inline blame is now shown.
* Fixed Windows: Click the blame status line to show the log.

## 0.1.820230446

* Added ability to click files from line and search history, search, et al.
* Changed idle delay to 1s instead of two seconds when the file is being edited.
* Fixed line history when clicking or pressing enter for the first commit.
* Fixed theoretical error if branch had annotations like (HEAD, branches).
* Fixed todo that checks for existence instead of a possible error.
* Removed ~0.3k from the package.

## 0.1.820230445

* Fixed for faster blame on cursor movement when not editing an unsaved file.

## 0.1.820230444

* Added accidentally the side effect that the status sha is missing on new diff.
* Fixed continued blame fetching while moving the cursor in the same file.

## 0.1.820230443

* Added 2s idle delay for updating blame in the status bar while on same line.

## 0.1.820230442

* Added a Git Blame Visible menu that shows the same information as the panel.
* Added button to open log for patches in the side panel and the bottom panel.
* Changed panel format to have a prominent subject and hazy metadata.
* Changed panel sorting to be by the timestamp instead of only ISO-8601.
* Changed panel updates to no longer update if there are unsaved changes.
* Fixed diff view not showing blame in the status bar in some cases.
* Fixed panel not updating when loading a cached blame.

## 0.1.820230441

* Fixed inline blame to not be displayed when a file is edited and not saved.

## 0.1.820230440

* Added blame for edited file that's processed from scratch on each edit.
* Changed blame status to show that it's not commited yet when a line changed.
* Changed inline blame to now be present even when a file is being edited.
* Fixed inline blame formatting when using tabs instead of spaces.
* Fixed inline blame performance to make it theoretically faster.
* Fixed panel performance by getting unique shas from the start.
* Removed useless and otherwise expensive duplicate checks.

## 0.1.820230439

* Added extension dependency to the readme.
* Changed outdated screenshot in the readme.
* Fixed a dash bug in the log for binary files.

## 0.1.820230438

* Added ability to undo changes so that the now saved state restores the panel.
* Added ability to undo changes so that the saved state restores inline blame.
* Added notifications to all observers that blame cleared when a file is edited.
* Changed output panel usage default to true.
* Changed output panel usage to only update when the panel is visible.
* Changed the blame status bar to clear it when the file is edited and unsaved.
* Changed the panel by clearing it when choosing a different file.
* Fixed single color declaration rather than repeat it for every line in a file.
* Removed blame for edited file to have less information instead of being wrong.

## 0.1.820230437

* Added panel to show a summary for each line changed in the blamed file.
* Added unique lines descending by date in the Git Blame Panel.
* Changed inline blame to remove decorations when the setting is set to false.
* Changed setting description for inline blame for more clarity.
* Changed settings to avoid reading them every single time its time to render.
* Changed the inline blame behavior to clear it when the file is changed.
* Fixed bug whereby the decorations weren't being shown by default.

## 0.1.820230436

* Added setting to specify the left aligned column for inline blame.
* Changed background blame to disabled if a cached version is loaded in interim.
* Changed decorations such that they're removed after they're disposed.
* Fixed inline blame only loading on the first file instead of all the rest.
* Fixed inline blame updates when cycling back and forth between windows.

## 0.1.820230435

* Added a Show Patch command to show a commit log after pasting in commit id.
* Added ability to get the commits from a command.
* Added an example to get all shas to the readme.
* Added an example to get the commit id for the current line.
* Added clickable email address mailto on inline blame hover.
* Added inline blame starting at column 82 or after the longest line.
* Added left aligned inline blame and showed the date, author, and summary.
* Added more developer guides to the readme.
* Added setting to toggle inline blame and show a commit for each new block.
* Added the first working test.

## 0.1.820230434

* Added ability to be publically notified when a file or line becomes active.
* Added API to README for developers to experiment with.
* Added features for Developers, Developers, Developers, Developers, Developers.
* Deprecated private observers in favor of public accessibility.

## 0.1.820230433

* Added instant first result to line history initiated from the command palette.

## 0.1.820230432

* Fixed filename line click in log that did nothing, but now opens the patch.
* Fixed line history command spelling that was preventing it from being used.
* Fixed the log with menu filename click which now opens the file again.

## 0.1.820230431

* Added buttons to the log with the menu.
* Added reflog to command palette.
* Added total change summary to the log with the menu.
* Fixed log with commands to have show counts less prominently.
* Fixed the file open button on the log without commands.

## 0.1.820230430

* Added a full patch button next to the line total.
* Added a video demo.
* Added ability to go to a search when clicking or pressing enter before typing.
* Added ability to remove individual history.
* Added ability to resume a search from any saved searc.
* Added ability to search code in a variety of ways.
* Added ability to set an arbitrary base on Git Files for easy diff ability.
* Added author and date to listing with numerous commits.
* Added computed total changes for files in the log.
* Added diff button to see thie difference between the shown ref and log file.
* Added File History and it's faster than ever.
* Added formatting for files in the log.
* Added history listing that shows recent searches.
* Added history shown in descending order starting from the most recent.
* Added Line History, and it's faster than ever.
* Added listing that shows the full commit information.
* Added open button to open the file shown in the log file.
* Added overview listing to more easily see numerous commits.
* Added patch button to see the diff that caused file in the log file.
* Added relative history support instead of always starting at the latest file.
* Added singular or plural text for the number of files changed in the log.
* Fixed binary file computation for log.

## 0.1.820230429

* Fixed Author: Scrolling smoothness while loading.

## 0.1.820230428

* Added automatic blame update if a commit happens on in a repo that was opened.

## 0.1.820230427

* Added Log: Allow user defined click urls.

## 0.1.820230426

* Added Log: Click one of the files to see the diff.

## 0.1.820230425

* Added file count showing to Author view.
* Updated the typed author after input in Author view.

## 0.1.820230424

* Added 10x performance gains to Author view.
* Author view: Add Author? menu selection to the beginning for customization.

## 0.1.820230423

* Author view: Show that files are loading, even after entering a custom author.

## 0.1.820230422

* Author view: Allow user to enter custom author for viewing and opening files.

## 0.1.820230421

Author view
* Click the file or pressing enter to go directly to it.
* Show all of the files that an author has ever committed.
* Sort the files by date date descending.

## 0.1.820230420

* Uncommitted diff: Show the the full diff for all files in the editor. Windows?

## 0.1.820230419

* Command palette: Added command to palette: Open Online.
* Command: Renamed to Open Online.
* Clipboard: Removed copied text notifications.
* Log: Menu rearranged to move deprecated items down, but leave Settings last.

## 0.1.820230418

Line & Diff:
* Show each summary in the listings, instead of the commit ids.
* Show each date in the listings, instead of the commit ids.
* Added tooltips that show the commit id, for nerds.
* Theoretical performance boost in the line listing.
* Complete UI loading animation instead of spinning forever if no id is found.
* Maybe made some parts more Windows friendly.
* Added screenshot and updated readme.

## 0.1.820230417

* Files & Line: Correctly processes files with spaces.
* Files & Line: Show UI loading progress, which is nice for large repositories.
* Lines: The last line commit now opens a file instead of an error.

## 0.1.820230416

* Git Blame File. Interactively navigate through the current file history.
* Git Blame Line. Interactively navigate through the current line history. Win?
* Opened file with a title instead of a default name.

## 0.1.820230415

* Clear Git Blame Files any time refresh is clicked, before trying to load.
* Added a check that does nothing other than require a reload for remote files.

## 0.1.820230414

* Enable the opening of deleted files.
* Ensure that large commits return complete filenames.

## 0.1.820230413

* Added Files menu to Source Control.
* Click to refresh the Files menu, available whenever a file is currently open.
* Currently, the changes shown also include whatever is in the current commit.
* The changes listed are based on the opened file when refresh is clicked.
* Files are ordered in the listing as modified, untracked, and then deleted.
* Click the file for the diff view or to open the actual file.

## 0.1.820230412

* Fixed issue where the full diff tries to refresh indefinitely for some reason.

## 0.1.820230411

* 10x larger full diffs before pagination.
* Don't refresh the view if going beyond the bounds.

## 0.1.820230410

* This seem to actually fix the problem of the full diff not always displaying.
* Don't paginate past the bounds of the full diff.

## 0.1.820230409

* Use smaller icon buttons instead of complete text labels.
* Shorten full diff file name for all files in a change.
* Show the diff that led to the current line.
* No need to walk back further when looking at the current diff.
* Correctly show the diff that led to the current line, reducing the look back.
* Show the difference between two different files when they observing renames.
* A full diff didn't always show the first page automatically, but it does now.
* Increased the full diff character count to 100k which is about 2k lines.
* Wait for the full diff results before rendering anything.
* Don't show a blank page while waiting for the full diff.

## 0.1.820230408

* Added diff line view to show what's expected with git diff for a given line.
* Theoretical fix for fast machines showing "prev/next" blank diff of all files.

## 0.1.820230407

* Changed the button order.
* Allow about 28% more diff per page.
* Removed loading splash screen.

## 0.1.820230406

* Version number bump due to confirmed Microsoft VSCode bug has the wrong order.

## 0.1.8

* Added color.
* Added pagination.
* Added next and prev buttons.
* Simplified numbering due to what could be a bug or a feature.

## 0.1.701

* Removed percentages.
* Removed trailing total.
* Show the correct number of lines added and removed.
* Update the spacing to be fixed instead.
* Show the full diff with all files, for a given commit.
* The max number of diff lines have been set ~20k, by proxy.
* Show a warning if the max has been reached.
* Added loading progress indicator.

## 0.1.700000001

* Use line add and subtract percentages instead of absolute or relative numbers.

## 0.1.700000000

* Added more space between the file line counts and the file name.
* Moved file line counts to the right of the file instead of the left.
* Fixed bug where the count only showed 1 or 0 per file.
* Fixed closed window that didn't update status when going to another one.
* Verified that blame can be shown outside of the workspace.
* Reduce the number of times that blame is computed for the same file.
* Show the blame automatically after the IDE launches with no other activity.
* Don't rely on the workspace at all.

## 0.1.7

* Get blame for files containing spaces.
* Walk back for line and file history when the file was moved.
* Clear text when a new file is created or closed.
* Show files in the log and show the numbers of line additions and subtractions.
* Allow buffered log display.
* Created a manual test example that can be be used for testing file moves.

## 0.1.6

* Added a file for settings (pseudo object).
* Added new settings.
* Added setting support.
* Added support for the previous version(s) migrating to this version.
* Changed an outdated screenshot.
* Changed git web url to be in settings instead of proprietary.
* Hiding visibility in status menu prevents any processing when browsing files.
* Removed author's name from the command palette entry.
* Renamed an object to match its internal name.
* Renamed the "Edit web url" menu item to "Settings".

## 0.1.5

* Provide a better label for the item in the command palette.
* Unbreak Git Log option in the command palette.

## 0.1.4

* Don't diff against HEAD when the working file was just saved.

## 0.1.3

* Unified log view when blame is clicked, instead of a popup.
* Click a log line with a link to open that link in the browser.
* Click commands after viewing the log to browse interactively.
* Added support for copying sha and message to clipboard.
* History (preview) is a beta feature that shows previous versions of a file.
* History (beta) enabled for Line history and file history.
* Continuously go back in time looking at history in reverse per line or file.
* History is currently shown based on the current file; maybe prev is better?
* Sha in diff title may not match expectations. Same for diff blame.
* File blame should continue to work, but diff (beta) commit ids aren't ready.
* Git Story is the new base.
* Custom prefix now generated dynamically instead of hardcoded.
* Observers have the ability to make dynamic updates.
* Added Commit type safety and added file history feature.
* Show blame for the version of the file that's displayed (beta).
* Added a bulleted list of commands to the log menu.
* Added a separator to the menu so that the log is displayed before commands.
* Deprecated function that was doing duplicate work on repeat calls.
* Added a configuration that can toggle the status line.

## 0.1.2

* Added new photos to showcase new features.
* Show commit id in the log view.

## 0.1.1

* Detailed log now available with a click. Click again to copy manually.

## 0.1.0

* Chromium specific logic encapsulated as well as core blame logic.
* Config file added for improved legibility.
* Bundled files for better performance expectations (265k to 17k)
* Refactor Windows specific logic.
* Save more computed files for faster usage

## 0.0.9

* Added Windows support.
* Stopped changing directories manually because a flag can handle this.

## 0.0.8

* Don't update the status bar unnecessarily. Better performance and less jank.
* Get day of the month instead of the day of the week.

## 0.0.7

* Update description.

## 0.0.6

* Get git even from submodules, without considering the workspace folder.

## 0.0.5

* URL is saved between IDE reloads.
* Edit URL edit on demand.
* Save blame for several files for immediate results when changing them quickly.

## 0.0.4

* Include title/summary in the clicked output for the commit.
* Don’t load a webpage when escape is pressed on first unsaved url inquiry.
* Only process one file at a time.

## 0.0.3

* Open sha in the web with a click.
* Use ISO 8601 date format.
* Update status even if the line changes from the initial one when a file loads.
* Avoid repeat processing of commits.
* Standardize date builder.

## 0.0.2

* Added human readable date in the popup.
* Changed to the use of full year for clarity.
* Fixed offset months by 1.

## 0.0.1

* Added the initial release.
