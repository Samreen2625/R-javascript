// console.log(document)

// //! Accessing a element
// Direct access
// console.log(document.all)
// // console.log(all)            // it is not possible in DOM
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.images)
// console.log(document.h1)       // it is not possible in DOM,because they are not build 
// console.log(document.p)        // it is not possible in DOM,because they are not build 
// console.log(document.a)         // it is not possible in DOM,because they are not build 
// console.log(document.button)     // it is not possible in DOM,because they are not build 

// //// indirect access
// //! 1)getElementBy Id()
// let h1=document.getElementById("heading")
// console.log(h1)
// h1.style.backgroundColor="purple"
// h1.style.color="green"
// h1.style.border="2px solid red"
// h1.style.textAlign="center"
// h1.style.textTransform="uppercase"

// let p=document.getElementById("para")
// console.log(p)
// p.style.backgroundColor="#333"
// p.style.color="#fff"
// p.style.textAlign="justify"
// p.style.padding="30px"

// let btn=document.getElementById("btn")
// console.log(btn)
// btn.style.padding="10px 20px"
// btn.style.backgroundColor="green"
// btn.style.color="pink"

// //! 2)getElementsByClassName()
// let a=document.getElementsByClassName("common")
// console.log(a)
// //* applying css properties through normal forloop()
// for(let i=0;i<a.length;i++){
//     console.dir(a[i])
//     a[i].style.color="red";
//     a[i].style.backgroundColor="skyblue"
// }
 // a.style.color="red"            //in classname directly applying css peopertirs on elements is not possible,
                                // so we use for loop itertion to apply css properties individually.

// //* applying css properties through conerting it to array and then access by using foreach()
// let b=Array.from(a)
// console.log(b)
// b.forEach((ele)=>{
//     console.log(ele)
//     ele.style.color="blue"
// })

//! 3)getElementsByTagName()
// let h1=document.getElementsByTagName("h1")
// console.log(h1)

// for(let i=0;i<h1.length;i++){
//     h1[i].style.color="red"
// }

// let p=document.getElementsByTagName("p")
// console.log(p)

// let newp=Array.from(p)
// console.log(newp)
// newp.map((ele)=>{
//     ele.style.color="green"
// })

//! 4)getElementsByName()
// let inp1=document.getElementsByName("firstName")
// console.log(inp1)
// inp1.forEach((ele)=>{
//     ele.style.backgroundColor="skyblue"
// })
// let inp2=document.getElementsByName("lastName")
// console.log(inp2)
// inp2.forEach((ele)=>{
//     ele.style.backgroundColor="yellow"
// })

//! 5)querySelector()
// let tag=document.querySelector("h1")
// console.log(tag)
// tag.style.color="green"

// let id=document.querySelector("#name")
// console.log(id)
// id.style.color="red"

// let cls=document.querySelector(".common")
// console.log(cls)
// cls.style.color="blue"

// let name1=document.querySelector("div>h1")
// console.log(name1)
// name1.style.color="yellow"



//?querySelectorAll()

// let h1=document.querySelectorAll("h1")
// console.log(h1)


// let h1id=document.querySelectorAll("#name")
// console.log(h1id)
// h1id.forEach((ele)=>{
//     ele.style.color="red"
// })


// let h1Class=document.querySelectorAll(".common")
// console.log(h1Class)
// h1Class.forEach((ele)=>{
//     ele.style.backgroundColor="yellow"
// })


// let h1Combinator=document.querySelectorAll("div>h1")
// console.log(h1Combinator)
// h1Combinator.forEach((ele)=>{
//     ele.style.color="blue"
// })

//! Write()


// document.write("Hello from write method in javascript")
// document.write("<h1>Hello from write method in javascript</h1>")

// document.writeln("Hello dabba shravyaa.....(●'◡'●) and writeln method in javascript")
// document.writeln("<h1>Hello from writeln method in javascript</h1>")


//! Write()  vs writeln()

// document.write("Haii😻😻")
// document.write("Hello😁😁")

// document.writeln("haii😊")
// doscumnet.writeln("hello😃")



//?Accessing the text written in html tag

// let h1=document.getElementById("head")
// console.log(h1)
// console.log(`textContent:${h1.textContent}`)
// console.log(`innerText:${h1.innerText}`)
// console.log(`innerHTML:${h1.innerHTML}`)

// let p=document.querySelector("p")
// console.log(p)
// console.log(`textContent:${p.textContent}`)
// console.log(`innerText:${p.innerText}`)
// console.log(`innerHtml:${p.innerHTML}`)


//! Getting Attributes

// let h1=document.querySelector("h1")
// console.log(h1)
// console.log(h1.getAttribute("id"))
// console.log(h1.getAttribute("class"))
// console.log(h1.getAttribute("title"))

// console.log(h1.getAttributeNode("id"))
// console.log(h1.getAttributeNode("class"))
// console.log(h1.getAttributeNode("title"))
// console.log(h1.attributes)


// let div =document.querySelector("div")
// console.log(div)


// div.setAttribute("id","div")
// div.setAttribute("class","divClass div1class div2class" )
// div.setAttribute("samreen","itemp")

//!ClassName 

// let classNames=div.className
// console.log(classNames)

//!Remove attribute

// function removingAttribute(){
//           div.removeAttribute("id")
//           div.removeAttribute("class")
// }


//! ClassList



// let head=h1.classList.contains("jerry")
// console.log(head)
// let head1=h1.classList.contains("shravs")
// console.log(head1)

// console.log(h1.classList.length)

// let h1=document.querySelector("h1")
// console.log(h1.classList.item(0))
// console.log(h1.classList.item(1))
// console.log(h1.classList.item(2))

//! Toggle
// function ToggleClass(){
//     h1.classList.toggle("fourth")
// }


//!createElement()

// let h1=document.createElement("h1")
// console.log(h1)

// let p=document.createElement("p")
// console.log(p)

// let btn=document.createElement("button")
// console.log(btn)

// //! Create Comment()

// let comment=document.createComment("This is a comment")
// console.log(comment)

// //?create TextNode()

// let h1Data=document.createTextNode("I am inside h1 tag")
// console.log(h1Data)

// let pData=document.createTextNode("I am inside p tag")
// console.log(pData)

// let btnData=document.createTextNode("I am inside button tag")
// console.log(btnData)


// //! Append() and AppendChild()

// h1.appendChild(h1Data)
// p.appendChild(pData)
// btn.appendChild(btnData)

// h1.append(h1Data)
// p.append(pData)
// btn.append(btnData)


// let body=document.querySelector("body")
// console.log(body)

// body.appendChild(h1)
// body.appendChild(p)
// body.appendChild(btn)

//! Children and ChildNodes

// let body=document.querySelector("body")
// console.dir(body)
// console.log(body.childNodes)
// console.log(body.children)

//! Task   

// let h1=document.createElement("div")
// console.log(h1)
// h1.textContent="NAVBAR"
// h1.style.height='100px'
// h1.style.width='100%'
// h1.style.backgroundColor='red'


//!insertBefore()

let h1=document.createElement("h1")
let p=document.createElement("p")
let btn=document.createElement("button")

let h1data=document.createTextNode("i am Heading..")
let Pdata=document.createTextNode("i am Paragraph..")
let btndata=document.createTextNode("Click")

h1.appendChild(h1data)
p.appendChild(Pdata)
btn.appendChild(btndata)

let body=document.querySelector("body")
body.append(h1,p,btn)


let div=document.getElementById("division")
console.log(div)


body.insertBefore(btn,div)
body.insertBefore(p,div)
body.insertBefore(h1,btn)