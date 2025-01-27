# @lo-fi/web

## 2.5.2

### Patch Changes

- feb503e: Better state tracking for queries and react hooks

## 2.5.1

### Patch Changes

- c9cd46b: Fix a bug with skip-level migrations from initial

## 2.5.0

### Minor Changes

- 52d0c0c: Changing index parameters on queries with specified keys will now update and re-run the query. Also fixed a rare race condition with incoming operations via sync.

## 2.4.1

### Patch Changes

- Updated dependencies [fd55c1b]
  - @verdant-web/common@1.13.4

## 2.4.0

### Minor Changes

- 1429bfb: Verdant's client no longer applies changes from _future versions of your schema_ to local data. These changes are still stored and synced, but they will not be reflected in the application. This change is necessary to ensure data integrity with the code that's actually running on your device-- if a future schema changes the shape of the data, but the current client doesn't have that change yet, any data that reflects those changes could be reshaped and violate the expected types in the older code.

  This is technically a breaking change but I would hope nobody is relying on that behavior for some reason.

  I've added an event you can subscribe to on the client called `futureSeen`. If the client notices a change from a future version of the app, it will fire this event. You can subscribe to it to prompt the user to reload the page and get the latest code. Otherwise, in a realtime scenario, they simply won't see the changes the other client is making.

### Patch Changes

- Updated dependencies [1429bfb]
  - @verdant-web/common@1.13.3

## 2.3.2

### Patch Changes

- Updated dependencies [9f2d7f2]
  - @verdant-web/common@1.13.2

## 2.3.1

### Patch Changes

- ed6cda6: Optimistically update own presence
- 8d32085: Provide more information for some errors
- 9edb078: Experimental "downloadRemote" property for file fields, which tries to download and store the file locally for offline use if it's not already on the device.
- Updated dependencies [6075f8d]
- Updated dependencies [8d32085]
- Updated dependencies [509917c]
- Updated dependencies [9edb078]
  - @verdant-web/common@1.13.1

## 2.3.0

### Minor Changes

