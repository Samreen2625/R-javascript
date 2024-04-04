// const add=(a,b)=> a+b;
// // console.log(add(10,20))


// const sub=(a,b)=> a-b;
// // console.log(sub(89,26))

// const mul=(a,b)=> a*b;
// // console.log(mul(20,40))


// const div=(a,b)=> a/b;
// // console.log(div(120,60))


// //! High order functions

// const hof=(m,n,task)=>{
//     return task(m,n)  
// }
// console.log(hof(26,25,add))
// console.log(hof(10,20,sub))
// console.log(hof(10,20,mul))
// console.log(hof(10,20,div))


//!High order methods

//! 1) for each

// let arr=["charminar","tankbund","secratriat","dlf"]

// arr.forEach(function(element,index,array){
//     console.log(`THE ELEMENT IS ${element} AND IT IS STORED IN ${index}COMMING FROM THE GIVEN ARRAY${array}`)
// })

// // //!Cannot  return the values gives undefined

// let output=arr.forEach(function(element,index,array){
// return (`THE ELEMNET IS ${element} AND IT IS STORED IN ${index} COMMING FROM THE GIVEN ARRAY${array}`)
// })

// console.log(output)


//! 2)  MAP()
// let arr1=["charminar","tankbund","secratriat","dlf"]
// arr1.map(function(element,index,array){
//     console.log(`THE ELEMENT IS ${element} AND IT IS STORED IN ${index} COMMING FROM THE GIVEN ARRAY ${array}`)
// })
// let output=arr1.map((element)=>{
//     return (`THE ELEMENT IS ${element}`)
// })
// console.log(output)




// //! 3)  Filter()
// let arr1=[1,2,3,4,5,6]
// arr1.filter((element)=>{
//     console.log(element>3)
// })
// let output1=arr1.filter((element)=>{
//     return element >3
// })
// console.log(output1)

//! 4) Reduce() 

//!Normal function
// let arr=[1,2,3,4,5,6,7]
// let sum=5;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)


// //! reduce function
// let output=arr.reduce((accumulator,element)=>{
//     return accumulator+=element

// },5)
// console.log(output)

//! 5) Some() and Every()

let arr=[1,2,3,4,5,6]
let output1=arr.some((element)=>{
    return element>3
})
console.log(output1)

let output2=arr.every((element)=>{
    return element>4
})
console.log(output2)