
```javascript

var:
Hoisting:       Variables declared with var are hoisted to the top of their function scope or global scope.
Reassignment:   var allows redeclaration and reassignment.
Scope:          var has function scope, meaning it is visible throughout the whole function it is declared in.

Code Snippet:

 console.log(x); // undefined
var x = 5;
console.log(x); // 5




let:
Hoisting:         Variables declared with let are hoisted to the top of their block scope, but not initialized.
Reassignment:      let allows reassignment but not redeclaration in the same scope.
Scope:             let has block scope, meaning it is visible only within the block it is declared in.

Code Snippet:

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10


const:

Hoisting:      Variables declared with const are hoisted to the top of their block scope, but not initialized.
Reassignment:   const does not allow reassignment after initialization. It must be assigned a value at the time of declaration.
Scope:          const has block scope, meaning it is visible only within the block it is declared in.

Code Snippet:

const z = 15;
// Attempting to reassign will result in an error
// z = 20; // TypeError: Assignment to constant variable.
console.log(z); // 15
