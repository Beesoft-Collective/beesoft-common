# Changelog

All notable changes to this project will be documented in this file.

The format is mainly based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2026-01-14

## Added

- Added `fileToBase64` function.

## [0.2.0] - 2026-01-06

## Changed

Upgraded to React 19.

## [0.1.19] - 2025-12-01

## Changed

- Added an `onError` event to allow the developer to be notified when an error occurs because of the users action.

## [0.1.18] - 2025-08-09

## Changed

- Added a `defaultValue` property; this will be used to set the default value for a control. This is useful for form libraries also.

## [0.1.17] - 2025-07-11

## Changed

- Got `useEvent` working correctly.

## Added

- Created a `useEventType` function to support wrapped function types; this will support types like throttle and debounce functions.

## [0.1.16] - 2025-07-11

## Changed

- Previous typings change did not return the type of the callback which was still causing errors.

## [0.1.15] - 2025-07-11

## Changed

- Changed the typings of the `useEvent` hook since it was returning a type of any and causing typing errors in user code.

## [0.1.14] - 2025-07-11

## Added

- Created a `useEvent` hook that will maintain a stable function that will always have the latest version of any state variables or component properties.

## [0.1.13] - 2025-06-13

## Added

- Moved the `FormInputControl` and `FormInputControlData` interfaces from the headless UI library.

## [0.1.12] - 2025-05-22

## Added

- Moved the `forceAssert` function to the common library, so it can be used by any beesoft library.

## [0.1.11] - 2025-05-17

## Added

- Added a new `MakeOptional` type to be used in beesoft-components.

## [0.1.10] - 2024-06-15

## Added

- Exported the `DebouncedFunction` type, so it can be used in beesoft-components.

## [0.1.9] - 2024-06-03

## Added

- Added a new `ReplacePropertyType` type that will allow a property in a type to be replaced by another.

## [0.1.8] - 2024-04-25

## Added

- Added a `useDeepEffect` hook that will work like a useEffect but do a deep comparison on the dependencies.

## [0.1.7] - 2024-04-15

## Fixed

- Found issue where `useDeepMemo` was always running when one of the dependencies was an array. Found the issue was in the `cloneDeep` function; the `copyArray` function was not handling an array that contained another array.

[unreleased]: https://github.com/Beesoft-Collective/beesoft-common/compare/v0.2.1...develop
[0.1.7]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7

[0.2.1]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.2.1
[0.2.0]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.2.0
[0.1.19]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.19
[0.1.18]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.18
[0.1.17]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.17
[0.1.16]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.16
[0.1.15]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.15
[0.1.14]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.14
[0.1.13]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.13
[0.1.12]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.12
[0.1.11]: https://github.com/Beesoft-Collective/beesoft-common/releases/tag/v0.1.11
[0.1.10]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.10
[0.1.9]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.9
[0.1.8]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.8
