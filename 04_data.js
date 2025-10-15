// ========================================================
// CHAPTER 4 - DATA STRUCTURE: OBJECTS AND ARRAYS
// ========================================================
// https://eloquentjavascript.net/04_data.html

// ========================================================
// ARRAYS & OBJECTS 
// ========================================================

// ********************************************************
// MARK: array = []
// ********************************************************
// ordered list of values between [] -> notation for getting at the elements inside an array also uses []
// Kind of object specialized for storing sequences of things.

let array = [1, 2, 3];
console.log(typeof (array)) // -> object | 💡 array of objects are mostly used.

// Elements in an array are stored as the array’s properties, using numbers as property names.    
// Because you can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway, you have to use the bracket notation to get at them.


// Property names are strings. To access them we use both  . or []
values.x; // -> calling for the name of the property -> fetches the property of value named “x”. Works only with names starting with a letter or underscore, and containing only letters, numbers, and underscores.
values[x]; // -> Evaluate the expression between brackets to get property name -> takes the value of the variable named x and uses that converted to a string, as the property name.

console.log(typeof(null))

// null and undefined doesn't have properties.
null.length; // -> TypeError: Cannot read properties of null (reading 'length')

// 💡 Think STRINGS are ARRAYS, most of the .methods are applicable to them. Their immutable primitive characteristic make new properties to not stick.
string.trim(); // removes whitespace from both ends of a string
string.padStart(3, "0"); // → 00string
string.split(" ").join(". "); // choose the character at which the split/join is made
string.repeat(3);

// ********************************************************
// MARK: .methods
// ********************************************************
// Properties that contain functions. Ex: .toUpperCase is a method of a string

let sequence = [1, 2, 3];
sequence.reverse(); // reverse method reverses the elements of the array in place
sequence.push(4); // push method adds values to the end of an array
sequence.push(5); console.log(sequence); // → [1, 2, 3, 4, 5]

console.log(sequence.pop()); // pop method remove the last value in the array and returns it
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

// ********************************************************
// MARK: object = {}
// ********************************************************

// ⚠️ IMPORTANT: typeof null === "object" (JavaScript bug)
// Collection of named values between {} separated by commas. Each property -> {name: value,}
// Reading a property that doesn’t exist will give you the value `undefined`

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
    "touched tree": "Touched a tree" // property name with space or that aren't valid bindings name must be quoted

};

day1.naked = false; // This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

// 💡 No need to add const or let to edit or add properties to an object

console.log(day1.squirrel); // → false
console.log(day1.dontExist); // → undefined
console.log(day1.naked);


let anObject = { left: 1, right: 2 };
console.log(Object.keys(anObject)); // -> [ 'left', 'right' ] | Object.keys function return an array of strings property names
delete anObject.left;
console.log(anObject.left); // -> undefined | delete operator -> remove the named property from the object
console.log("left" in anObject); // -> false | in operator, tells you whether that object has a property with that name. 

let anotherObject = {}
Object.assign(anotherObject, anObject) // Object.assign copies all properties from one object into another
console.log(anObject) // -> { right: 2 }
console.log(anotherObject) // -> { right: 2 }

// 💡 functions ARE "first-class objects." This means:

function greet() {              // -> Functions are objects that happen to be callable
    return "Hello!";
};
greet.language = "English";     // -> Functions can have properties
greet.version = 1.0;
greet.loudly = function (name) { // -> Functions can have methods
    return "HELLO, " + name.toUpperCase() + "!!!";
};
console.log("Main function:", greet("Alice")); // Call the main function
console.log("Method 1:", greet.loudly("Bob")); // Call the methods attached to the function

// ********************************************************
// MARK: Mutability
// ********************************************************

// 💡 immutability == predictability


// primitives are immutable 💡 Reassignment is NOT Mutation. Values doesn't have an internal memory ID but they are dif

let str = "hello";
str.toUpperCase(); // Creates a NEW string
console.log("Original value: ", str); // Still "hello" - unchanged
str = str.toUpperCase(); // we reassign str to the NEW string not mutating the original
console.log("Reassigned value: ", str); // looks like muted but was reassigned

let num = 5;
num + 10; // Creates a NEW number
console.log(num); // Still 5

// object and array values are mutable 💡 We must consciously choose immutability using spread operator

