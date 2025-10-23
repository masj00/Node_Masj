// JavaScript is single-threaded, everything runs in a main thread

// excample of asynchronous code
// network, user input, file system handling, databaser

//Solution 1 = eventlistener / callback funktioner der venter på at noget sker

// Problem Callback hell / pyramid of doom

//Solution 2 = Promises (syntactic sugar over callback functions)

//pending fullfilled
        // resolved rejected

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
        throw "oh no!";
        resolve("hey it worked!");
        } catch (error) {
        reject(error);
        }
}, 2000);
})
.then((message) => console.log(message))
.catch((errorMessage) => console.log(errorMessage));
*/
/*
//Problem can end up in callback hell again when chaining multiple thens (nested thens)
function myPromise(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        try { 
            throw new Error("Something Bad");
            resolve("Something Good");
        } catch (error) {
            reject(error);
        }
    }, 3000);
});
}
*/
/*
myPromise()
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage));
*/


//Solution 3 = async / await (syntactic sugar over Promises) 
//problem: Must add try catch for error handling
/*
try{
const successMessage = await myPromise();
console.log(successMessage);
} catch (error) {
    console.log(error);
}
*/

function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            });
        }, 2500);
    });
}

// myFetch("somewebsite.com")
// .then((result) => result.json())
// .then((response) => console.log(response));

// IIFE (immediately invoked function expression)
(async function () {
    const result = await myFetch("somewebsite.com");
    const response = await result.json();
    console.log(response);
})();