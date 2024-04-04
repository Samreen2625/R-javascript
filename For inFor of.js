//! For in used to iterate upon the arrays based on index and keynames in the case of objects

// !For of used to iterate upon the array elements but in case of objects it is not possible

let arr=["Html","Css","Js"]

for(let val in arr){
    console.log(val)
}


for(let output of arr){
    console.log(output)
}


//* Objects

let obj={
    name:"Doremoon",
    age:20
}

obj["name"]
obj["age"]


for(let val in obj){
    console.log(val)                //? It will dispaly only keys
    console.log(obj[val])           //? It will display values by using box notation we can fetch
}


for(let output of obj){             //?TypeError: obj is not iterable
    console.log(output)             //? For of is not work in obj because it will itrate based on elements
}