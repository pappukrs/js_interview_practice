# Event Loop:

```javascript


Definition: 
-- The event loop is a mechanism in JavaScript that enables the asynchronous, non-blocking execution of code. It manages the execution  of code by constantly checking the call stack, the callback queue, and the message queue.

Purpose: 
-- It ensures that JavaScript remains single-threaded and responsive by handling asynchronous operations efficiently.


Microtasks:

Definition: Microtasks are tasks that are executed in the microtask queue and have higher priority than macrotasks in the event loop.
Examples: Promises, process.nextTick (in Node.js), MutationObserver.
Execution: Microtasks are executed after the current execution context (the entire call stack) but before the next event loop cycle.


Macrotasks:
Definition: Macrotasks are tasks that are executed in the macrotask queue and have lower priority than microtasks in the event loop.
Examples: setTimeout, setInterval, I/O operations, DOM rendering.
Execution: Macrotasks are executed in the next event loop cycle, after the microtasks have been processed.


Event Loop Process:

1.Execute Synchronous Code: Execute any synchronous code in the call stack.
2.Execute Microtasks: Execute all microtasks in the microtask queue.
3.Execute Macrotasks: Execute one macrotask from the macrotask queue.
4.Repeat: Go back to step 1 and repeat the process.

Code Example:

console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Microtask)');
});

console.log('End');


In this example:

The synchronous code is executed first ('Start' and 'End').
The microtask (Promise) is executed before the macrotask (setTimeout).
Understanding the event loop and the distinction between microtasks and macrotasks is crucial for managing asynchronous behavior and writing efficient, non-blocking JavaScript code.




#### Interview questions based on event loop

# 1 . What is the event loop in JavaScript?
   Answer: The event loop is a mechanism in JavaScript that handles the execution of code, managing asynchronous operations and ensuring the single-threaded nature of JavaScript remains non-blocking.


# 2 . How does the event loop work?
   Answer: The event loop continuously checks the call stack, microtask queue, and macrotask queue. It executes synchronous code, microtasks, and macrotasks in a specific order to maintain the asynchronous, non-blocking behavior.

# 3. What are microtasks and macrotasks in the context of the event loop?
   Answer: Microtasks are tasks with higher priority executed in the microtask queue (e.g., Promises). Macrotasks are tasks with lower priority executed in the macrotask queue (e.g., setTimeout, setInterval).

# 4. Explain the order of execution in the event loop.
   Answer: Synchronous code is executed first, followed by microtasks, and then macrotasks. This cycle continues in subsequent iterations of the event loop.

# 5 .What is the difference between setTimeout and setInterval?
   Answer: setTimeout executes a function once after a specified delay, while setInterval executes a function repeatedly at a specified interval.

# 6.How can you handle asynchronous operations in JavaScript?
  Answer: Asynchronous operations can be handled using callbacks, Promises, async/await, and by leveraging the event loop.

# 7. Write a code snippet using setInterval and clearInterval.

 // Set an interval that logs a message every 1 second
const intervalID = setInterval(() => {
  console.log('Interval is running...');
}, 1000);

// After 5 seconds, clear the interval
setTimeout(() => {
  clearInterval(intervalID);
  console.log('Interval cleared after 5 seconds.');
}, 5000);


# 8.Explain the role of Promises in the event loop.
  Answer: Promises represent the eventual completion or failure of an asynchronous operation. They are scheduled as microtasks, allowing for better control over asynchronous code flow.


# 9. How does async/await work in the context of the event loop?
   Answer: async/await is built on top of Promises. async functions return a Promise, and await is used to pause the execution of the function until the Promise is resolved or rejected.

# 10. Write a code snippet using Promises and async/await.

  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function exampleAsyncFunction() {
  console.log('Start');
  await delay(2000);
  console.log('After 2 seconds');
}

exampleAsyncFunction();






