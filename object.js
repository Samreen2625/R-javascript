// let name="Samreen"
// let age=20;
// let email="samreen123@gmail.com"
// let mobile=null;

// let arr=["samreen",20,"samreen123@gmail.com",null]

// //*object  literals 

// let details ={
//     name:"Samreen",
//     age:23,
//     isEmployee:true,
//     fun:function(){
//         console.log("Hello")
//     },
//     skills:{
//         frontend:["HTML","CSS","JS","REACT JS"],
//         frameworks:["BOOSTRAP","TAILWIND"]
//     }
// }

// console.log(details)

// //! Accessing object values

//  //! 1 ) DOT NOTATIONS

// console.log(details.name)
// console.log(details.age)
// console.log(details.isEmployee)
// details.fun()
// console.log(details.skills.frontend)
// console.log(details.skills.frameworks)


// //! 2) BOX NOTATATIONS

// console.log(details["name"])
// console.log(details["age"])
// console.log(details["isEmployee"])
// details["fun()"]
// console.log(details["skills"]["frontend"])
// console.log(details["skills"]["frameworks"])

// //* Creating objects using object constructor

// let data=new Object()

// data.name="Samreen"
// data.age=90
// data.isEmployee=true
// data.fun=function hello(){
//     console.log(" Hello i am function")
// }
// console.log(data)
// console.log(data.name)
// console.log(data.age)
// console.log(data.isEmployee)
// data.fun()


// //* Array of objects


// let arr=[
//     {
//         id:1,
//         name:"sammmuu"
//     },
//     {
//     id:2,
//     name:"hujuuuu"
//     },
//     {
//         id:3,
//         name:"Sanaaa"
//     }
// ]
// console.log(arr)

// console.log(arr[2])
// console.log(arr[2].id)
// console.log(arr[2].name)

// arr.map((element)=>{                     //?   itterating over array object
//     console.log(element.name)
// })                                                                          


//* Dealing with const keyword

////? Arrays

//* Reassigning individual value is possible

// const arr1 =["something","nothing","anything"]
// arr1[1]="HTML"       
// console.log(arr1)

// // //* Reassingning entire array is not possible

// arr1=[1,2,3,4,5]
// console.log(arr1)

// // //? ojects 

// // //* Reassingning individual value is possible

// const obj={
//     name:"Samreen",
//     place:"Karimnagar"
// }
// console.log(obj)
// console.log(obj.name)
// obj.name="sammmmmmuu"
// console.log(obj.name)

// // //* Reassigning entire object is not possible

// obj={
//     name:"Samm",
//     place:"Hyd"


// }
// console.log(obj)


// //!Object property and methods

// let obj={
//     name:"sammmmuuu",
//     age:16,
//     place:"UPl"
// }
// console.log(obj)
// //!delete

// console.log(obj)
// delete obj.place
// console.log(obj)
// delete obj.age
// console.log(obj)


// //!Keys()

// console.log(Object.keys(obj))        //? Returns the names of the enumerable string properties and methods of an object.

// //!Values()
// console.log(Object.values(obj))      //?Returns an array of values of the enumerable properties of an object            

// //!Entries
// console.log(Object.entries(obj))     //?  Returns an array of key/values of the enumerable properties of an object      



//! From entries()

// let newobj=Object.entries(obj)
// console.log(newobj)
// let converted=Object.fromEntries(newobj)
// console.log(converted)

//? Assign()       Copy the values of all of the enumerable own properties from one or more source objects 
//?                to a target object. Returns the target object.

//! Converting array into ObJect

// let arr=["Mon","Tues","wed"]
// console.log(arr)
// let output1=Object.assign({},arr)
// console.log(output1)


// //!Copying the values of one object into another

// let obj1={
//     name:"samreeen",
//     age:10,
//     place:"Karimnagar"
// }

// let output2 = Object.assign({},obj1)

// console.log(output2)


//!Seal()

let obj={
    name:"samreeen",
    age:10,
    place:"Karimnagar"
}

console.log(obj)
Object.seal(obj)

// //! Adding new property is not possible

obj.salary=20000
console.log(obj)

// //!Deleting property is not possible

delete obj.age
console.log(obj)

// //!Modifying existing property is possible

obj.name="sammuuu"
console.log(obj)



// //!Freeze()

let obj1={
    name:"samreeen",
    age:10,
    place:"Karimnagar"
}

console.log(obj1)
Object.freeze(obj1)

// //! Adding new property is not possible

obj.salary=20000
console.log(obj)

// //!Deleting property is not possible

delete obj.age
console.log(obj)

// //!Modifying existing property is  not possible

obj.name="sammuuu"
console.log(obj)



//! deleting the elements

// let obj={
//     name:"samreen",
//     age:23
// }

// console.log(obj)
// delete obj.name
// delete obj.age
// console.log(obj)