// Mutable approach
const user1 = { name: "Alice", age: 30 };
user1.age = 31; // Modifies the SAME object
console.log("Mutable:", user1); // Mutable: {"name":"Alice","age":31}

const scores1 = [100, 95, 88];
scores1.push(92); // Modifies the SAME array
console.log("Mutable:", scores1); // Mutable: [100,95,88,92]

// Immutable approach (creates new array)
const user2 = { name: "Bob", age: 30 };
const updatedUser = { ...user2, age: 31 };  // spread operator creates new object
console.log("Original:", user2);            // Original: {"name":"Bob","age":30}
console.log("Updated:", updatedUser);       // Updated: {"name":"Bob","age":31}

const scores2 = [100, 95, 88];
const newScores = [...scores2, 92]; // spread operator creates new array
console.log("Original:", scores2);  // Original: [100,95,88]
console.log("New:", newScores);     // New: [100,95,88,92]

// MARK: compare === arrays and objects
// Compare objects with == operator, it compares by identity:
true // if both objects are precisely the same value (identity)
false // even if they have identical properties
// 💡 JavaScript compares by identity (reference), not by content. There is no “deep” (===) comparison operation that compares objects by contents

// Two objects with IDENTICAL content are different in memory
const person1 = { name: "Alice", age: 30 };
const person2 = { name: "Alice", age: 30 };
const person3 = person1;
console.log(person1 == person2); // false
console.log(person1 == person3); // true

// ********************************************************
// MARK: Correlation table exercise
// ********************************************************

// 😭 This is a very complicated  way of explaining arrays, I hope it gests better!

// The table represents a 2x2 grid with a four-element array ([76, 9, 4, 1])
// 
//                    Event didn't happen | Event happened
//                    --------------------|----------------
// No squirrel        |      table[0]     |    table[1]
// Squirrel happened  |      table[2]     |    table[3]

// We’ll interpret the indices to the array as two-bit binary numbers: leftmost (most significant) digit refers to the squirrel variable, rightmost (least significant) digit refers to the event variable. For example, the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, “pizza”) didn’t occur.

// Table structure:
// table[0] = no event, no squirrel
// table[1] = event happened, no squirrel
// table[2] = no event, squirrel happened
// table[3] = event happened, squirrel happened

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt(
            (table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])
        );
};
// console.log(phi([76, 9, 4, 1])); // -> 0.06859943405700354

// Loop over all the entries from JOURNAL and tally how many times the event occurs
// in relation to squirrel transformations:

