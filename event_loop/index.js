// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout (Macrotask)');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise (Microtask)');
// });

// console.log('End');


// Set an interval that logs a message every 1 second
// const intervalID = setInterval(() => {
//     console.log('Interval is running...');
//   }, 1000);
  
  // After some time or based on a condition, clear the interval
  // For example, clear the interval after 5 seconds
//   setTimeout(() => {
//     clearInterval(intervalID);
//     console.log('Interval cleared after 5 seconds.');
//   }, 5000);



  function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise got resolved")
            resolve()
        },ms)
    })
  };
  

  async function examplePromise(){
    console.log("start");
    await delay(2000)
    console.log("After 2 second");
  }

  examplePromise()
  







