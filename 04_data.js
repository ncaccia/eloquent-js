// ========================================================
// CHAPTER 4 - DATA STRUCTURE: OBJECTS AND ARRAYS
// ========================================================
// https://eloquentjavascript.net/04_data.html

// ========================================================
// ARRAYS & OBJECTS 
// ========================================================

// MARK: array = []
// ordered list of values between [] -> notation for getting at the elements inside an array also uses []
// Kind of object specialized for storing sequences of things.

let array = [1,2,3];
console.log(typeof(array)) // -> object | 💡 array of objects are mostly used.

// Elements in an array are stored as the array’s properties, using numbers as property names.    
// Because you can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway, you have to 
// use the bracket notation to get at them.


// Property names are strings. To access them we useboth  . or []
value.x; // -> calling for the name of the property -> fetches the property of value named “x”. Works only with names starting with a letter or underscore, and containing only letters, numbers, and underscores.
value[x]; // -> Evaluate the expresion between brackets to get property name -> takes the value of the variable named x and uses that converted to a string, as the property name.

// null and undefined doenst have properties.
null.length; // -> TypeError: Cannot read properties of null (reading 'length')

// MARK: .methods
// Properties that contain functions. Ex: .toUpperCase is a method of a string

let sequence = [1, 2, 3];
sequence.push(4); // push method adds values to the end of an array
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // pop method remove the last value in the array and returns it
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

// MARK: object = {}
// collection of named values between {} separated by commas. Each property -> {name: value,}
// Properties whose names aren’t valid binding names or valid numbers must be quoted
// Reading a property that doesn’t exist will give you the value undefined.



let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

day1.naked = false; // This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

// 💡 No need to add const or let to edit or add properties to an object

console.log(day1.squirrel); // → false
console.log(day1.dontExist); // → undefined
console.log(day1.naked);


let anObject = {left: 1, right: 2};
console.log(Object.keys(anObject)); // -> [ 'left', 'right' ] | Object.keys function return an array of strings property names
delete anObject.left;
console.log(anObject.left); // -> undefinded | delete operator -> remove the named property from the object
console.log("left" in anObject); // -> false | in operator, tells you whether that object has a property with that name. 

let anotherObject = {}
Object.assign(anotherObject, anObject) // Object.assign copies all properties from one object into another
console.log(anObject) // -> { right: 2 }
console.log(anotherObject) // -> { right: 2 }

// MARK: Mutability




// ========================================================
// MARK: MENTAL MODELS
// ========================================================