var JOURNAL = [
    { "events": ["carrot", "exercise", "weekend"], "squirrel": false },
    { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
    { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["spaghetti", "nachos", "work"], "squirrel": false },
    { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
    { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
    { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work"], "squirrel": false },
    { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "work"], "squirrel": false },
    { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
    { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
    { "events": ["lasagna", "peanuts", "work"], "squirrel": true },
    { "events": ["pizza", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["pizza", "cycling", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
    { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "candy", "work"], "squirrel": false },
    { "events": ["potatoes", "nachos", "work"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brussel sprouts", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["candy", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
    { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "reading", "weekend"], "squirrel": false },
    { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
    { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
];

// Tool for computing individual correlations.
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];                            // Create table with 4 zeros
    for (let i = 0; i < journal.length; i++) {           // Loop through each journal entry
        let entry = journal[i], index = 0;               // Get current entry, start index at 0 (table position)
        if (entry.events.includes(event)) index += 1;    // If event is in this day's events, add 1 to index
        if (entry.squirrel) index += 2;                  // If squirrel transformation, add 2 to index
        table[index] += 1                                // adds to ONE position per loop to the calculated table index
    }
    return table;                                        // Return the completed table
}
// console.log(tableFor("pizza", JOURNAL)); // -> [76, 9, 4, 1]

// Now we need to compute a correlation for every type of event from the dataset.
// First, find every type of event:

function journalEvents(journal) {
    let events = [];                            // initialize the events array
    for (let entry of journal) {                // MARK: for(let key of keys) loop over each entry from the journal
        for (let event of entry.events) {       // loop over each event from entries
            if (!events.includes(event)) {      // If events does NOT include event (THERE IS NO notInclude method in js)
                events.push(event);             // add the distinct event to the events array
            }
        }
    }
    return events
}
// console.log(journalEvents(JOURNAL));

// Lets calculate correlation for each event + Filter correlations greater than 0.1 or less than -0.1:

function allCorrelations(journal) {
    let correlationsTable = [];
    for (let event of journalEvents(journal)) {
        let cor = phi(tableFor(event, journal));
        if (cor > 0.1 || cor < -0.1) correlationsTable.push(event + ": " + phi(tableFor(event, journal)))
    }
    return correlationsTable
}
// console.log(allCorrelations(JOURNAL));

//  Seems like brushed teeth (- cor) and eating peanuts (+ cor) are the most correlated to squirrel transformation:
//  'brushed teeth: -0.3805211953235953',
//  'peanuts: 0.59026798116852'

// Lets dig on that and see:

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log("Correlation of: " + phi(tableFor("peanut teeth", JOURNAL))); // -> Correlation of:  1


// ********************************************************
// MARK: ARRAY LOOPS AND IT'S METHODS
// ********************************************************

// Traditional JS: create an index and iterate until we reach array.length.     
for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // Do something with entry
}

// Modern JS: for let ¨units" of "Array" 💡 Using the word "for +variable definition + for + Array "
for (let entry of JOURNAL) {
    // Do something with entry
}
// This can be used for strings and other data structures
for (let letters of "Mariposa") {
    console.log(letters)
}


arrayMethods
    .includes("some-element") // its an useful method to check if a value exist inside the array.
    .push() // add elements at the end of an array
    .pop() // remove elements at the end of an array
    .unshift() // add elements at the start of an array,
    .shift() // remove elements at the start of an array,
    .indexOf() // searches through the array from the start -> end and RETURNS index at which the requested value was found (or -1 not found)
    .lastIndexOf() // like indexOf() but from end to start
    .slice(i1, i2) // takes start and end indices and returns an array that has only the elements between them - omit the i and copy the array
    .splice() // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (A:index, B: remove or 0=add, C: argument to add, can be empty)
    .concat(array, array) // append arrays

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Inserts at index 1
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May"); // Replaces 1 element at index 4
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]



let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

remember("laundry")
console.log(todoList)
getTask("gardening")
console.log(todoList)
rememberUrgently("very urgent thing!")
console.log(todoList)


// MARK: Rest parameters (...param)

function max(...numbers) {  // Tool to let functions accept multiple arguments:
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2)); // → 9  | when called like this, all arguments are bounded together into an array, a loop is needed to separate them


// MARK: spread operator
// 💡 Array demand to be SEPARATED. Loops or spread operator are the tools.

let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7 | this runs a loop

// MARK: Math object

// Its the global binding for the all the math utility functions
// most common ones:

Math.max() // returns the largest of zero or more numbers
Math.min() // returns the smallest of zero or more numbers
Math.random() // returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1)
Math.floor(); Math.ceil(); Math.round() // rounds down or up or nearest integer
Math.abs() // absolute num

console.log(Math.floor(Math.random() * 100))
console.log(Math.random() * 100)

// MARK: Destructuring

// Extract values from array[] or object{}
// Nested properties can also be destructured
// destructure null or undefined == error

// Array example WITHOUT destructuring
const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// Array example WITH destructuring
const [color1, color2, color3] = ["red", "green", "blue"];

// Array destructuring patters
const values = [1, 2, 3, 4, 5]; const [a, b] = values; // Get first two values
const [one, , three] = array; // Skip values with commas
const [head, ...tail] = array; // Get first value, then rest in an array
const [x, y, z = 10] = [1, 2]; // Default values if array is short

// MARK: 💡 Defaults can be dynamic or conditional

// Objects example WITHOUT destructuring
const user = { name: "Alice", age: 30, city: "Madrid" };
const names = user.name;
const ages = user.age;
const cities = user.city;

// Objects example WITH destructuring
const persons = { name: "Alice", age: 30, city: "Madrid" };
const { name: pName, age: pAge, city: pCity } = persons // bind (key: variable)
const { name, age, city } = persons // If variable names match property names, just use the name once 
console.log(pName, pAge, pCity)
console.log(name, age, city)

// Objects destructuring patters
const product = { id: 1, title: "Laptop", price: 999, stock: 5 };
const { title, price } = product; // Get specific properties
const { title: productName, price: cost } = product; // Rename while destructuring
const { discount = 0 } = product; // Default values if property doesn't exist
const { id, ...details } = product; // Get some values, rest in new object

// MARK: Optional property access
// Useful if I´m sure that a given property exists or when a variable might hold an undefined value.

object?.property // the same as object.property when object property isn’t null or undefined.

// A similar notation can be used with square bracket access or function calls, by putting ?. in front of the parentheses or brackets:
console.log("string".notAMethod?.()); // → undefined
console.log({}.arrayProp?.[0]);// → undefined

// MARK: JSON and temp memory
// serialize the data = convert memory addresses to a description that can be stored or sent
// similar to JS notation but with restrictions:
//   * Names have to be surrounded by double quotes
//   * Only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation
//   * Comments are not allowed

// example
//      {
//       "squirrel": false,
//       "events": ["work", "touched tree", "pizza", "running"]
//       }

JSON.stringify() // takes a JavaScript value and returns a JSON-encoded string
JSON.parse()  // Takes JSON-encoded strings and converts it to the value it encodes



// ========================================================
// MARK: MENTAL MODELS AND TOOLS
// ========================================================

// "JavaScript is inconsistent, embrace it!"
// "Objects have names, arrays have numbers"
// "Methods live where they work"
// "for...of gets you each item, for loop gets you positions"

// DATA SET ORDER vs FUNCTION AND CALLS ORDER
// * Function definitions = like writing a recipe in a cookbook. The recipe can be on any page.
// * Function calls = like cooking. You need the ingredients (data) ready before you start cooking.
// * Variable initialization = getting ingredients from the store. Must happen before cooking.

// ========================================================
// MARK: Exercise: The sum of a range
// ========================================================

// A) range(start, end) => returns an array containing all the numbers from start up to and including end.
function range(start, end) {
    let range = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }
    return range;
}
console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// B) sum([array]) => returns the sum of these numbers.
function sum([...numbers]) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}
console.log(sum(range(1, 10)));

// C) Modify your range() to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// MARK: for loop + multiple checks conditional
// Logic - Thinking process
// * Am I moving toward the end or away from it?
// steps (-) move away, (+) towards
// add a double side condition,translates to: "Continue if: EITHER we're going up AND haven't reached the end yet, OR we're going down AND haven't reached the end yet"

function range(start, end, steps = start > end ? -1 : 1) {
    let range = [];
    for (let i = start; (steps > 0 && i <= end) || (steps < 0 && i >= end); i += steps) {
        range.push(i)
    }
    return range;
}
console.log(range(1, 10, 2)); // [ 1, 3, 5, 7, 9 ]
console.log(range(5, 2, -1)); // [ 5, 4, 3, 2 ]
console.log(range(5, 2));     // [ 5, 4, 3, 2 ]
console.log(range(1, 10));    // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// Alternative solution
function range(start, end, steps = 1) {
    let range = [start];
    let counter = start;
    let dif = Math.floor((start < end ? end - start : start - end) / Math.abs(steps));
    let stepsValue = start > end ? steps * -1 : steps * 1;
    for (let i = 0; i < dif; i++) {
        counter += stepsValue;
        range.push(counter)
    }
    return range;
}
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(1, 10));


// ========================================================
// MARK: Exercise: Reversing an array
// ========================================================
// write two functions:
// reverseArray([array]) => produce a new array that has the same elements in the inverse order
// reverseArrayInPlace([array]) => modify the array given as its argument by reversing its elements.
// Neither may use the standard reverse method.

// logic: array = [A,B,C] -> [C,B,A]  array.push(array[1])

function reverseArray(array) {      // [1, 2, 3]
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])  // [1] -> [2, 1] -> [3, 2, 1]
    }
    return newArray; // [3, 2, 1]
}

