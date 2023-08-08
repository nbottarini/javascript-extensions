[![npm](https://img.shields.io/npm/v/@nbottarini/javascript-extensions.svg)](https://www.npmjs.com/package/@nbottarini/javascript-extensions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/javascript-extensions/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/javascript-extensions/actions)


# Javascript Extensions
Useful javascript/typescript extensions

## Installation

Npm:
```
$ npm install --save @nbottarini/javascript-extensions
```

Yarn:
```
$ yarn add @nbottarini/javascript-extensions
```

Then simply import the module from the main javascript/typescript file of your application or library:

```javascript
import '@nbottarini/javascript-extensions'
```

## Array Extensions

```javascript
[1, 2, 2, 3].distinct() // returns [1, 2, 3]
[1, 2, 3].isEmpty() // returns false
[1, 2, 3].isNotEmpty() // returns true
    
[1, 2, 3].firstOrNull() // returns 1
[].firstOrNull() // returns null
[1, 2, 3].firstOrNull(i => i > 1) // returns 2
[1, 2, 3].firstOrNull(i => i > 5) // returns null

[1, 2, 3].first() // returns 1
[].first() // returns undefined
[1, 2, 3].first(i => i > 1) // returns 2
[1, 2, 3].first(i => i > 5) // returns undefined

[1, 2, 3].lastOrNull() // returns 3
[].lastOrNull() // returns null
[1, 2, 3].lastOrNull(i => i < 3) // returns 2
[1, 2, 3].lastOrNull(i => i > 5) // returns null

[1, 2, 3].last() // returns 3
[].last() // returns undefined
[1, 2, 3].last(i => i < 3) // returns 2
[1, 2, 3].last(i => i > 5) // returns undefined

[1, 2, 3].contains(2) // returns true
[1, 2, 3].contains(4) // returns false

[3].single() // returns 3
[].single() // throws error
[1, 2, 3].single(i => i > 2) // returns 3
[1, 2, 3].single(i => i > 1) // throws error
[1, 2, 3].single(i => i > 3) // throws error

[3].singleOrNull() // returns 3
[].singleOrNull() // returns null
[1, 2, 3].singleOrNull(i => i > 2) // returns 3
[1, 2, 3].singleOrNull(i => i > 1) // returns null
[1, 2, 3].singleOrNull(i => i > 3) // returns null

[1, 2, 3].all(i => i > 0) // returns true
[1, 2, 3].all(i => i > 3) // returns false

[1, 2, 3].any(i => i > 1) // returns true
[1, 2, 3].any(i => i > 3) // returns false

[1, 2, 3].drop(1) // returns [2, 3]
[1, 2, 3, 4, 5].drop(3) // returns [4, 5]

[1, 2, 3].dropLast(1) // returns [1, 2]
[1, 2, 3, 4, 5].dropLast(3) // returns [1, 2]

[1, 2, 3].forEachIndexed((item, index) => {
    // Do something
})

[1, 2, 3].mapIndexed((item, index) => {
    // Map the array to other array
})

[1, 2, 3].max() // returns 3
['a', 'd', 'b'].max() // returns 'd'
[].max() // returns undefined

[{ age: 13 }, { age: 20}, { age: 6}].maxOf(e => e.age) // returns 20
    
[1, 2, 3].min() // returns 1
['a', 'd', 'b'].min() // returns 'a'
[].min() // returns undefined

[{ age: 13 }, { age: 20}, { age: 6}].minOf(e => e.age) // returns 6
```

## String Extensions

```javascript
'23'.padZeros(3) // returns '023'
'23'.padZeros(5) // returns '00023'
'23'.padZeros(1) // returns '23'

'hello'.removePrefix('h') // returns 'ello'
'hello'.removePrefix('he') // returns 'llo'
'hello'.removePrefix('by') // returns 'hello'

'hello'.countOccurrences('he') // returns 1
'hello'.countOccurrences('l') // returns 2
'hello'.countOccurrences('w') // returns 0
```
