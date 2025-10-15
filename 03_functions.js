
// CHAP 03 - FUNCTIONS EXERCISES


// ###################################################################
// MARK: Closures
// ###################################################################

// What happens to local bindings when the function call that created them is no longer active? => ⚠️ they get saved in memory if they are referenced by a closure

function wrapValue(n) {
    let local = n; // local is a binding created when wrapValue is called
    return () => local; // returns a function that accesses and returns this local binding.
}

let wrap1 = wrapValue(1); // wrap1 is now a function that returns the value of local from when wrapValue was called with 1
let wrap2 = wrapValue(2); // ...the same, called with 2

// local bindings are created anew for every call
// different calls don’t affect each other’s local bindings.
// This is a CLOSURE == a function that references bindings from local scopes around it.
// functions as values contain A) code and B) enviroment in which they were created (including bindings) => When called, the function body sees the environment in which it was created, not the environment in which it is called.

console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

// ###################################################################
// MARK: Recursion
// ###################################################################

// Recursion == A function that calls itself 
// Recursion Heuristic: "Does this problem contain smaller versions of itself?"


function power(base, exponent) {
    if (exponent == 0) { // this stop the loop
        return 1;
    } else {
        return base * power(base, exponent - 1); // this calls itself multiple times with ever smaller exponents 
    }
}

console.log(power(2, 3)); // 8
// return base * power(base, exponent - 1); => 2 * power(2, 2) => 2 * 2 * power(2, 1) => => 2 * 2 * 2 power(2, 0) => 2 * 2 * 2 * 1


// ⚠️ SLOWER than typical JavaScript for loop. BUT Some problems really are easier to solve with recursion than with loops
//  For example: How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? 
//  The number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ?? // This means If first path returns a string → use it, If first path returns null → try second path.
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

// Rewritten for debugging and understanding the flow:

function findSolution(target) {
    function find(current, history, depth) {
        const indent = "  ".repeat(depth);
        console.log(`${indent}find(${current},"${history}")`);
        if (current == target) {
            console.log(`${indent}  Found!`);
            return history;
        } else if (current > target) {
            console.log(`${indent}  Too big`)
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`, depth + 1) ??
                find(current * 3, `(${history} * 3)`, depth + 1);
        }
    }
    return find(1, "1", 0);
}
console.log(findSolution(13));

// Follow each ?? path:
// find(1,"1")
//   find(6,"(1 + 5)")
//     find(11,"((1 + 5) + 5)")
//       find(16,"(((1 + 5) + 5) + 5)")
//         Too big
//       find(33,"(((1 + 5) + 5) * 3)")
//         Too big
//     find(18,"((1 + 5) * 3)")
//       Too big
//   find(3,"(1 * 3)")
//     find(8,"((1 * 3) + 5)")
//       find(13,"(((1 * 3) + 5) + 5)")
//         found!
//  (((1 * 3) + 5) + 5)

// Seems important to be aware of adding console.logs to understand the flow of recursive functions

/**
 * RECURSION HEURISTIC: When to use recursion vs loops
 *
 * USE RECURSION when the problem has:
 * 
 * 1. Tree/nested structure (folders, DOM, nested arrays, JSON)
 *    → "Process item, then recursively process children"
 * 
 * 2. Divide and conquer (binary search, merge sort)
 *    → "Split problem in half, solve each half, combine results"
 * 
 * 3. Exploration with backtracking (maze solving, path finding)
 *    → "Try option A. If fails, backtrack and try option B"
 * 
 * 4. Inherently recursive definitions (fibonacci, factorial)
 *    → When formula is recursive: fib(n) = fib(n-1) + fib(n-2)
 * 
 * AVOID RECURSION when:
 * 
 * 1. Simple linear iteration (sum array, find max, count items)
 *    → Going 1→2→3→4 is clearer with a loop
 * 
 * 2. Very deep recursion (>1000 levels)
 *    → Risk of stack overflow; use loop with explicit stack instead
 * 
 * 3. No natural breakdown (problem doesn't contain smaller versions)
 *    → Forced recursion obscures intent
 * 
 * 4. Repeated calculations without memoization (naive fibonacci)
 *    → Exponential time complexity; cache or iterate instead
 * 
 * DECISION RULE: Does the problem branch or nest? → Recursion
 *                 Does it just iterate linearly? → Loop
 */

// ###################################################################
// MARK: Growing functions
// ###################################################################

// How difficult it is to find a good name for a function is a good indication of how clear a concept it is that you’re trying to wrap.
// How smart and versatile should our function be? -> Principle: DON'T add cleverness unless you are absolutely sure you’re going to need it.

// ##################################################################
// MARK: Functions and side effects
// ##################################################################

// Three types of functions:
// A) Functions that are called for their side effects (e.g. console.log)
// B) Functions that are called for their return value (e.g. Math.max) --> easier to combine in new ways.
// C) Pure function: value-producing function that has no side effects and doesn’t rely on side effects from other code.

// ##################################################################
// MARK: Chapter Summary
// ##################################################################

// Define f to hold a function value
const f = function (a) {
    console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

// Undstand scopes: Each block {} creates a new scope. Parameters and bindings declared in a given scope are local and not visible from the outside.
// Don't repeat yourself, separate the tasks your program performs into different helper functions.
// Don't create intermediate variables unless they clarify intent or you need to use the value multiple times.


// ##################################################################
// MARK: Exercises Responses
// ##################################################################

// 1) Minimum
// Define the function min that takes two arguments and returns their minimum.

function min(n1, n2) {
    return n1 < n2 ? n1 : n2;
}

// or

const min = (n1, n2) => n1 < n2 ? n1 : n2

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

// 2) Recursion
// Define a recursive function isEven corresponding to:
//  Zero is even
//  One is odd
//  For any other number N, its evenness is the same as N - 2.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.


function isEven(num) {
    let aNum = num < 0 ? num * -1 : num; // or using the Math.abs(num)
    if (aNum === 0) return true;
    if (aNum === 1) return false;
    return isEven(aNum - 2);
};

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));
console.log(isEven(-22));

// 2) Bean counting
// A) create function countBs(string) that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// thinking: averiguo cuantas posiciones tengo para contar -> comparo cada posición

function countBs(string) {
    let count = 0;
    for (let chars = string.length ; chars > 0; chars = chars - 1) { // Loops run while the condition is TRUE
        if (string[chars -1] === "B") count += 1
    }
    return count
}
console.log(countBs("BOB")); // → 2

// Trying to rewrite countBs counting forward
function countBs(string) {
    let count = 0;
    for (let i = 0 ; i < string.length; i++) { // Loops run while the condition is TRUE
        if (string[i] === "B") count++
    }
    return count
}
console.log(countBs("BOB"));

// LEARNINGS
// With this exercise I discover the loop rules werent as clear as thought 😓
// its not chars but index = i
// I can replace i += 1 for i i++ => the same with count++

// B) write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted

function countChar(string, char) {
let count = 0;
    for (let i = 0 ; i < string.length; i++) { // Loops run while the condition is TRUE
        if (string[i] === char) count++
    }
    return count
}
console.log(countChar("kakkerlak", "l")); // → 4