//! 2nd way 

// let btn=document.getElementById("btn")
// console.dir(btn)
// btn.onclick=()=>{
//     alert("2nd way of Event 😊")
// }



//!3rd way


// let btn=document.getElementById("btn")
// console.dir(btn)
// btn.addEventListener("click",()=>{
//     alert("3rd way of Event😻😻")
// })


//!Mouse Enter

// let h1=document.querySelector("h1")
// let button=document.querySelector("button")

// h1.addEventListener("mouseenter",()=>{
//     h1.style.color="pink";
//     h1.style.backgroundColor="black";
// })


// button.addEventListener("mouseenter",()=>{
//     button.style.color="black";
//     button.style.backgroundColor="yellow";
//     button.style.padding="10px 25px";
// })



// h1.addEventListener("mouseleave",()=>{
//     h1.style.color="aqua";
//     h1.style.backgroundColor="red";
// })


// button.addEventListener("mouseleave",()=>{
//     button.style.color="white";
//     button.style.backgroundColor="royalblue"
//     button.style.padding="25px 25px";
// })


//!  Input

let input=document.querySelector("input")
input.addEventListener("input",()=>{
    input.style.backgroundColor="red"
})

let textarea=document.querySelector("textarea")
textarea.addEventListener("input",()=>{
     textarea.style.backgroundColor="green"
})
let dropdown=document.querySelector("#country")
dropdown.addEventListener("input",()=>{
    dropdown.style.backgroundColor="pink"
})


//!  Change()

input.addEventListener("change",()=>{
    input.style.backgroundColor="yellow"
})


// dropdown.addEventListener("change",()=>{
//     dropdown.style.backgroundColor="orange"
// })

textarea.addEventListener("change",()=>{
    textarea.style.backgroundColor="aqua"
})



