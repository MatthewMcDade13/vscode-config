# Changelog

All notable changes to the Codeium extension will be documented in this file.

## [1.2.36] - 2023-06-13

- Diff view when refactoring code in Codeium Chat is now toggleable
- General bug fixes and improvements

## [1.2.29] - 2023-06-07

- New option to "Generate Unit Tests" in the function Refactor menu
- General bug fixes

## [1.2.26] - 2023-05-25

- Function refactor leverages diff view so you can apply suggested changes directly to your editor
- Bug fixes with Codeium Chat support on Windows
- General bug fixes and improvements

## [1.2.21] - 2023-05-19

- Fixed issue with streaming timeouts for long chat generations
- General bug fixes

## [1.2.19] - 2023-05-11

- Docstring generation improvements
- General bug fixes bugs with diff view

## [1.2.17] - 2023-05-11

- Codeium Chat docstring generation can apply proposed changes to your editor
- Improved Chat error visibility with more graceful handling, visibility, and recovery
- Remove Code Lenses on one line functions to avoid clutter
- General bug fixes and improvements

## [1.2.13] - 2023-05-03

- Telemetry bug fixes
- Docstring generation improvements for a bunch of languages
- General chat UX improvements

## [1.2.10] - 2023-04-26

- Select code block in editor and right click to refactor / explain
- Codeium Chat support for Input Method Editor (IME) languages
- Fix Codeium Chat message ordering bugs for computers with non-standard datetime settings
- Codeium Chat messages sent by user will not be markdown formatted
- General bug fixes and improvements

## [1.2.4] - 2023-04-18

- Codeium Chat available for general use
- Clarify messaging surrounding telemetry
- Other bug fixes and general stability improvements

## [1.2.3] - 2023-04-13

- Codeium Chat bug fixes, specifically with duplicate messages
- New "Scroll to Bottom" prompt to ensure you can live follow chat responses
- Other general reliability and stability fixes

## [1.2.2] - 2023-04-11

- Codeium Chat available in beta
- Code lenses appear above function signatures for refactoring, explaining, and docstring generation

## [1.1.69] - 2023-03-27

- Codeium can now be triggered via the shortcut `Alt + \`

## [1.1.67] - 2023-03-24

- Improvements to search support for Java, JavaScript, PHP

## [1.1.63] - 2023-03-23

- Rolling out "fill in the middle" model improvements

## [1.1.55] - 2023-03-13

- Enhanced Codeium Search with exact string matching

## [1.1.51] - 2023-03-08

- Released Codeium Search

## [1.1.39] - 2023-02-16

- Significantly improved performance on Windows

## [1.1.35] - 2023-02-07

- Reduce repetitive completions
- Higher quality completions for more languages
- Fixed a bug involving CRLF line endings

## [1.1.7] - 2022-12-23

- Improve PHP support
- Make experimental languages opt-in

## [1.1.4] - 2022-12-20

- Support for Jupyter Notebooks

## [1.1.0] - 2022-12-12

### Added

- Support Linux ARM

### Updated

- Improve CPU compatibility on Linux x64
- Improve proxy support
- Respect VS Code proxy settings
- Only show welcome message after login

## [0.5.0] - 2022-11-30

### Added

- Code snippet telemetry opt out (see <https://www.codeium.com/profile>)
- Google SSO for auth

## [0.4.0] - 2022-10-31

### Updated

- Improved completion cutoff reasoning

## [0.3.0] - 2022-10-25

### Added

- Monaco editor web support
- Multi-language support

## [0.2.0] - 2022-10-21

### Updated

- Internal build changes

## [0.1.0] - 2022-10-13

### Added

- Initial release
