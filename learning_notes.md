# ELOCUENT JAVA SCRIPT BOOK - by Marijn Haverbeke

[Open Source Book link](https://eloquentjavascript.net/) => [Code Sandbox](https://eloquentjavascript.net/code/)


## LEARNING NOTES

### VSC extension I discovered through the process:

- Code Runner: To run code directly on the file: use shortcut Ctrl+Alt+N

### Introduction

Notes:

- The skill of programming is the skill of building programs that don’t confuse the programmer.
- There are many terrible mistakes to make in program design, and you should go ahead and make them at least once so that you understand them.
- A sense of what a good program looks like is developed with practice, not learned from a list of rules.
- in js we can declare multiple variables in a single line (let o const/var)
- the same program can be expressed in both long and short, unreadable and readable ways
- A good programming language:
    - allow to talk to it in a readable way through the actions we want the computer to operate.
    - helps omit details and reduce complexity.
    - allow us to define our own building blocks.
- JS give us the space to interact directly without doing a page reload for every action ≠ to react
- ECMAScript standard == standard document to describe the way the JavaScript language should work.
- JavaScript is ridiculously liberal: "JS would accept almost anything I typed but interpret it in a way that was completely different from what I meant."

## (Part 1: Language)

### 1. Values, Types, and Operators

- values are not really created from thin air. Each one has to be stored somewhere, and if you want to use a gigantic number of them at the same time, you might run out of computer memory.
- As soon as you no longer use a value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.
- Treat fractional digital numbers as approximations, not as precise values.
- When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators. When in doubt, just add parentheses.
-  remainder (or modulo) operation. X % Y is the remainder of dividing X by Y. For example, 314 % 100 produces 14, and 144 % 12 gives 0.
-  special numberss: 3 types: Infinity, -Infinity, and NaN.
-  Strings: Newlines (the characters you get when you press enter) can be included only when the string is quoted with backticks (`).
-  backslash (\) inside quoted text indicates that the character after it has a special meaning. This is called escaping the character. A quote that is preceded by a backslash will not end the string but be part of it. 
-  \n == new line
-  \t == tab
-  If two backslashes follow each other, they will collapse together, and only one will be left in the resulting string value.
- Backtick-quoted strings === template literals
- Operators that use two values are called binary operators, while those that take one are called unary operators
- There is only one value in JavaScript that is not equal to itself, and that is NaN. NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
- two special values, written null and undefined, that are used to denote the absence of a meaningful value
- When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called type coercion.
- When you want to test whether a value has a real value instead of null or undefined, you can compare it to null with the == or != operator. `console.log(null == 0);`// → false
- Expressions like 0 == false and "" == false are also true because of automatic type conversion.
- `=== or !==` == strict equality, NO conversion
- We can use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead. `console.log(null || "user")` // → user
- The `??` operator resembles || but returns the value on the right only if the one on the left is null or undefined, not if it is some other value that can be converted to false. Often, this is preferable to the behavior of ||.
- short-circuit evaluation == the part to their right is evaluated only when necessary.
- **Boolean operators**: and, or, and not. These are operations that can be applied to Boolean values themselves
  -  short-circuit evaluation: the part to their right is evaluated only when necessary
  -  `&&` = AND => its result is true only if both the values given to it are true.
     -  Short circuit evaluation: Will return the value to its right when that value can be converted to false and will return the value on its left otherwise.
        ```js
            console.log(null || "user")
            // → user (left falsy, show value from right)
            console.log("Agnes" || "user")
            // → Agnes  (left truthy, show value from left)
        ```
  -  `||` = OR => It produces true if either of the values given to it is true.
     -  Short circuit evaluation: Will return the value to its left when that value can be converted to true and will return the value on its right otherwise.
     - `??` = OR =>  but returns the right side only if left is null or undefined (not other falsy values like 0 or "")
        ```js
            console.log(null || "user")
            // → user (left falsy, show value from right)
            console.log("Agnes" || "user")
            // → Agnes  (left truthy, show value from left)
            console.log(null ?? "user")
            // → user  (left null, show value from right)
        ```
  -  `!` = NOT => it    flips the value given to it—!true produces false and !false gives true.
- !! trick of using the remainder `%` operator for checking whether a number is divisible by another number (has a remainder of zero).



### 2. Program Structure

**Summary**

You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.

**Notes**

- **Expresion** == A fragment of code that produces a value
  - If an expression corresponds to a sentence fragment, a JavaScript **statement** corresponds to a full sentence. A program is a list of statements.
  - The simplest kind of statement is an expression with a semicolon after it.
  - It can change the state of the machine in a way that will affect the statements that come after it == **side effect**
- Program internal state == variables or bindings => `let` word
  - `let` tells JavaScript: “create a new binding => reassigning a value to that binding just requires the `=` operator
  - The words `var` (name pre-2015 JavaScript) and `const` can also be used to create bindings
  - imagine bindings as tentacles rather than boxes: They do not contain values; they grasp them, so two bindings can refer to the same value.
  -  If you ask for the value of an empty binding, you’ll get the value undefined.
  -  A single let statement may define multiple bindings. The definitions must be separated by commas: `let one = 1, two = 2;`
  -  Bindings names must not start with a digit (but can include them)
  -  A binding name may include `$` or `_` but no other punctuation or special characters.
- **The enviroment** == the collection of bindings/variables that exist in a given time.
  - When a program starts up, this environment is not empty. It always contains bindings that are part of the language standard, and most of the time, it also has bindings that provide ways to interact with the surrounding system. 
- invoking, calling, or applying == Execution of a function
- You can call a function by putting parentheses after an expression that produces a function value.
- **Arguments** == values that are passed to a function when it is invoked.
- Functions can produce values or side effects.
  - When a function produces a value, it is said to **return** that value.
  - Straight-line vs conditional execution `if` kw
  - `a block` == braces `{}` can be used to group any number of statements into a single statement
- **Loops** => the idea of writing a program is to make something less work, not more
  - it is a good idea to get used to counting from 0.
  - `while` loop =>  loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
    - or => `do - while` loop => always executes its body at least once, and it starts testing whether it should stop only after that first execution.
    ```js
        let yourName;
            do {yourName = prompt("Who are you?");
                } while (!yourName);
            console.log("Hello " + yourName);
    ```
  - `for` loop => Exact same as while loop, but shorten the syntax = all the statements that are related to the “state” of the loop are grouped together after for. The parentheses after a for keyword must contain two semicolons. 
    - The part before the first semicolon initializes the loop, usually by defining a binding.
    - The second part is the expression that checks whether the loop must continue.
    - Final part updates the state of the loop after every iteration.
  - `break` statement has the effect of immediately jumping out of the enclosing loop
  - `continue` statement => When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.
  - **infinite loop**. A program stuck in an infinite loop will never finish running, which is usually a bad thing.
  - For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--
- `switch` + `case` conditional = > remember to add `break` after the case, otherwise continue to the next case
- Binding Naming convention => `fuzzyLittleTurtle = ? `
- IMPORTANT: **falsy** vs **truthy** value
  - **falsy** values (there are only 6):
    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
  - Everything else is truthy (including "0", [], {}, and any non-empty string).
  

### 3. Functions

- A function is created with an expression that starts with the keyword `function´.
- Functions have a set ofmultiple parameters or no parameters at all, and a body, which contains the statements that are to be executed when the function is called.
- `return` => A return keyword without an expression after it will cause the function to return undefined.
  - Functions that don’t have a return statement at all, will return undefined.
- Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function
- **Scopes**
    - Global: For bindings defined outside of any function, block, or module, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.
    - Local: Bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings.
    ```js
    let x = 10;   // global
      if (true) {
        let y = 20; // local to block
        var z = 30; // also global => var is old-style bindings and create global always
      }
    ```
    - when multiple bindings have the same name—in that case, code can see only the innermost one.
    - Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.
- **Declaration notation** == Notation #2
  - Shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently:
  - Function declarations are not part of the regular top-to-bottom flow of control. This is sometimes useful because it offers the freedom to order code in a way that seems the clearest, without worrying about having to define all functions before they are used.
      ```js
      function square(x) { // instead of const square = function(x)
        return x * x;
      }
      ```
- **Arrow functions** == Notation #3
  - Instead of the function keyword, it uses an arrow (=>). Arrow comes after the list of parameters and is followed by the function’s body.
    - Plaun english reading:  “this input (the parameters) produces this result (the body)”.
      - When there is only one parameter name, you can omit the parentheses around the parameter list.
      - If the body is a single expression rather than a block in braces, that expression will be returned from the function
      - When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.
    ```js
      const roundTo = (n, step) => {
        let remainder = n % step;
        return n - remainder + (remainder < step / 2 ? 0 : step);
      };

      const square1 = (x) => { return x * x; };
      vs.
      const square2 = x => x * x;
    ```

  - **Call stack** => The place where the computer stores this context. 
    - Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.
  - **Optional Arguments**
    - We defined a function with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.  If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined.
    - `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given
- **closure** => being able to reference a specific instance of a local binding in an enclosing scope
  - A function that references bindings from local scopes around it is called a closure. 
  - A factory of functions: 
      ```js
      //example
      function multiplier(factor) { 
        return number => number * factor;
      }

      let twice = multiplier(2); // this saves bind the function to twice and it saves the factor param inside it.
      console.log(twice(5)); // When executed, it has the factor param and the new param === number
      // → 10
      ```
      - A good **mental model** is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.
        - In the previous example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment so that when that is called, it multiplies its argument by 2.
  - **Recursion**
      - 


### 4. Data Structures: Objects and Arrays
### 5. Higher-order Functions
### 6, The Secret Life of Objects
### 7. Project: A Robot
### 8. Bugs and Errors
### 9. Regular Expressions
### 10. Modules
### 11. Asynchronous Programming
### 12. Project: A Programming Language

### (Part 2: Browser)

### 13. JavaScript and the Browser 
### 14. The Document Object Model
### 15. Handling Events
### 16. Project: A Platform Game
### 17. Drawing on Canvas
### 18. HTTP and Forms
### 19. Project: A Pixel Art Editor

### (Part 3: Node)

### 20. Node.js
### 21. Project: Skill-Sharing Website

