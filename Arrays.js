// //? storing manipulating data using variables

// let name="samreen"
// let age=20
// let place="Hyderabad"
// let gender="Female"

// console.log(name)
// console.log(age)
// console.log(place)
// console.log(gender)

// //? Array Literal way

// let details=["Samreen",20,"Hyderabad","Female"]
// console.log(details)


// //? Accessing Array Elements using their indexes

// console.log(details[0])
// console.log(details[3])
// console.log(details[10])
// console.log(details[-1])  // array doesnot support -ve indexing
// console.log(details[2])

// //?Array constructor object

// *Directly passing Array Elements

// let arr=new Array("Doremon",20,"Japan")
// console.log(arr)
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[7]) // if the indexing is not present then it will return undefined
// console.log(arr[-1])

// //? Specifies the size of the array

// let newArr= new Array(3)
// console.log(newArr)
// console.log(newArr[0])
// console.log(newArr[1])
// console.log(newArr[3])
// newArr[0]="samreen"
// newArr[1]="shravya"
// newArr[2]="Ramya"
// console.log(newArr)
// console.log(newArr[0])


// //?length 
// let arr1=["Monty",18,"Banagalore","male"]
// let arr2=new Array("Rahul",18,"BANGALORE")
// console.log(arr1)
// console.log(arr2)
// console.log(arr1.length)
// console.log(arr2.length)
// console.log(arr1[arr1.length-1])

// //? Type of Array

// let arr5=["Monty",18,"Banagalore","male"]
// console.log(typeof arr5)

// //? Multi dimension array

// let arr7=[ ["Samreen",19,"Karimnagar","female"],
//            ["shravya",89,"Peddapalli","Female"],
//            ["Ramya",26,"MNcl","Female"]]

// console.log(arr7)
// console.log(arr7[1][2])           
// console.log(arr7[0][0]) 
// console.log(arr7[1][3])



//!ADD OR REMOVE THE ELEMENTS OF A ARRAY

// //? PUSH()
// let arr1=["something","Nothing","anything","enough"]
// console.log(arr1)

// //? push () ...adds the element at the end of the array
// arr1.push("ENDDDDDDD","ENDDDD22222222")
// console.log(arr1)

// //?pop()....... remove the elements at the end of the array
// arr1.pop()
// console.log(arr1)

// //?unshift()........adds the elements at the beginning of the array
// arr1.unshift("BEFORE","BEFORE2")
// console.log(arr1)

// //?Shift()...... removes the element at the beginning of the array
// arr1.shift()
// console.log(arr1)



//? to string()
// let arr=["something","Nothing","anything","enough"]
// console.log(arr)
// console.log(typeof arr)
// let converted = arr.toString()
// console.log(converted)

// //? at()
// let arr1= ["something","Nothing","anything","enough"]
// console.log(arr1[1])
// console.log(arr1.at(1))
// console.log(arr1.at(4))
// console.log(arr1.at(0))
// console.log(arr1.at(-1))

//? concat()

// let arr2= ["something","Nothing","anything","enough"]
// let arr3=["sam","jam","dam","ram"]
// let arr4=["haii","good morning"]
// console.log(arr2)
// console.log(arr3)

// //? combining single dimensional array

// let newCombinedArray1 =arr2.concat(arr3)
// console.log(newCombinedArray1)


// //? combining multiple arrays
// let newCombinedArray2=arr4.concat(arr3,arr2)
// console.log(newCombinedArray2)

// //?Combined array elements  directly

// let newCombinedArray3 =arr4=arr4.concat("enjoyyy")
// console.log(newCombinedArray3)


//? Flat()

// let arr=[1,2,3,4,[5,[6,[7,[8,[9,[10]]]]]]]
// console.log(arr)

// console.log(arr.flat())
// console.log(arr.flat(1))
// console.log(arr.flat(2))
// console.log(arr.flat(3))
// console.log(arr.flat(Infinity))

// //?slice (startindex,endindex)

// let arr1 =["idli","vada","dosa","Roti"]
// console.log(arr1.slice(1))
// console.log(arr1.slice(1,3))
// console.log(arr1.slice(1,1))
// console.log(arr1.slice(-3,-1))
// console.log(arr1.slice(-1,-3))

// //? Doesnot affect the oroginal array

// console.log(arr1)


//?Splice() (startindex,deletecount,values to be inserted)

// let arr1 =["idli","vada","dosa","Roti"]
// console.log(arr1.splice(1,1))
// console.log(arr1)

// let arr =["idli","vada","dosa","Roti"]
// console.log(arr.splice(1,1,"samosa"))
// console.log(arr)

// let arr2 =["idli","vada","dosa","Roti"]
// console.log(arr2.splice(1,1,"samosa","kachori"))
// console.log(arr2)

// let arr3 =["idli","vada","dosa","Roti"]
// console.log(arr3.splice(-1,2))  //! it will delete the value from left to right
// console.log(arr3)



