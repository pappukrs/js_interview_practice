
//callback


// function fetchData(callback){

//     setTimeout(()=>{
//      const data = `async data`;
//     callback(data)
//     },1000) 
// }


// function processData(data){
//     console.log("processing:",data)
// }


// fetchData(processData);



//promises


// function fetchPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 const data = `async data`
//                 resolve(data)
//         },1000)
//     })
// }


// fetchPromise()
//  .then(data=>console.log("process:",data))
//  .catch(error=>console.log("error:",error))



 //promises with chaining 



//  function fetchPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("async data");
//       }, 1000);
//     });
//   }
  
//   fetchPromise()
//     .then(data => {
//       console.log("process-promise:", data);
//       return "processed data";
//     })
//     .then(data => {
//       console.log("process:", data);
//       // Returning a value for the next then in the chain
//       return data.toUpperCase();
//     })
//     .then(data => {
//       console.log("final result:", data);
//     })
//     .catch(error => {
//       console.error("error:", error);
//     });



    // async-await




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
      




    



  