let myArray = [1, 2, 3, 5]
console.log("reverseArray: ", reverseArray(myArray))
console.log("original Array: ", myArray)

// B - reverseArrayInPlace() [A, B, C] -> C, B, A -> 2 a 0, 1 a 0, 0 a 0 
function reverseArrayInPlace(array) {           // [A, B, C]
    let counter = array.length;                // 3
    for (let i = 0; i < counter; i++) {
        array.unshift(array[i]) // 0: [A, A, B, C] -> 1: [B, A, B, C] -> 2: [C, B, A, C] 
        array.splice((i + 1), 1) // 0: [A, B, C] -> 1: [B, A, C] -> 2: [C, B, A]
    }
    return array;
}

// reverseArrayInPlace() alternative - swap numbers
// Thinking process: this must work with both odd and even arrays. Even case: [a,b,c,d] swap array[0] for array[n-1], then swap array[1] for array[n-2], so on. Stops in the middle. When counter reach (array.length - 1 /2)

function reverseArrayInPlace(array) {
    let n = array.length - 1
    let loops = Math.floor(array.length / 2);
    for (let i = 0; i < loops; i++) { // I need to swap array[i] for array[n-i]
        // using destructuring (modern js)
        [array[i], array[n - i]] = [array[n - i], array[i]];
        // using temp variable (classic js)
        // let swap = array[i]
        // array[i] = array[n - i]
        // array[n - i] = swap
    }
    return array;
}