- a8c8c09: New migration features: shortcut migrations, auto-migration

  ## Shortcut migrations

  You can skip versions when creating migrations, effectively deprecating ranges of versions which you believe no existing clients utilize anymore. This should be done with care!

  You can also use shortcut migrations to create a parallel path from one version to another which skips intermediate versions, reducing the number of migrations new clients have to make to reach the current version.

  See the [docs](https://verdant.dev/docs/local-storage/migrations) for more!

  ## Auto-migration

  Schema migrations now automatically apply simple changes without you having to write any migration logic. Changes supported are:

  - Adding indexes
  - Changing indexes
  - Removing indexes
  - Adding default values to fields or sub-fields
  - Removing fields or sub-fields

  If your schema changes fall within these categories, you don't have to write any migration logic! Just leave the generated file in-place.

### Patch Changes

- Updated dependencies [a8c8c09]
  - @verdant-web/common@1.13.0

## 2.2.0

### Minor Changes

- c243009: (internal) remove extranous data from object IDs

### Patch Changes

- Updated dependencies [c243009]
  - @verdant-web/common@1.12.0

## 2.1.0

### Minor Changes

- 9c9a288: Include own replicas in sync auto-upgrade logic

### Patch Changes

- a1278d9: New event on sync for active syncing state - subscribe to know when potentially long-running sync is taking place

## 2.0.5

### Patch Changes

- c026fbf: Pass useBroadcastChannel to sync options to enable experimental cross-tab sync

## 2.0.4

### Patch Changes

- 7f71b60: Resync pull sync on window visible

## 2.0.3

### Patch Changes

- c298777: consistency fix for entity caching

## 2.0.2

### Patch Changes

- db43f41: Rename framework to "Verdant"
- Updated dependencies [db43f41]
  - @verdant-web/common@1.11.1

## 2.0.1

### Patch Changes

- e981912: Fix duplication in queries when multiple array index values match query

## 2.0.0

### Major Changes

- 9219d68: New queries, including paginated queries.

  # Breaking changes & migration

  You must move any index filters passed to `findOne` or `findAll` into an `index` property in the passed object parameter.

  # What's changed under the hood

  The query system has been revamped to allow for pagination, more intentional caching, and lazy-loading results.

  For the most part, existing `get`, `findOne`, and `findAll` queries work the same as before. However, note that they will not longer eagerly fetch results on creation; you must access `.resolved` or call `.subscribe` to trigger the initial query.

  # New features

  There are two new queries, `getAllInfinite` and `getPage`, which load paginated subsets of the results. You can read about how to use these new queries in the docs.

  This is a major version change for `web` because of the `index` field change, and lazy-loading may cause unforeseen issues in existing codebases. Please upgrade and test functionality carefully. `cli` has also been major-bumped to go along with `web` since it now generates code that relies on `web`'s new functionality.

### Patch Changes

- Updated dependencies [9219d68]
  - @lo-fi/common@1.11.0

## 1.13.1

### Patch Changes

- d0e546d: Fix your own replica's presence showing up as a peer on a different device
- Updated dependencies [d0e546d]
  - @lo-fi/common@1.10.4

## 1.13.0

### Minor Changes

- c02e4ce: Allow adding custom mutation hooks to createHooks

## 1.12.10

### Patch Changes

- bf566ef: Fix big inefficiencies in synced baselines, overhaul highwater/ack system
- Updated dependencies [bf566ef]
  - @lo-fi/common@1.10.3

## 1.12.9

### Patch Changes

- 363dccb: Increase query cache time to enable easier preloading

## 1.12.8

### Patch Changes

- 11d9df8: Bugfix for initializing a new entity from the snapshot of an old one

## 1.12.7

### Patch Changes

- 8b6e652: Bugfix: old operations which reference deleted collections should hopefully not fail on initial sync now

## 1.12.6

### Patch Changes

- 0eeb006: Make updatedAt a number, add deepUpdatedAt
- Updated dependencies [4af8cc0]
  - @lo-fi/common@1.10.2

## 1.12.5

### Patch Changes

- 4548567: Add an 'updatedAt' timestamp to Entity which reflects the wall time of the last applied operation
- Updated dependencies [4548567]
  - @lo-fi/common@1.10.1

## 1.12.4

### Patch Changes

- 06c2bd2: Resilience against data inconsistency during migration

## 1.12.3

### Patch Changes

- c3bf6b4: More resiliency for bad data states

## 1.12.2

### Patch Changes

- 70e5790: Bugfix for index values being diffed during a migration

## 1.12.1

### Patch Changes

- 2b16623: Attempted bugfix for gnocchi.club

## 1.12.0

### Minor Changes

- 0c5dc4c: Big update to increase consistency of sync and patch up some faulty assumptions in the protocol. NOTE: clients may re-sync the whole library upon connection after upgrade, but this should only happen once.

### Patch Changes

- Updated dependencies [0c5dc4c]
  - @lo-fi/common@1.10.0

## 1.11.1

### Patch Changes

- bc7b6ad: Several fixes for file behaviors
- bc0d96f: Allow clearing undo history

## 1.11.0

### Minor Changes

- 6aae4d6: Support for file fields, file uploads and storage

### Patch Changes

- Updated dependencies [6aae4d6]
- Updated dependencies [55ffd63]
  - @lo-fi/common@1.9.0

## 1.10.11

### Patch Changes

- 01936cf: Fix a bug in undo list delete
- 7252c6b: Revert attempt at mocking indexeddb for servers
- Updated dependencies [01936cf]
  - @lo-fi/common@1.8.4

## 1.10.10

### Patch Changes

- cd41849: Attempt to make client isomorphic

## 1.10.9

### Patch Changes

- b879919: Update and fix some react usages
- Updated dependencies [b879919]
  - @lo-fi/common@1.8.3

## 1.10.8

### Patch Changes

- Updated dependencies [023abf8]
  - @lo-fi/common@1.8.2

## 1.10.7

### Patch Changes

- 1bc2b2d: Fix import
- Updated dependencies [1bc2b2d]
  - @lo-fi/common@1.8.1

## 1.10.6

### Patch Changes

- f4917a4: Fix major bug with desc.open(), rollback WeakRef usage
- Updated dependencies [0c93e2e]
  - @lo-fi/common@1.8.0

## 1.10.5

### Patch Changes

- b13d81d: Bugfix: list deletes were not pruning lists

## 1.10.4

### Patch Changes

- 15ed2a2: Skippable hooks, new advanced hooks, configurable sync

## 1.10.3

### Patch Changes

- 3dbe685: Dynamically set pull interval for sync

## 1.10.2

### Patch Changes

- Updated dependencies [aa40deb]
  - @lo-fi/common@1.7.1

## 1.10.1

### Patch Changes

- 2f7ec9a: Apply defaults to sub-objects created in .update

## 1.10.0

### Minor Changes

- 272e859: Fix a big bug in .update on entities erasing properties

### Patch Changes

- Updated dependencies [272e859]
- Updated dependencies [28fdcbb]
  - @lo-fi/common@1.7.0

## 1.9.0

### Minor Changes

- 8c95fbc: Expose method to reset server-side data for a library

### Patch Changes

- Updated dependencies [8c95fbc]
  - @lo-fi/common@1.6.0

## 1.8.1

### Patch Changes

- 5df835e: fix push/pull sync timing

## 1.8.0

### Minor Changes

- 49d7f88: Advanced batching and undo control. Bugfixes for undo application.

### Patch Changes

- Updated dependencies [49d7f88]
  - @lo-fi/common@1.5.0

## 1.7.2

### Patch Changes

- 4a9a9c8: Add sources to npm files
- Updated dependencies [b1a4646]
- Updated dependencies [4a9a9c8]
  - @lo-fi/common@1.4.5

## 1.7.1

### Patch Changes

- fab4656: New more compact timestamp format
- Updated dependencies [fab4656]
  - @lo-fi/common@1.4.4

## 1.7.0

### Minor Changes

- 20419d8: Experimental import/export feature

## 1.6.7

### Patch Changes

- a7113ed: fix useWatch typings

## 1.6.6

### Patch Changes

- b03fa61: Refactor for sync stability
- Updated dependencies [b03fa61]
  - @lo-fi/common@1.4.3

## 1.6.5

### Patch Changes

- c0d8b3f: Catch storage write errors

## 1.6.4

### Patch Changes

- Updated dependencies [f13043f]
  - @lo-fi/common@1.4.2

## 1.6.3

### Patch Changes

- 1486b2f: More advanced watch tools for changes
- Updated dependencies [1486b2f]
  - @lo-fi/common@1.4.1

## 1.6.2

### Patch Changes

- 6d88c9f: Fix to remove promise from getCached

## 1.6.1

### Patch Changes

- e87c01b: Expose a getCached method for retrieving cached entities

## 1.6.0

### Minor Changes

- 0562878: Overhaul migrations to include arbitrary mutations and querying

### Patch Changes

- Updated dependencies [0562878]
  - @lo-fi/common@1.4.0

## 1.5.0

### Minor Changes

- 7eeee9e: Rework entity typings and codegen

## 1.4.4

### Patch Changes

- 5ff038a: add sanitize index value function
- Updated dependencies [5ff038a]
  - @lo-fi/common@1.3.3

## 1.4.3

### Patch Changes

- 4ebc8c2: Support more index value types

## 1.4.2

### Patch Changes

- d5f9c4a: Clean up baselines on deletion

## 1.4.1

### Patch Changes

- 70b9a88: Fix useWatch, allow null ID in usePeer
- Updated dependencies [b2fe1f9]
  - @lo-fi/common@1.3.2

## 1.4.0

### Minor Changes

- 54ec520: Variable typing of Presence and Profile. Continuing to reduce typing complexity internally in the library.

## 1.3.4

### Patch Changes

- 9321cb0: Expose undo hooks
- ef12284: Fix pull sync giving up after a failure

## 1.3.3

### Patch Changes

- 5c7a6b0: bugfix: fix deleting entities and querying. fix sending messages while sync is paused.

## 1.3.2

### Patch Changes

- 895fda4: Add startsWith filter for string fields
- Updated dependencies [895fda4]
  - @lo-fi/common@1.3.1

## 1.3.1

### Patch Changes

- 95da5c8: Fix FireFox support by removing unsupported method usage

## 1.3.0

### Minor Changes

- 8369c49: Add deep change subscription. Lots of consistency fixes. More performant diffing of nested updates. Overhaul OID internal storage mechanism. Presence update batching.

### Patch Changes

- Updated dependencies [8369c49]
  - @lo-fi/common@1.3.0

## 1.2.0

### Minor Changes

- 0e11d9b: Big internal refactoring to improve performance and consistency. Major bugfixes to undo, sync exchanges.

### Patch Changes

- Updated dependencies [0e11d9b]
  - @lo-fi/common@1.2.0

## 1.1.5

### Patch Changes

- 0e7299e: Remove unique field option. Add default values during default migrations.
- Updated dependencies [0e7299e]
  - @lo-fi/common@1.1.4

## 1.1.4

### Patch Changes

- d7f2561: hotfix: don't delete indexed fields, only synthetics
- Updated dependencies [d7f2561]
  - @lo-fi/common@1.1.3

## 1.1.3

### Patch Changes

- 617a84c: Add integration tests for migration and fix several bugs
- Updated dependencies [617a84c]
  - @lo-fi/common@1.1.2

## 1.1.2

### Patch Changes

- 16aeb5b: fix bug crashing hooks if used twice

## 1.1.1

### Patch Changes

- 03b40f3: Add sort filter, fix bugs with diff and filters
- Updated dependencies [03b40f3]
  - @lo-fi/common@1.1.1

## 1.1.0

### Minor Changes

- f3bd34f: use more descriptive oids

### Patch Changes

- Updated dependencies [f3bd34f]
  - @lo-fi/common@1.1.0

## 1.0.7

### Patch Changes

- 1571c72: bugfixes for usage

## 1.0.6

### Patch Changes

- 2560a63: Add passive and read-only replica types
- Updated dependencies [2560a63]
  - @lo-fi/common@1.0.3

## 1.0.5

### Patch Changes

- 18e45b1: add sub-object typings to cli
- 18e45b1: fix typing error in entity data

## 1.0.4

### Patch Changes

- Updated dependencies [d29193f]
  - @lo-fi/common@1.0.2

## 1.0.3

### Patch Changes

- f8080ea: expose and generate types for delete all

## 1.0.2

### Patch Changes

- 5edff26: add delete all method

## 1.0.1

### Patch Changes

- 5f89e31: fix delete not affecting sub-object
- Updated dependencies [5f89e31]
  - @lo-fi/common@1.0.1

## 1.0.0

### Minor Changes

- 7c87fdd: Undo and redo, more aggressive rebasing

### Patch Changes

- Updated dependencies [7c87fdd]
  - @lo-fi/common@1.0.0

## 0.3.1

### Patch Changes

- 1ca6303: Fix a big initial sync issues when joining library with existing baslines

## 0.3.0

### Minor Changes

- 5c4a92d: Separate auth into its own endpoint

### Patch Changes

- Updated dependencies [5c4a92d]
  - @lo-fi/common@0.3.0

## 0.2.2

### Patch Changes

- 2c7083f: fix missing presence with http sync
- 3366b20: Consolidate operation storage size
- 7f5210c: Restore schema comparison migration check

## 0.2.1

### Patch Changes

- 7a333aa: default field values
- 0497ebe: make schema indexes optional
- Updated dependencies [7a333aa]
- Updated dependencies [0497ebe]
  - @lo-fi/common@0.2.1

## 0.2.0

### Minor Changes

- dd0e3a8: Hybrid push/pull sync for solo clients

### Patch Changes

- 50f7ca0: rename sync to ServerSync, don't require it by default
- Updated dependencies [dd0e3a8]
  - @lo-fi/common@0.2.0

## 0.1.3

### Patch Changes

- fa2e4a8: bugfixes

## 0.1.2

### Patch Changes

- c7e541f: plural client collection names, fix generator bugs

## 0.1.1

### Patch Changes

- 3f71be4: Added CLI to generate client typings
- Updated dependencies [3f71be4]
  - @lo-fi/common@0.1.1

## 0.1.0

### Patch Changes

- 19bc8f2: Added 'any' field type to schema
- 3d2e2e5: support plural name in hooks
- Updated dependencies [19bc8f2]
- Updated dependencies [3d2e2e5]
  - @lo-fi/common@0.1.0
