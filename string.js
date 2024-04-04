
//!Creating strings using string literal way

// let a="samreen"
// let b="a"
// let c="sammu"
// let d='10'
// let e=""
// let f=" "


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// //!checking the type
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)


//!Accessing string using index

// let a="Stupid fellows"
// console.log(a)
// console.log(a[13])
// console.log(a[7])
// console.log(a[8])
// console.log(a[2])

// //!Length
// console.log(a.length)
// console.log(a.length-1)

// //!String Methods//!

// //!To upper case()
// let b="good morning"
// console.log(b.toUpperCase())

// //!to lower case()

// let c="Haii HellOOO bye WELCOME"
// console.log(c.toLowerCase())

// //!to charAt
// let d="javascript"
// console.log(d.charAt(3))
// console.log(d.charAt(2))
// console.log(d.charAt(7))
// console.log(d.charAt(5))


// //!charcodeat
// let f="Stupid Fellows"
// console.log(f.charCodeAt(12))
// console.log(f.charCodeAt(2))
// console.log(f.charCodeAt(8))
// console.log(f.charCodeAt(9))
// console.log(f.charCodeAt(11))


//!Replace()

// let k="haii guys how are you guys"
// let newVal=k.replace("guys","girls")
// console.log(newVal)




// //! ReplaceAll()

// let a="guys listen here guys"
// let newval=a.replaceAll("guys","boys")
// console.log(newval)


//!Repeat
let s="😁😊😃😄"
// console.log(s.repeat(20))
// console.log(s.repeat(50))


//!trim start() ,trim end() and trim()

// let a="                                   haii helloooo where are youuuu guysss                                            "
// console.log(a.length)
// let b="haii helloooo where are youuuu guysss                                            "
// console.log(b.length)
// let res1=a.trimStart()
// console.log(res1)
// console.log(res1.length)
// let res2=a.trimEnd()
// console.log(res2)
// let res3=a.trim()
// console.log(res3)



//!concat (string1,string2)
// let str1="haoi"

// let str2="hello"
// let str3="good"
// let newout=str1.concat("",str2,"",str3)
// console.log(newout)



// //!to string 
// let a="Hello"
// let b=new String("Byee")
// console.log(a)
// console.log(typeof a)
// console.log(b)
// console.log(typeof b)
// let c=b.toString()
// console.log(c)
// console.log(typeof c)


//!includes
// let d="haii hello good evening"
// console.log(a.includes("hello"))
// console.log(a.includes("Hello"))
// console.log(a.includes("good"))
// console.log(a.includes("morning"))


//!Starts with -- start position takes index 

// let a="Hello good morning haii"
// console.log(a.startsWith("Hello"))
// console.log(a.startsWith("hello"))
// console.log(a.startsWith("good"))
// console.log(a.startsWith("Hello good"))
// console.log(a.startsWith("good",6))
// console.log("---------------------------")

// //! Ends with ()-- end posoton takes length 

// let b="Python is programming language"
// console.log(b.endsWith("Language"))
// console.log(b.endsWith("Programming"))
// console.log(b.endsWith("is",2))
// console.log(b.endsWith("is",8))
// console.log(b.endsWith("python"))



//!indexoff()    first occurence
// let g="Hello How are youuu hello"
// console.log(g.indexOf("Hello"))
// console.log(g.indexOf("Are"))
// console.log(g.indexOf("random"))
// console.log(g.indexOf("hello",4))
// console.log(g.indexOf("Hello",2))
// console.log(g.indexOf("Hello",-3))
// console.log("-------------------")
// //!lastindexof()    last occcurence 

// let k="shravya is a dabba and stupid"
// console.log(k.lastIndexOf("is"))
// console.log(k.lastIndexOf("a"))
// console.log(k.lastIndexOf("random"))
// console.log(k.lastIndexOf("dabba"))
// console.log(k.lastIndexOf("shravya",5))


//!slice()

 //!Split()

//  let n="What $-shall $- i $-take"
//  console.log(n.split("-"))
//  console.log(n.split(""))
//  console.log(n.split("",2))



//  //!String interpolation /template strings

 let a="good"
 let b="morning"
 console.log(a+b)
 console.log(`${a} ${b}`)

 let k=3;
 let m=5;
 console.log("The sum os a+b is",k+m)
 console.log(`the sum of a+b is ${a+b}`)



//!substring(startindex,endindex)

// let m="Good morning guyss"
// console.log(m.substring(0,2))
// console.log(m.substring(5,2))
// console.log(m.substring(3,16))
// console.log(m.substring(0,10))
// console.log(m.substring(-1,8))
// console.log(m.substring(-9,6))
// console.log(m.substring(-1,-1))
// console.log(m.substring(3))

//!substr( startindex,length)

// let a="Hello"
// console.log(a.substr(1)) //it will take start index to total length
// console.log(a.substr(3))
// console.log(a.substr(3,3))
// console.log(a.substr(1,1))
// console.log(a.substr(4,1))
// console.log(a.substr(4,-4))  //?  if it is negative length it will return empty string
// console.log(a.substr(-1,4))
// console.log(a.substr(-2,2)) //? it will start from -1,-2,-3
// console.log(a.substr(-2,4))
// console.log(a.substr(-2,-4))