let myArray2 = ["A", "B", "C", "D"]
let myArray3 = [1, 2, 3]
console.log("original Array pre fun(): ", myArray2)
console.log("reverseArray: ", reverseArrayInPlace(myArray2))
console.log("original Array pos fun(): ", myArray2)
console.log("- - - - - - - ")
console.log("original Array pre fun(): ", myArray3)
console.log("reverseArray: ", reverseArrayInPlace(myArray3))
console.log("original Array pos(): ", myArray3)


// ========================================================
// MARK: Exercise: A list
// ========================================================
// A) write arrayToList(array) ->  builds up a list structure when given an array [1,2,3,4]
// B) write listToArray(object) ->  builds up a list structure when given an array [1,2,3,4]
// B.1) Add helpers functions:
//      prepend(e, list) = takes an element and a list to create a new list that adds the element to the front of the input list
//      ex: prepend(20, null)
//      nth(num, arrList) = takes a number and a list to return the element at the given position in the list.
//              0: first element, undefined: no such element.
//              ex: nth(3, [1,2,3,4])

// MARK: Concept: linked-lists object
// Its efficient to save new items to a list that reference itself. Think about an "undo list", where you only save the new edit and keep the whole doc on the original list object.

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// Create two new lists
let listA = { value: 0, rest: list };   // [0, 1, 2, 3]
let listB = { value: -1, rest: list };  // [-1, 1, 2, 3]
let listC = { value: 10, rest: listA };  // new list that nested the reference to the list
console.log(JSON.stringify(listC, null, 2)); // To visualize nested objects | null= no replacer function + 2 = indent by 2 spaces
console.dir(listC, { depth: null })

// A) arrayToList(array)
// ITS thinking
// * In/out: [1,2,3] -> { value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
// * Transformation: What *structure* changes? initiate an empty object -> populate it with nested object.
// * simple: Most direct way to create that change? loop   or recursion?

function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) { // Start from the array END, thats why i-- =0 because it must include it.
        list = { value: array[i], rest: list };
    }
    return list
}
let arr = ["a", "b", "c", "d", "e", "f"];
let listObj = arrayToList(arr);
console.log(JSON.stringify(listObj, null, 2))
console.log(listObj.length) // undefined

// B) write listToArray(object) +  helpers fun: prepend(e, list) and nth(num, arrList)

// ITS thinking process:
// 1. INPUT → OUTPUT
//    1→2→3→null → [1, 2, 3]

// 2. TRANSFORMATION
//    Start with empty array [] and the current list-node position.
//    Visit 1st node: {value: 1, rest:{...}} -> [] becomes [1]
//    Visit 2nd node: {value: 2, rest:{...}} ->  [1] becomes [1, 2]  
//    Visit 3rd node: {value: 3, rest: null } ->  [1, 2] becomes [1, 2, 3]
//    Visit 4th... Ups, no more nodes to visit → Stop

//    Pattern: Walk the chain. At each node:
//      - Push its value to array
//      - Move to .rest
//      - Stop when .rest is null

//    Key insight: I don't need to know length beforehand.
//    The structure tells me when to stop (null).

// 3. SIMPLEST OPERATION
//    Loop: while current node is not null
//      - Push current.value to array
//      - Move to current.rest

function listToArray(list) {
    let arr = []; // init the array
    let current = list; // start on the head node ALTERNATIVE: for (let current = list; current; current = current.rest) {}
    while (current !== null) { // lets loop until current node hit NULL)
        arr.push(current.value) // add the current .value to the array
        current = current.rest // move to the next node
    }
    return arr
}

let objList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log(listToArray(objList)) // [ 1, 2, 3 ]

// B) helpers functions

// takes an element and a list to create a new list that adds the element to the front of the input list ex: prepend(20, null)
function prepend(e, list) {
    let newList = {
        value: e,
        rest: list || null
    }
    return newList;
};
console.log(prepend(20, null)); // → {value: 20, rest: null}
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

