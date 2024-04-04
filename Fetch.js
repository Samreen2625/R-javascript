
//? ASYNC AND AWAIT

// let fetchData= async()=>{
//     let output1= await fetch("https://fakestoreapi.com/products")
//     let output2= await output1.json()
//     console.log(output2)
// }
// fetchData()

//? THEN 

// let div=document.getElementById("root")
// fetch("https://fakestoreapi.com/products")
// .then((res)=>{
//        return res.json()
// }).then((res)=>{
//        res.map((ele)=>{
//        div.innerHTML+=`
//        <h1>${ele.id}</h1>
//        <h1>${ele.title}</h1>
//        <img src=${ele.image}>
//        <p>${ele.description}</p>
//        <h1>${ele.price}</h1>
//        <button>BUY NOW</button>
//        `
//        })
// })



//? ASYNC AND AWAIT

let div=document.getElementById("root")
let fetchData=async()=>{
  let output1= await fetch("https://fakestoreapi.com/products")
  let res=await output1.json()
 res.map((ele)=>{
    div.innerHTML+=`
           <h1>${ele.id}</h1>
           <h1>${ele.title}</h1>
           <img src=${ele.image}>
           <p>${ele.description}</p>
           <h1>${ele.price}</h1>
           <button>BUY NOW</button>
           `
 })
}
 fetchData()
      
