let a= function(){
    console.log(" i am anonymous function")
}
a()

//! Arrow function

let b=()=>{
    console.log("I am arrow function")
}
b()

let c=()=>{
    return "i am arrow function again"
}
console.log(c())


let d=(a,b)=>{
    return a+b;
}
console.log(d(10,20))


//!Explicit  arrow function   or explicit return

let e=(a,b)=>{
      return a+b;
}
console.log(e(10,20))


//!Implicit  Return

let f=()=>"i am implicit arrow function"
console.log(f())

//when ever you have no parameters we can replace parenthesis with underscore
//  let h= _=>{
//     console.log("i am samreeen")
//  }
//  h()


 //when you have single parameter we can skip the parenthesis
//  let j=val=>val
//  console.log("hellooo")
// j()


//!4) Immediate invoked function Expression IIFE

(()=>{
    console.log(" i am sammm")
})();

(function(){
    console.log("i am IIfe again")
})();


(function abc(){
    console.log(" i am IIFE again 2")
})();