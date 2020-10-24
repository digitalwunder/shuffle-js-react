## Prerequisites

Please answer the following questions for yourself before submitting an issue. **YOU MAY DELETE THE PREREQUISITES SECTION.**

- [ ] I am running the latest version
- [ ] I checked the documentation and found no answer
- [ ] I checked to make sure that this issue has not already been filed
- [ ] I'm reporting the issue to the correct repository (for multi-repository projects)

[provide general introduction to the issue logging and why it is relevant to this repository]

## Context

[provide more detailed introduction to the issue itself and why it is relevant]

Please provide any relevant information about your setup. This is important in case the issue is not reproducible except for under certain conditions.

* Firmware Version:
* Operating System:
* SDK version:
* Toolchain version:

## Process or Steps to Reproduce

[ordered list the process to finding and recreating the issue, example below]

1. User goes to delete a dataset (to save space or whatever)
2. User gets popup modal warning
3. User deletes and it's lost forever

## Expected result

[describe what you would expect to have resulted from this process]

## Current result

[describe what you you currently experience from this process, and thereby explain the bug]

## Possible Fix

[not obligatory, but suggest fixes or reasons for the bug]

* Modal tells the user what dataset is being deleted, like “You are about to delete this dataset: car_crashes_2014.”
* A temporary "Trashcan" where you can recover a just deleted dataset if you mess up (maybe it's only good for a few hours, and then it cleans the cache assuming you made the right decision).

## `name of issue` screenshot

[if relevant, include a screenshot]

----

## Examples

* [Mulitpolygon issue](https://github.com/CartoDB/cartodb-platform/issues/721)
* [Madrid Projection issue](https://github.com/CartoDB/cartodb-platform/issues/579)
* [SQL Layer deletion issue](https://github.com/CartoDB/cartodb-platform/issues/598)
* [Table Deletion Issue](https://github.com/CartoDB/cartodb-platform/issues/722)

## Failure Logs

Please include any relevant log snippets or files here.