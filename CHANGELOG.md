# Changelog

All notable changes to this project will be documented in this file.

The format is mainly based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.8-1] - 2024-04-25

## Changed

- Fixed previous issues with the `useDeepEffect` hook.

## [0.1.8-0] - 2024-04-21

## Added

- Created the new `useDeepEffect` hook that will fire when ever a monitored value changes.

## [0.1.7] - 2024-04-15

## Fixed

- Found issue where `useDeepMemo` was always running when one of the dependencies was an array. Found the issue was in the `cloneDeep` function; the `copyArray` function was not handling an array that contained another array.

## [0.1.7-9] - 2024-04-14

## Changed

- This seems to fix the issue array clone issue.

## [0.1.7-8] - 2024-04-13

## Changed

- Another attempt for object copying.

## [0.1.7-7] - 2024-04-13

## Changed

- Another try to get the object copying working.

## [0.1.7-6] - 2024-04-13

## Changed

- Opting for correctness over performance for now.

## [0.1.7-5] - 2024-04-13

## Changed

- Adding more tests.

## [0.1.7-4] - 2024-04-13

## Changed

- Changing the way the cloneDeep function works to try and fix this issue.

## [0.1.7-3] - 2024-04-13

## Changed

- Added some console.log's to see why the comparison isn't working.

## [0.1.7-2] - 2024-04-13

## Changed

- Commented out the not equals dependency comparison

[unreleased]: https://github.com/Beehive-Software-Consultants/beesoft-common/compare/v0.1.8-1...develop
[0.1.8-1]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.8-1
[0.1.8-0]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.8-0
[0.1.7]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7
[0.1.7-9]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-9
[0.1.7-8]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-8
[0.1.7-7]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-7
[0.1.7-6]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-6
[0.1.7-5]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-5
[0.1.7-4]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-4
[0.1.7-3]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-3
[0.1.7-2]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7-2
