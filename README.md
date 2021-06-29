# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mitchwaldrich/lotide`

**Require it:**

`const _ = require('@mitchwaldrich/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first value of an array.
* `middle(arr)`: returns the middle value(s) of an array.
* `tail(arr)`: returns an array of all values after the first value.
* `assertArraysEqual(actual, expected)`: asserts the equality of a returned array against its predicted output.
* `assertEqual(actual, expected)`: asserts the equality of a returned value against its predicted value.
* `assertObjectsEqual(actual, expected)`: asserts the equality of a returned object against its predicted object.
* `countLetters(string)`: takes in a string and returns key value pairs of how many times each character appears.
* `countOnly(array, object)`: takes in an array and returns an object of only the prescribed values.
* `eqArrays(arr1, arr2)`: compares the equality of two arrays.
* `eqObjects(obj1, obj2)`: compares the equality of two objects.
* `findKey(object, callback)`: takes in an objects and performs the callback function, returning the first truthy value found in the object.
* `findKeyByValue(object, value)`: takes in an object and returns the first key found for a given value.
* `letterPositions(string)`: takes in a string and returns an object of key value pairs of each character and its position in the string.
* `map(array, callback)`: performs a given callback on an array to return the resulting array.
* `takeUntil(array, callback)`: returns a slice of an array until the truthiness of a given callback is produced.
* `without(arr1, arr2)`: takes in a source array and a second array of items to remove, then returns a new array of only desired items.