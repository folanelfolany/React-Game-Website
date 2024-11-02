console.log("Hi")
// lorem ipsum
console.log("Hi again")

//If i want to make a function that says Hi wheneevr called, without having to update
// , I can do this:
// Partntheses can take paramters, IE take a password to run a function on it

function sayHi(){
    console.log("Hi from function")
    console.log("Bye from function")

}

//Do it without paramters
sayHi()

//Pass code to a function?

function sum(a,b){
    //a and b are paramters
    //set them writing the function name and the values in brackets in place of a ,b
    return a+b
    //Wont run because it is after return
    console.log("This will not run")
    
}


const al = sum(4,8)
console.log (al)