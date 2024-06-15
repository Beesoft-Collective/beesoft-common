# Changelog

All notable changes to this project will be documented in this file.

The format is mainly based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/Beehive-Software-Consultants/beesoft-common/compare/v0.1.10...develop
[0.1.7]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.7

[0.1.10]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.10
[0.1.9]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.9
[0.1.8]: https://github.com/Beehive-Software-Consultants/beesoft-common/releases/tag/v0.1.8
