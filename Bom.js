//! Alert()  
// window.alert(" i am here")
// function showAlert(){
//     alert("i am alert msg")
// }


//! Confirm ()

// function showConfirm(){
//     confirm("Are you sure you want to submit the form")
// }


// alert("Hello samreen")

// console.log(window)


// function combined(){
//     let a=confirm("do you want to submit the form ")
//     if(a){
//         alert("your form got submitted")
//     }
//     else{
//         {
//            alert ("please check the details once again")
//         }
//     }
// }

// //!prompt ()

// function showPrompt(){        
//      let a=prompt("Enter your name")
//          console.log(a)
// }


// function promptAdd(){
//     let num1=Number(prompt("Enter first number"))
//     let num2=Number(prompt("Enter second number"))
//     console.log(num1+num2)
// }

//!Converting to number

//* 1)Number()

// let num=Number(prompt("Enter a number"))
// console.log(num)
// console.log(typeof num)

// //* 2) parseInt()

// let num3=parseInt(prompt("Enter a number"))
// console.log(num3)


//! converting to number
// // 1. number()
// let n=Number(prompt("enetr a number"))
// console.log(n)
// console.log(typeof n)

// // 2. paseInt()
// let n1=parseInt(prompt("enetr a number"))
// console.log(n1)
// console.log(typeof n1)

// // 3.parseFloat()
// let n2=parseFloat(prompt("enetr a number"))
// console.log(n2)
// console.log(typeof n2)

//! open()
// let a;
// function opening(){
//    a= open("./Bom.html","https://www.google.com","_blank","height=300px,width=300px,top=300px,left=600px")
// }

//! close()
// function closing(){
//     a.close()
// }

//! outerheight and innerheight
// console.log(`INNER HEIGHT:${innerHeight`})
// console.log(OUTER HEIGHT:${outerHeight})
//! outerwidth and inner width
// console.log(OUTER WIDTH:${outerWidth})
// console.log(INNER WIDTH:${innerWidth})

//! local storage
// console.log(window.localStorage)

//// setitem()
// localStorage.setItem("name","shravs")
// localStorage.setItem("age","22")
// localStorage.setItem("place","Hyd")
////get item()
// let name=localStorage.getItem("name")
// console.log(name)
// let age=localStorage.getItem("age")
// console.log(age)
//// remove item()
// localStorage.removeItem("name")
//// clear item()
// localStorage.clear()

//! session storage
// console.log(window.sessionStorage)
// //// setitem()
// sessionStorage.setItem("name","shravs")
// sessionStorage.setItem("age","22")
// sessionStorage.setItem("place","Hyd")
// ////get item()
// let name=sessionStorage.getItem("name")
// console.log(name)
// let age=sessionStorage.getItem("age")
// console.log(age)
// //// remove item()
// sessionStorage.removeItem("name")
// clear item()
// sessionStorage.clear()



//! History 
console.log(history)

//! Length

// console.log(length)

//! Forward()

let moveForward=()=>{
           history.forward()
}

//! Back ward()

let moveBackward=()=>{
    history.back()
}

//! Go()

let ForwardBy2=()=>{
    history.go(2)     //! For forward we need to mention positive number
}

let BackwardBy2=()=>{
    history.go(-2)    //! For back we need to mention in negative number
}


console.log(screen)
console.log(screen.height)
console.log(screen.availHeight)
console.log(screen.width)
console.log(screen.availWidth)
console.log(screen.colorDepth)
console.log(screen.pixelDepth)