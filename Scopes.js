// Global scope

// var s=10;
// let b=20;
// const c=30;

// console.log("----Globally-----")
// console.log(s)
// console.log(b)
// console.log(c)

// function display(){
//     console.log(" i am inside function")
//     console.log(s)
//     console.log(b)
//     console.log(c)
// }
// display()

// {
//     console.log(" i am inside block")
//     console.log(s)
//     console.log(b)
//     console.log(c)
// }


// Function scope or local scope

// function something(){
//     var a="sam"
//     let b="doremon"
//     const c="nobitha"
//     console.log("inside function")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// something()


// console.log("outside of the function and out side block")
// console.log(a)
// console.log(b)
// console.log(c)

// {
//     console.log("inside the block")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }



//block scope
{
var a=10;
let b=20;
const c=40;

console.log("inside the block")
    console.log(a)
    console.log(b)
    console.log(c)
}
function hello(){
    console.log("inside the function") 
    console.log(a)     // only var can be accessable
    // console.log(b)
    // console.log(c)
}
hello()

console.log("outside of the function outside block")
console.log(a)   // only var can be accessable inside the block or out side the block
    console.log(b)
    console.log(c)
