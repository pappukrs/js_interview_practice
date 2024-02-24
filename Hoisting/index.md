

# 1. What is hoisting in JavaScript?
  Answer: Hoisting is a default JavaScript behavior where variable and function declarations are moved to the top of their containing  scope in there file where code is written during the compilation phase.
          This means that you can use variables and functions before they are declared in your code.


# 2. Function Declaration vs Function Expression hoisting:
  Answer: Function declarations are fully hoisted, meaning they are moved to the top of the scope and can be used before the declaration. Function expressions, on the other hand, are hoisted only in terms of variable declaration (if declared with var), but the function assignment is not hoisted.

   Certainly! Let's illustrate the concept with a code snippet:

     ## Function Declaration (Fully Hoisted)

     hoistedFunction(); // This will work

     function hoistedFunction() {
            console.log("Function Declaration is hoisted!");
           }

      ## Function Expression (Not Fully Hoisted)
     try {
    // This will throw an error: TypeError: myFunctionExpression is not a function
     myFunctionExpression();
     } catch (error) {
    console.error(error.message);
    }

   var myFunctionExpression = function() {
     console.log("Function Expression is not fully hoisted!");
    };


   In the above code:

- The `hoistedFunction` is a function declaration. It is fully hoisted to the top of the scope, allowing you to call it before the actual declaration in the code.

- The `myFunctionExpression` is a function expression assigned to a variable using `var`. The variable declaration is hoisted, but the function assignment is not. Therefore, trying to call `myFunctionExpression` before its assignment results in a TypeError, indicating that it is not a function.

This demonstrates the difference in hoisting behavior between function declarations and function expressions in JavaScript.



# 3. Variable Hoisting:
  Answer: Variables declared with var are hoisted to the top of their scope and can be used before the declaration. However, only the declaration is hoisted, not the initialization. For example:
     console.log(x); // undefined
     var x = 5;
     console.log(x); // 5

# 4. Hoisting in a block scope:
   Hoisting does not occur within block scopes for variables declared with `let` and `const`. For example:
    if (true) {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
}
 - But it occured for declared with `var`
   if(6==6){
    console.log("if",five);
    var five=6;
   }
  else{
  console.log("else",five)
  }

# 5.Order of hoisting:
  Answer: Function declarations are hoisted first, followed by variable declarations. Functions take precedence over variables if there are conflicts in names within the same scope.


```javascript
  // Function Declaration
hoistedFunction(); // This will work

function hoistedFunction() {
  console.log("Function Declaration is hoisted!");
}

// Variable Declaration
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

Certainly! Let's demonstrate the order of hoisting with a code snippet:

```javascript
// Function Declaration
hoistedFunction(); // This will work

function hoistedFunction() {
  console.log("Function Declaration is hoisted!");
}

// Variable Declaration
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

In the above code:

1. The `hoistedFunction` is a function declaration, and it is hoisted to the top of the scope. You can call the function before its actual declaration in the code.

2. The variable `x` is declared using `var`, and it is also hoisted to the top of the scope. However, only the declaration is hoisted, not the initialization. Therefore, when you try to log the value of `x` before its assignment, it will be `undefined`.

This demonstrates that function declarations are hoisted first, and then variable declarations are hoisted. Functions take precedence over variables if there are naming conflicts within the same scope. In this case, the function can be used even before the variable is declared and initialized.


# 6. Let and Const hoisting:
Answer: Function expressions are not hoisted in the same way as function declarations. If a function is defined using a function expression, the variable declaration is hoisted, but the function assignment is not.

```javascript
console.log(myFunction); // undefined
var myFunction = function() {
  // function logic
};
```

# 7. Function Expression Hoisting:
```javascript

console.log(myFunction); // undefined
var myFunction = function() {
  // function logic
};
```

# 8. Hoisting and Arrow Functions:

```javascript
Answer: Arrow functions are not hoisted in the traditional sense because they are expressions. They follow the same hoisting rules as function expressions.
```

# 9. Temporal Dead Zone (TDZ):
Answer: The Temporal Dead Zone (TDZ) is the time between entering a scope and the variable being declared and initialized. Accessing a variable during this time results in a ReferenceError.

# 10. Hoisting in Classes:
 Answer: Class declarations are hoisted in a way similar to function declarations. However, class expressions are not hoisted in the same manner.

 # Code-related questions:
 ```javascript

 1. Function Hoisting:
  // Function declaration is hoisted
hoistedFunction(); // This will work

function hoistedFunction() {
  console.log("Function is hoisted!");
}


2. Variable Hoisting:

console.log(x); // undefined
var x = 10;
console.log(x); // 10

3. Hoisting in Loops:

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

4. Block Scope and Hoisting:

if (true) {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
}


5. Arrow Functions and Hoisting:


console.log(myArrowFunction); // undefined
var myArrowFunction = () => {
  console.log("Arrow function is not hoisted!");
};







 