// takes a number and a list to return the element at the given position in the list. 0: first element, undefined: no such element.
// ITS thinking
// 1. INPUT → OUTPUT
//    (1→2→3→null, 0) → 1
//    (1→2→3→null, 2) → 3
//    (1→2→3→null, 5) → undefined

// 2. TRANSFORMATION
//    Starting at head, walk the nodes exactly n times.
//    Return the value at that position.
//    if n > than nodes, return undefined. That means we run out of nodes (hit null).

// 3. SIMPLEST OPERATION
//    Loop n times, moving to current.rest each time.
//    After n steps, return current.value.


function nth(list, n) {
    let current = list;
    for (let i = 0; i < n; i++) {
        if (current === null) return undefined
        current = current.rest
    }
    return current === null ? undefined : current.value; // This double check means we can still be on a node with rest:null
};
let objList2 = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }
console.log(nth(objList2, 3)); // → 20


// ========================================================
// MARK: Exercise: Deep comparison
// ========================================================

//
// MARK: === vs == (and why to ignore ==)
// == Converts types, then compares + Unpredictable behavior. ex: 5 == "5" -> true 
// === Checks type AND value + No conversions

// deepEqual(val1, val2) -> boolean 
// True if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// ITS thinking
// 1. INPUT → OUTPUT
//  - primitives
//      deepEqual(5, 5) -> true (same value)
//      deepEqual("hi", "hi") -> true
//      deepEqual(5, "5") -> false (different types)
//  - objects
//      deepEqual({a: 1}, {a: 1}) -> true (same properties, same values)
//      deepEqual({a: 1}, {b: 1}) -> false (different properties)
//      deepEqual({a: 1}, {a: 2}) -> false (same properties, different values)
//  - nested objects
//      deepEqual({a: {b: 1}}, {a: {b: 1}}) -> true - must recursively check inner objects too

// 2. TRANSFORMATION
// Two cases:
//      1. Primitives: direct comparison
//      2. Objects: property-by-property comparison (recursive for nested objects)
// Decision tree:
// - Are both NOT objects? → Compare with ===
// - Is either null? → Compare with ===
// - Both are objects? → Compare properties recursively

// 3. SIMPLEST OPERATION
//  1. Handle base case (primitives/null)
//  2. Get keys from both objects
//  3. If different number of keys → false
//  4. For each key, recursively compare values

// ALGORITHM
//  1. If both values are primitives → use ===
//  2. If both are objects → check:
//     - Do they have the same properties?
//     - Do those properties have equal values? (recursive check)
//  3. Special case: typeof null === "object" (JavaScript bug)

console.log(typeof ({ here: { is: "an" }, object: 2 }))

function deepEqual(val1, val2) {
    if (typeof val1 !== "object" || typeof val2 !== "object" || val1 === null || val2 === null)
        return val1 === val2; // First if: any objects, not null → continue if not, primitive check -> true/false
    if (Object.keys(val1).length !== Object.keys(val2).length) return false; // Second if: both have same # of keys → continue
    let keys1 = Object.keys(val1), keys2 = Object.keys(val2), loop = Object.keys(val1).length
    for (let key of keys1) {
        if (!keys2.includes(key)) return false // Third: all keys in obj1 are present on obj2 -> continue
        if (!deepEqual(val1[key], val2[key])) return false // fourth: if non check return false -> continue
    }
    return true // if all checks are passed, then return true
};
let obj = { here: { is: "an" }, object: 2 };
console.log("1: " + deepEqual(5, 5)); // → 1. true
console.log("2: " + deepEqual(5, "5")); // → 2. false
console.log("3: " + deepEqual(5, obj)); // → 3. false
console.log("4: " + deepEqual(null, obj)); // → 4. false
console.log("5: " + deepEqual(obj, obj)); // → 5. true
console.log("6: " + deepEqual(obj, { here: 1, object: 2 })); // → 6. false
console.log("7: " + deepEqual(obj, { here: { is: "an" }, object: 2 })); // → 7. true
console.log("8: " + deepEqual({ a: 1, b: 2 }, { a: 1 })) // 8. false
console.log("9: " + deepEqual({ a: 1, b: 2 }, { a: 1, b: 999 })) // 9. false
console.log("10: " + deepEqual({ a: undefined }, {})) // 9. false