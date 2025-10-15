// ===============================================================
// The Problem Card Ritual -> ITS
// ===============================================================

// Before writing any code for a problem, grab paper (or open a blank file) and answer these three questions:
// !! Opening paper/file makes you pause. You can't jump straight to code.

// 1. (I )INPUT → OUTPUT
//    What goes in? What comes out?
//    Draw 2-3 concrete examples, NOT vague.
//      what NOT: array list -> object list.
//      what YES: [1,2,3] -> { value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}

// 2. (T) TRANSFORMATION
//    What *structure* changes?
//    Describe in plain English. Draw it if possible.
//    Discovered the dependencies.
//      Don't describe what it becomes (ex: an object list populated with nested objects), instead, describe the building order:
//          Starting from the END:
//             - Element 3 becomes {value: 3, rest: null}
//             - Element 2 becomes {value: 2, rest: <that 3 object>}
//             - Element 1 becomes {value: 1, rest: <that 2 object>}
//          Pattern: Each node needs the NEXT node to already exist.
//             I must build from right to left.

// 3. (S) SIMPLEST OPERATION
//    What's the most direct way to create that change?  following example: "Given that I must build backwards, what's simplest? 

// ===============================================================
// Examples
// ===============================================================

// for array reversal:
// 1. INPUT → OUTPUT
//    [A, B, C] → [C, B, A]
//    [1, 2, 3, 4] → [4, 3, 2, 1]

// 2. TRANSFORMATION
//    Positions mirror around center:
//    [A, B, C, D]
//     0  1  2  3
//     ↕        ↕
//     3  2  1  0
   
//    First ↔ Last, Second ↔ Second-to-last, so on.

// 3. SIMPLEST OPERATION
//    Swap pairs from outside moving inward.
//    Stop at middle (floor(n/2) swaps).