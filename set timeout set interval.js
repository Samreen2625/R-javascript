// setTimeout(()=>{
//             console.log("setTimeout:Please call your Friend")
// },5000)

// setInterval(()=>{
//          console.log("setTimeInterval:Please call your Friend")
// },5000)


// let count=0
// let time=setInterval(()=>{
//     console.log("setTimeInterval:Please call your Friend")
//     count++
//     if(count==3){
//         clearInterval(time)
//         console.log("it stopped")
//     }
// },3000)

let time1=setTimeout(()=>{
    console.log("SetTimeout:please call you frined ")
})

setTimeout(()=>{
    clearTimeout(time1)
    console.log("successfuly stopped at 3s ")
},3000)