
// CHAP 02 - PROGRAM STRUCTURE

// IMPORTANTE: Loops run while the condition is TRUE, not FALSE.
// Condition is TRUE → loop body executes
// Condition is FALSE → loop stops (or never starts)

// let iAm = "nico";
// let nothing
// console.log("log: " + iAm);
// console.log("log: " + nothing);
// prompt("Enter passcode");

// let num = 0;
// while (num <= 12) {
//     console.log(num);
//     num = num + 2;
// }

// Calculates and shows the value of 2^10
// let result = 1, counter = 0, sample = 2 ** 10;
// while (counter < 10) {
//     console.log("result: " + result + " counter: " + counter);
//     result = result * 2;
//     counter = counter + 1;

// }
// console.log("expected: " + sample);
// console.log("final result: " + result);

// same example with for loop
// let result = 1;
// // for (let counter = 0; counter < 10; counter = counter + 1) {
// for (let counter = 0; counter < 10; counter++) {
//     console.log("result: " + result + " counter: " + counter);
//     result = result * 2;
// }
// console.log(result);

/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// a cada "linea" le sumo un # hasta llegar a 7

// for (let line = ""; line.length <= 7; line += "#") console.log(line)

// let line = "";
// while (line.length <= 7) {
//     line += "#";
//     console.log(line)
// }

// ##################################################
// FIZZBUZZ WORD EXERCISE
// ##################################################

/*
A) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

B) When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// Logic:
// numbers divisible by 3 === "Fizz"
// numbers divisible by 5 === "Buzz"
// numbers divisible by both 3 and 5 === "FizzBuzz"


// ORIGINAL SOLUTION
// let number = 0;
// while (number < 100) {
//     number++
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (number % 3 === 0) {
//         console.log("Fizz")
//     } else if (number % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(number)
//     }
// }


// Elegant Solution => mental model: "Build, then choose."

// for (let number = 1; number <= 100; number++) {
//     let output = "";
//     if (number % 3 === 0) { output += "Fizz" }
//     if (number % 5 === 0) { output += "Buzz" }
//     console.log(output || number);
// }

/*

What makes this version better? Not just "it's shorter"
Original => check each case: "is it both? is it just 3? is it just 5?" It had to handle the combination case separately.
Elegant => works by composition: build up the answer piece by piece. It doesn't care about combinations, they emerge naturally from the process.
LESSON: When I see a problem that seems to require checking multiple combinations (both, one, the other, neither), ASK MYSELF: "Can I build the answer incrementally instead?"

- Reset state inside loops
    If something needs to be fresh each iteration, declare it inside the loop
    If it should accumulate across iterations, declare it outside

    When you see a problem with multiple conditions apply mental model:
        "Build, then choose."
            1º Build incrementally (add pieces as you discover them)
            2º Choose once at the end (using the built result or a fallback)

*/

// ##################################################
// CHESSBOARD EXERCISE
// ##################################################

/*
A) Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

B) When you have a program that generates this pattern, define a binding size = 8 and change the program so that it
works for any size, outputting a grid of the given width and height.
*/

/*
Thinking
8×8 grid => spaces "" or #
use newline \n characters to separate lines
even === space, odd === #

// Important Concept => each loop is one loop, 2 dimensios = 2 loops => nested structure (rows contain columns)
for each row: => 1 to 8
    for each column: => 1 to 8
        figure out what character to add
    after finishing the row, what needs to happen?
*/


// // Elegant solution - 2d loop - scalable board
// let board = "", size = 20;
// for (let row = 0; row < size; row++) {
//     for (let col = 0; col < size; col++) {
//         board += (row + col) % 2 === 0 ? " " : "#";
//     }
//     board += "\n";
// }
// console.log(board)




