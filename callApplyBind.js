
//? Call()

let details1={
    firstName:"Virat",
    lastName:"Kohli",
    fun:function(place,jersey){
        console.log(`My full name is ${this.firstName}${this.lastName} and i am from ${place} and My jersey number is ${jersey}`)
    }
}

details1.fun("Delhi",18)

let details2 ={
    firstName:"Rohit",
    lastName:"sharma",
}
details1.fun.call(details2,"Mumbai",45)


let details3 ={
    firstName:"Shravya",
    lastName:"Reddy",
}
details1.fun.call(details3,"Mumbai",45)


//? Apply()

details1.fun.apply(details2,["Mumbai",45])
details1.fun.apply(details3,["Goa",143])


//? Bind()

let output1=details1.fun.bind(details2,"Mumbai",45)
output1()

let output2=details1.fun.bind(details3 ,"Goa",143)
output2()