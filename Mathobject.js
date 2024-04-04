
//! Math object

console.log(Math)

console.log(Math.PI)  //?Pi. This is the ratio of the circumference of a circle to its diameter.

console.log(Math.max(19,20,3,4,5,6))  //?Returns the larger of a set of supplied numeric expressions.

console.log(Math.min(2,3,4,1,5,6,7,1))  //?Returns the smaller of a set of supplied numeric expressions.

console.log(Math.pow(2,3))  //?Returns the value of a base expression taken to a specified power.

console.log(Math.round(3.5))  //?Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.round(3.2))

console.log(Math.trunc(4.9))   //?Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.

console.log(Math.trunc(-1.2))


//?Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
//?For example, the absolute value of -5 is the same as the absolute value of 5.


console.log(Math.abs(-3))
 
console.log(Math.abs(-3.3))


console.log(Math.floor(75.6))   //?Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.floor(75.9999))

console.log(Math.ceil(1.1))  //?Returns the smallest integer greater than or equal to its numeric argument

console.log(Math.ceil(1.001))

console.log(Math.sign(10))    //?Returns the sign of the x, indicating whether x is positive, negative or zero.

console.log(Math.sign(-20))

console.log(Math.sign(0))

console.log(Math.sqrt(4))  //?Returns the square root of a number.

console.log(Math.sqrt(81))

console.log(Math.sqrt(625))

console.log(Math.cbrt(125)) //?Returns an implementation-dependent approximation to the cube root of number.

console.log(Math.cbrt(27))




let convertToDegree=Math.PI/180

console.log(Math.sin(0*convertToDegree))
console.log(Math.sin(30*convertToDegree))
console.log(Math.sin(90*convertToDegree))


console.log(Math.round(Math.cos(0*convertToDegree)))
console.log(Math.cos(30*convertToDegree))
console.log((Math.round(Math.cos(90*convertToDegree))))

console.log(Math.tan(30*convertToDegree))
console.log(Math.tan(90*convertToDegree))
console.log(Math.tan(0*convertToDegree))


//?Returns a pseudorandom number between 0 and 1
console.log(Math.floor(Math.random()*11))


