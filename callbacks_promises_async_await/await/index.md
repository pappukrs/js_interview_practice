
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

```javascript




















