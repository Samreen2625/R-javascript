//!
 
console.log(this) //window object

//! 
 
function hello(){
    console.log(this)
}
hello()  //window object

let fun =()=>{
    console.log(this)
}
fun()  // window object


// let obj= {
//     name:"Samreen",
//     place:"Hyderabad",
//     fun:function(){
//         console.log(`My name is ${this.name} and i am from ${this.place}` )
//     }
// }
// obj.fun() //Current object

//! 

let obj1={
    name1:"Sammuuuu",
    place1:"Hyderabad",
    fun:()=>{
         console.log(this.name1)
    }

}
obj1.fun()   // it will return undefined