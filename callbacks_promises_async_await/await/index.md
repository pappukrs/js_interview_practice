
# callback
  -- definition :  
     
     Callback is a type of function in js that are passes as argument to other function and generally executed after the completion of 
     asyncchronous task.


     Callbacks are a common pattern for handling asynchronous operations in JavaScript. They are functions that are passed as arguments to other functions and are executed after the completion of an asynchronous task.

      

```javascript 

function fetchData(callback){

    setTimeout(()=>{
     const data = `async data`;
    callback(data)
    },1000) 
}


function processData(data){
    console.log("processing:",data)
}


fetchData(processData);




```

# 2. Promises:
Promises provide a cleaner and more structured way to handle asynchronous operations. They represent the eventual completion or failure of an asynchronous operation and allow chaining of multiple async operations.

Code Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => console.log("Processing:", data))
  .catch(error => console.error("Error:", error));

```


# 3.Async/Await:

   async/await is a more modern and concise way to handle asynchronous code. It allows writing asynchronous code in a synchronous style, making it easier to read and understand.


  Code Example:

```javascript
    function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  await delay(1000);
  return "Async data";
}

async function processData() {
  try {
    const data = await fetchData();
    console.log("Processing:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

processData();

```





# 1. Q: What is a callback function in JavaScript?
Answer: A callback function is a function passed as an argument to another function, which will be invoked or executed later, usually after some asynchronous operation.

```javascript
function fetchData(callback) {
  // Some asynchronous operation
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

```

# 2 .Q: What is a Promise in JavaScript?
Answer :   A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has methods like then() and catch() to handle the success or failure of the operation.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Some asynchronous operation
    setTimeout(() => {
      resolve("Data received");
      // or reject("Error occurred");
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  ```

# 3. Q: How does async/await simplify asynchronous code?

Answer: The async keyword is used to declare an asynchronous function, and await is used to pause the execution of the function until the Promise is resolved. It provides a more synchronous-like syntax for handling asynchronous code.

```javascript
async function fetchData() {
  try {
    let result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

4. Q: Can you mix callback and async/await in JavaScript?
Answer : Yes, you can use async/await within a function that takes callbacks, but it's generally recommended to use one style consistently for better code readability.


```javascript

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

// Example using a callback
fetchData((result) => {
  console.log(result);
});

// Example using async/await
(async () => {
  let result = await fetchDataAsync();
  console.log(result);
})();
```























