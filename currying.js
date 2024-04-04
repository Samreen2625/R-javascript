function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

add(10)(20)(30)


const add1=a=> b=> c=> a+b+c
console.log(add1(10)(20)(30))