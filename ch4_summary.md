# Chapter 4: DATA STRUCTURE: OBJECTS AND ARRAYS

https://eloquentjavascript.net/04_data.html

## Core Concepts (3-5 only)

1. typeOf(value) always offer strings, keep "" in mind for comparisons.
2. Strings ARE arrays, think them as immutable arrays.
3. A .method is a function inside an object property.
4. functions() ARE callable objects
5. reading a property that doesn't exist will give me `undefined`.
6. To replace objects properties I don't use let, just call the property = something.
7. Primitive are immutable, they don't have an internal memory id.
8. Objects and arrays are mutable, reference to an internal memory id.
9. If we need to check multiple boolean conditions, best strategy is to first check all false, and if the loop pass, return true.
10. Destructuring need keys inside the {} or []. We can use default to avoid errors if that kwy doesn't exist. `const { discount = 0 } = product;`
11. `==` Converts types, then compares = Unpredictable behavior (5 == "5" -> true) | `===` Checks type AND value + No unpredictable conversions

## Syntax I'll Forget

```js
array[key]; object[key] // Both brings the value inside that property key
typeof(null) === object  //  null being an object is a JS bug
function(...numbers) {}  //  Tool to let functions accept multiple arguments
max(...numbers) // Spread operator transform this array [5, 1, 7] into (5,1,7)
Math.methods // Daily utils

string.trim() // Removes whitespace from both ends of a string
string.padStart(3, "0"); // 00string
string.split(" ").join(". "); // Choose the character at which the split/join is made
string.repeat(3); // x times prop

anyArray
.reverse(); // Reverses the elements of the array in place
.push(4); // Adds values to the end of an array
.pop() // Remove the last value in the array and returns it
.unshift() // Add elements at the start of an array
.shift() // Remove elements at the start of an array
.indexOf() // Searches through the array from the start to end and RETURNS index at which the requested value was found (or -1 not found)
.lastIndexOf() // Like indexOf() but from end to start
.slice(i1, i2) // Takes start and end indices and returns an array that has only the elements between them - omit the i and copy the array
.splice() // changes the contents of an array by remove/replace existing elements and/or adding new elements in place (A:index, B: remove or 0=add, C: argument to add, can be empty)
.concat(array, array) // append arrays

Object
.keys(anyObject) // Return an array of keys.
.assign(anyObject, otherObject) // Copy properties and values from one obj to other.
.anyKey.includes(string) // Search that key inside the object. Useful for loops. THERE IS NO notInclude method, use !Object.anyKey.includes(string)
"keyName" in anObject // in operator check if that key exist on the object.

Loops
for (let entry of JOURNAL) { "Do something with entry" } // Loop by units of a group is useful!

JSON.stringify() // Takes a JavaScript value and returns a JSON-encoded string
JSON.parse() // Takes JSON-encoded strings and converts it to the value it encodes

```

## Working Examples

```js
// Walking the nodes exercise
function nth(list, n) {
  let current = list;
  for (let i = 0; i < n; i++) {
    if (current === null) return undefined;
    current = current.rest;
  }
  return current === null ? undefined : current.value; // This double check means we can still be on a node with rest:null
}
let objList2 = {
  value: 10,
  rest: { value: 20, rest: { value: 30, rest: null } },
};
console.log(nth(objList2, 3)); // → 20

// Recursive exercise
function deepEqual(val1, val2) {
  if (
    typeof val1 !== "object" ||
    typeof val2 !== "object" ||
    val1 === null ||
    val2 === null
  )
    return val1 === val2; // First if: any objects, not null → continue if not, primitive check -> true/false
  if (Object.keys(val1).length !== Object.keys(val2).length) return false; // Second if: both have same # of keys → continue
  let keys1 = Object.keys(val1),
    keys2 = Object.keys(val2),
    loop = Object.keys(val1).length;
  for (let key of keys1) {
    if (!keys2.includes(key)) return false; // Third: all keys in obj1 are present on obj2 -> continue
    if (!deepEqual(val1[key], val2[key])) return false; // fourth: if non check return false -> continue
  }
  return true; // if all checks are passed, then return true
}
let obj = { here: { is: "an" }, object: 2 };
```

## My Breakthrough Moment

- Object walk-the-nodes logic is confusing, this code `for (let node = list; node; node = node.rest) {}` means "node position is the top level object -list-, if that node is true, then next loop will bring node.rest as the new node and iterate again until it reach null".

- Recursive functions are the way to go for nested objects (hard topic, keep it slow).