// let ar1=["something","anything","nothing","everything","enough"]

// let newar1=ar1.splice(1,2)
// console.log(newar1)
// console.log(ar1)

// ar1.splice(0,3,"one","two")
// console.log(ar1)


// ar1.splice(-2,0,"Lastt")
// console.log(ar1)



//? Delete 

// let arr1 =["idli","vada","dosa","Roti"]
// console.log(arr1)
// delete arr1[2]
// delete arr1[3]
// delete arr1[1]
// console.log(arr1)

// //? is Array()

// let arr=[1,2,3,4,5]
// let arr2= new Array("sam","ram","dam")
// let str="HTML"
// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(str))


// let arr1=["something","anything","nothing","shravya stupid"]
// let str="samreen"
// let arr2=new Array("happy","new","year")

// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(str))


// //?includes (searchElement,startindex)

// let arrr=[1,2,3,4,5,6,7,8]
// console.log(arrr.includes(1))
// console.log(arrr.includes(10))
// console.log(arrr.includes(4))
// console.log(arrr.includes(2,3))



// let arr1=["something","anything","nothing","shravya stupid"]
// console.log(arr1.includes("anything"))
// console.log(arr1.includes("any"))
// console.log(arr1.includes("something"))
// console.log(arr1.includes("anything",2))
// console.log(arr1.includes("anything",1))
// console.log(arr1.includes("anything",-1))
// console.log(arr1.includes("anything",-4))

//? reverse()

// let arr=["something","anything","nothing","shravya stupid"]
// console.log(arr)
// let newarrayreversed =arr.reverse()
// console.log(newarrayreversed)


// //?Sort()
// let arr2=[2,1,4,6,8,3]
// console.log(arr2)
// console.log(arr2.sort())

// let arr3=[200000000,2,100,1,3,8,9,0,7]               //! if it having multiple greater numbers it will check only first one
// console.log(arr3)
// console.log(arr3.sort())


// let ary=[9,2,7,5,8,1,10,100]
// console.log(ary)
// let newary=ary.sort()
// console.log(newary)

//?from()
// let str="samreen"
// let arr=[1,2,3,4,5,6]

// console.log(Array.from(str))
// console.log(typeof str)
// console.log(Array.from(arr))
// console.log(typeof arr)

// //? indexoff() it will start searching from left to right

// let arr1=["chraminar","tank bund","secratrait","dlf","hitech city"]
// console.log(arr1.indexOf("hitech city"))
// console.log(arr1.indexOf("Hitech city")) // if the element is not present it will return -1
// console.log(arr1.indexOf("Golconda fort")) 
// console.log(arr1.indexOf("charminar",2))
// console.log(arr1.indexOf("charminar",-1))


// //?last indexof()it will start searching right to left 

// let arr2=["chraminar","tank bund","secratrait","dlf","hitech city"]
// console.log(arr2.lastIndexOf("hitech city"))
// console.log(arr2.lastIndexOf("Hitech city")) // if the element is not present it will return -1
// console.log(arr2.lastIndexOf("Golconda fort")) 
// console.log(arr2.lastIndexOf("charminar",2))
// console.log(arr2.lastIndexOf("charminar",-1))


//!For Each method ()

//*  1) fOR EACH    it cannot return the value

// let arr = ["something","Anything","Nothing","Everything","Enough"]
// arr.forEach((element,index,array)=>{
//     console.log(`The element is ${element} and its index value is ${index}`)
//     console.log(array)

// })

// let newArray = arr.forEach((element)=>{
//     return element
// })
// console.log(newArray)


//* 2)  map()   it will return the value   *  Calls a defined callback function on each element of an array, and returns an array that contains the results.

// let arr1=[1,2,3,4,5,6,7,8]
// arr1.map((ele,ind,array)=>{
//     console.log(`The element is ${ele} and its index is ${ind} and it is from the array ${array}`)
// })


// let newArray=arr1.map((element)=>{
//     return element
// })

// console.log(newArray)


//*  3) Filter()   * it will only take values when the condition is satisfied    *Returns the elements of an array that meet the condition specified in a callback function. 

// let arr=[10,2,5,6,100,4]
// let newArray =arr.filter((ele)=>{
//     return ele>5
// })

// console.log(newArray)

// let newArray2=arr.map((ele)=>{
//     return ele>5
// })
// console.log(newArray2)



//?  4) reduce()   Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// let sum =5;
// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];

// }
// console.log(sum)


// let output=arr.reduce((accumulator,element)=>{
//     return accumulator+=element
// },5)
// console.log(output)


//* 5) some()

// let arr=[10,9,8,4,2,3,1]
// let output=arr.some((element)=>{
//       return element>5
// })
// console.log(output)


// //* 6) every()

// let arr1 =[10,9,8,4,2,3,1]

// let output1=arr.every((ele)=>{
//        return ele>4
// })
// console.log(output1)