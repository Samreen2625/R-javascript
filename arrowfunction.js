//!Arrow function

// let arrow1=()=>{
//     console.log("i am arrow function")
// }
// arrow1()


// //!Explicit return arrow function

// let arrow2=(a,b)=>{
//     return a+b
// }
// console.log(arrow2(10,20))


// //!Implicit return arrow function

// let arrow3=(a,b)=>a+b;
//     console.log(arrow3(10,20))

// //!When ever there are no parameters we can skip the parethesis and replace it with underscore

// let arrow4=_=>console.log("first")
// arrow4()

// //!When there is a single parameter we can skip the parenthesis

// let arrow5 = a=>a;
// console.log(arrow5(10))

//?Arrays (Copying)

// let arr1=[1,2,3,4,5]
// let arr2=[...arr1,6,7,8,9,10]
// console.log(arr2)

// //?Arrays (merge)

// let arr3=[1,2,3,4,5]
// let arr4=[6,7,8,9,10]
// let arr5=[...arr3,...arr4]
// console.log(arr5)

// //?Object (copying)

// let obj1={
//     name:"samreen"
// }

// let obj2={
//     ...obj1,
//     place:"Karimnagar"
// }


// let obj3={
//     ...obj1,
//     ...obj2,

// }
// console.log(obj3)

// //? Converting array to objects

// let arr=["something","Nothing","anything","everything","that's it"]
// let obj={
//     ...arr
// }
// console.log(obj)

//?Rest parameters

// function display(a,b,c,...abc){
//     return abc
// }
// console.log(display(1,2,3,4,5,6,7))

//!Destructring in arrays

// let boy=["laptop","clothes","shoes","books"]
// console.log(boy[1])





// //!skipping array elements
// let boy1=["laptop","books","shoes","clothes"]
// let [,,,books]=boy
// console.log(books)



//!Destructring in objects

// let obj={
//     name:"Rahul",
//     place:"Hyde"
// }

// let {name,place}=obj
// console.log(name)
// console.log(place)

// let{place1}=obj
// console.log(place)

//!Nested destructring

let obj1={
       name:"Rahul",
       skills:["Html","css","Javscript","React"]
}
let {skills:[,,,react]}=obj1

console.log(react)
