# Unexpected Behavior of `arguments` object in strict mode

This repository demonstrates an unexpected behavior of the `arguments` object within a Node.js environment when strict mode is active.  In strict mode, `arguments` is not an array-like object in the same way it behaves in non-strict mode, leading to potential errors when using array methods directly.

## Bug Description
The provided `bug.js` file showcases the issue. When the `myFunc` function is called, and it's in strict mode, attempting to directly use array methods like `map` or `forEach` on the `arguments` object will throw a TypeError.

## Solution
The `bugSolution.js` file provides a solution to this issue by converting `arguments` into an array using the `Array.from()` method, and demonstrates array methods working correctly.  This is a general best practice when working with `arguments` in strict mode.
