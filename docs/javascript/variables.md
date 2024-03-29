# Javascript Variables and Scope


## What are variables in javascript?

In JavaScript, variables are like containers that hold different kinds of information, such as numbers, texts, or true/false values. They're used to store data that can change or be manipulated throughout a program. When we create a variable, we give it a name and assign a value to it using the '=' sign. This value can be updated or changed as needed during the program's execution. Variables make it easier for developers to work with and manage data within their code, helping to create dynamic and interactive web applications.

::: tip
- Variables in JavaScript are containers for storing data.
- They can hold various types of information such as numbers, strings (text), boolean values (true/false), arrays, objects, and more.
- Values can be assigned to variables using the assignment operator '='.
- The value stored in a variable can be changed or updated throughout the program's execution.
:::

## What are the different variable types in JavaScript?

In JavaScript, variable types are the different kinds of data that a variable can hold. There are several types, including numbers (like `5` or `3.14`), strings (like `hello` or `world`), booleans (`true` or `false), arrays (lists of values), objects (collections of key-value pairs), and more. Each type behaves differently and can be used for different purposes in a JavaScript program. For example, numbers are used for mathematical operations, strings are used for text, and booleans are used for making decisions in code. Understanding variable types is important for writing effective and functional JavaScript programs.

::: tip
- Number: Represents numeric values like integers or floating-point numbers.
- String: Represents sequences of characters, enclosed in single or double quotes.
- Boolean: Represents true or false values, used for logical operations.
- Array: Represents ordered collections of values, accessed by index.
- Object: Represents collections of key-value pairs, used for storing structured data.
- Null: Represents the intentional absence of any object value.
- Undefined: Represents variables that have been declared but not initialized with a value.
- Symbol: Represents unique identifiers for object properties.
- BigInt: Represents integers with arbitrary precision, useful for handling large numbers.
:::

## How to declare variables in JavaScript?

In JavaScript, you declare variables using the `var`, `let`, or `const` keywords followed by the name you want to give to the variable. Here's a simple example:

```javascript
var myVar = 10;
let myLet = "Hello";
const myConst = true;
```

In this code, `myVar` is a variable declared with `var`, `myLet` with `let`, and `myConst` with `const`. `var` is used for declaring variables with function scope, `let` is used for block scope variables that can be reassigned, and `const` is used for constants whose values cannot be reassigned.

::: tip
- Use the `var`, `let`, or `const` keyword to declare a variable.
- Follow the keyword with the name you want to give to the variable.
- Assign a value to the variable using the `=` operator.
- Optionally, you can initialize the variable with a value.
:::

## What are the differences between `var`, `let`, and `const` in JavaScript?

In JavaScript, `var`, `let`, and `const` are all used to declare variables, but they have some differences. `var` is the oldest way to declare variables and has function scope. It means it's accessible throughout the entire function where it's declared. `let` and `const` are newer and have block scope, meaning they're only accessible within the block of code where they're defined (like within loops or if statements). The difference between `let` and `const` is that variables declared with `let` can be reassigned later, while variables declared with `const` cannot be reassigned after they're initially given a value. So, `let` is for variables that might change, while `const` is for ones that won't.

::: tip
- `var`:
    - Oldest way to declare variables.
    - Has function scope.
    - Can be accessed throughout the entire function where it's declared.

- `let`:
    - Introduced later than `var`.
    - Has block scope.
    - Limited to the block of code where it's defined (like within loops or if statements).
    - Can be reassigned after declaration.

- `const`:
    - Also introduced later than `var`.
    - Has block scope like `let`.
    - Cannot be reassigned after declaration.
    - Useful for declaring variables that won't change their value.
:::

## What are primitive and referenced types in JavaScript?

In JavaScript, primitive types are basic data types like numbers, strings, booleans, null, and undefined. They hold simple values directly. For example, a number like `5` or a string like `hello` are primitive types. Referenced types, on the other hand, are more complex data types like objects and arrays. They hold collections of data and are referenced by memory address. For instance, an object like `{ name: "John", age: 25 }` or an array like `[1, 2, 3]` are referenced types. When you work with primitive types, you manipulate the actual value, whereas with referenced types, you manipulate the reference to the value's location in memory.

::: tip
- **Primitive types**:
    - Basic data types like numbers, strings, booleans, null, and undefined.
    - Hold simple values directly.
- **Referenced types**:
    - Complex data types like objects and arrays.
    - Hold collections of data and are referenced by memory address.
- **Difference**:
    - When working with primitive types, you manipulate the actual value.
    - With referenced types, you manipulate the reference to the value's location in memory.
:::

## What is the list of primitive types in JavaScript?

In JavaScript, there are several primitive types. These are basic types of data that the language recognizes. The list includes string, which is for text; number, for numerical values; bigInt, for handling large integers; boolean, which represents true or false values; null, used to signify the absence of any value; undefined, which indicates that a variable has been declared but hasn't been assigned a value yet; and symbol, which is used to create unique identifiers for object properties. These types are the building blocks for creating and manipulating data in JavaScript programs.

::: tip
- String: Represents text data.
- Number: Used for numerical values.
- BigInt: Handles large integers.
- Boolean: Represents true or false values.
- Null: Signifies the absence of any value.
- Undefined: Indicates a variable declared but not assigned a value.
- Symbol: Creates unique identifiers for object properties.
:::

## What is `typeof` in JavaScript?

In JavaScript, `typeof` is a special operator that helps you figure out the type of a value or a variable. It returns a string indicating the type of the operand. For example, if you want to know if a variable named `x` is a number, you can use `typeof x`. It will return `'number'` if `x` is a number. Similarly, if you have a variable `name` and you want to check if it's a string, you can use `typeof name`, and it will return `'string'` if `name` is indeed a string. It's handy when you want to perform different actions based on the type of data you're dealing with in your JavaScript code.

::: tip
- `typeof` is a special operator in JavaScript.
- It helps to determine the type of a value or variable.
- It returns a string indicating the type of the operand.
:::

## What are `typeof` different data types in JavaScript?

In JavaScript, `typeof` is a keyword used to find out the type of a value. Here's a simple explanation for each type:

- `string`: It represents text. For example:
  ```javascript
  typeof "hello"; // Output: "string"
  ```

- `number`: It represents numeric values, like integers or decimals. For example:
  ```javascript
  typeof 42; // Output: "number"
  ```

- `bigInt`: It represents large integer values. For example:
  ```javascript
  typeof 123n; // Output: "bigint"
  ```

- `boolean`: It represents true or false values. For example:
  ```javascript
  typeof true; // Output: "boolean"
  ```

- `null`: It represents an intentional absence of any value. For example:
  ```javascript
  typeof null; // Output: "object" (This is a quirk in JavaScript)
  ```

- `undefined`: It represents a variable that has been declared but not assigned a value. For example:
  ```javascript
  let x;
  typeof x; // Output: "undefined"
  ```

- `symbol`: It represents unique identifiers. For example:
  ```javascript
  typeof Symbol("foo"); // Output: "symbol"
  ```

- `object`: It represents collections of data. For example:
  ```javascript
  typeof { key: "value" }; // Output: "object"
  ```

- `function`: It represents a block of reusable code. For example:
  ```javascript
  typeof function() {}; // Output: "function"
  ```

These examples demonstrate how `typeof` works with different data types in JavaScript.

::: tip
- `string`: Represents text. Example: `typeof "hello"; // Output: "string"`
- `number`: Represents numeric values, like integers or decimals. Example: `typeof 42; // Output: "number"`
- `bigInt`: Represents large integer values. Example: `typeof 123n; // Output: "bigint"`
- `boolean`: Represents true or false values. Example: `typeof true; // Output: "boolean"`
- `null`: Represents an intentional absence of any value. Example: `typeof null; // Output: "object"` (This is a quirk in JavaScript)
- `undefined`: Represents a variable that has been declared but not assigned a value. Example: `let x; typeof x; // Output: "undefined"`
- `symbol`: Represents unique identifiers. Example: `typeof Symbol("foo"); // Output: "symbol"`
- `object`: Represents collections of data. Example: `typeof { key: "value" }; // Output: "object"`
- `function`: Represents a block of reusable code. Example: `typeof function() {}; // Output: "function"`
:::

## What are the differences between `null` and `undefined` in JavaScript?

In JavaScript, `null` and `undefined` are both special values that represent the absence of meaningful data, but they're used in slightly different ways. `Undefined` means a variable has been declared but has not been assigned a value yet. It's like an empty box - there's nothing inside it. On the other hand, `null` is an explicitly assigned value that represents nothing or no value. It's like having a box, but deliberately putting nothing in it. So, while both represent emptiness, `undefined` usually indicates a variable that hasn't been initialized, while `null` is typically assigned to indicate no value on purpose.

::: tip
- Undefined indicates that a variable has been declared but not assigned a value.
- Null represents an intentional absence of any value.
:::

## What is scope in JavaScript?

In JavaScript, scopes define where variables are accessible or visible within your code. When you declare a variable, its scope determines where you can use it. There are mainly two types of scopes: global and local. Global scope means the variable can be accessed from anywhere in your code, while local scope means it's only accessible within a specific block of code, like inside a function. Here's a simple example:

```javascript {2,6}
// Global scope
let globalVar = 10;

function myFunction() {
  // Local scope
  let localVar = 20;
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

console.log(globalVar); // Accessible
console.log(localVar); // Not accessible (will throw an error)
```

In this example, `globalVar` is accessible both inside and outside the function because it's declared in the global scope. However, `localVar` is only accessible inside the function where it's declared.

::: tip
- Scopes in JavaScript define where variables are accessible in your code.
- Two main types of scopes: global and local.
- Global scope: Variables can be accessed from anywhere in the code.
- Local scope: Variables are only accessible within a specific block of code, like inside a function.
- Accessing variables outside their scope results in errors.
:::

## Which blocks create a scope in JavaScript?

In JavaScript, blocks like functions, loops (like `for` or `while`), and conditional statements (like `if` or `switch`) create what's called a scope. This means that any variables declared inside these blocks are only accessible within that block. Here's a simple example:

```javascript {2-5,9-11,15-18}
// Function block scope
function myFunction() {
  let x = 10;
  console.log(x); // Output: 10
}
console.log(x); // Output: ReferenceError: x is not defined

// Loop block scope
for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}
console.log(i); // Output: ReferenceError: i is not defined

// Conditional block scope
if (true) {
  let y = 20;
  console.log(y); // Output: 20
}
console.log(y); // Output: ReferenceError: y is not defined
```

In each of these examples, the variables `x`, `i`, and `y` are only accessible within their respective blocks. If you try to access them outside of those blocks, you'll get an error.

::: tip
- Functions: Variables declared inside a function block are accessible only within that function.
- Loops (like `for` or `while`): Variables declared within loop blocks are limited to the scope of that loop.
- Conditional statements (like `if` or `switch`): Variables declared inside conditional blocks are scoped to those conditionals.
:::

## Why is it recommended not to use `var` in JavaScript?

Using `var` in JavaScript is not recommended because it has a scope that can sometimes be confusing. When you declare a variable with `var`, it can be hoisted to the top of its scope, meaning the variable declaration is moved to the top of the function or global scope. This can lead to unexpected behavior and bugs in your code. Additionally, `var` doesn't respect block scope, which means variables declared inside blocks like if statements or loops can leak out of those blocks. Instead, it's better to use `let` and `const`, introduced in ES6, which have block scope and provide clearer intentions for your code. Here's a simple example:

```javascript {3-5,12-14}
// Using var
function exampleVar() {
    if (true) {
        var message = "Hello!";
    }
    console.log(message); // Outputs: Hello!
}
exampleVar();

// Using let
function exampleLet() {
    if (true) {
        let message = "Hello!";
    }
    console.log(message); // Throws an error: message is not defined
}
exampleLet();
```

In the first example with `var`, `message` is accessible outside of the if block, which can lead to unintended consequences. In the second example with `let`, `message` is only accessible within the if block, providing clearer scoping.

::: tip
- `var` has function-level scope, which can lead to unexpected behavior due to hoisting, where variable declarations are moved to the top of their scope.
- Variables declared with `var` can be accessed outside of their intended scope, such as leaking out of if statements or loops.
- `let` and `const`, introduced in ES6, offer block-level scoping, making code more predictable and easier to understand.
:::

## What is closure in JavaScript?

In JavaScript, closure is when a function remembers the variables outside of it, even after the function finishes executing. This means that the function has access to those variables even though they are not directly inside it. Here's a simple example:

```javascript
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // This will print 'I am outside!' even though outerVariable is not directly inside innerFunction
  }

  return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // This will print 'I am outside!' because innerFunction still has access to outerVariable due to closure.
```

In this code, `innerFunction` can access the `outerVariable` even after `outerFunction` has finished executing. This is because `innerFunction` forms a closure over the `outerVariable`, meaning it retains access to it.

::: tip
- Closure in JavaScript means a function retains access to variables from its outer scope even after the outer function has finished executing.
- It allows functions to access and manipulate variables that are not directly within their own scope.
- This behavior enables powerful programming patterns like encapsulation and data privacy.
:::

## What is Hoisting?

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where they are declared in the code. When a variable or function is hoisted, it means they're available for use before they're actually declared in the code.

For example, let's look at how var, let, and const behave differently when hoisted:

```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
```

With var, the declaration is hoisted, but the assignment isn't. So, `x` is hoisted and initialized as undefined. With let and const, the variable is hoisted, but it's not initialized, resulting in a ReferenceError when trying to access it before initialization.

Function declarations are fully hoisted, meaning both the declaration and the function definition are moved to the top of the scope, allowing you to call the function before it's declared:

```javascript
hello(); // "Hello!"

function hello() {
  console.log("Hello!");
}
```

However, function expressions aren't hoisted in the same way. Only the variable declaration gets hoisted, not the function assignment:

```javascript
hello(); // TypeError: hello is not a function

const hello = function() {
  console.log("Hello!");
};
```

In this case, `hello` is hoisted as undefined, but since it's not yet a function, trying to call it results in a TypeError.

::: tip
- **Hoisting**: JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation.
- **Hoisting with var**: Variable declaration is hoisted, but assignment isn't. Variable is initialized as undefined.
- **Hoisting with let and const**: Variable declaration is hoisted, but not initialized, resulting in a ReferenceError when accessed before initialization.
- **Hoisting with function declarations**: Both declaration and function definition are fully hoisted.
- **Hoisting with function expressions**: Only variable declaration is hoisted, not the function assignment.
:::
