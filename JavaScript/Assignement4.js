// 1.  Take two numbers and perform all the arithmetic operations over them. 
let a=10;
let b=3;
console.log("Add ",a+b)
console.log("Sub ",a-b)
console.log("Multiply ",a*b)
console.log("Divide ",a/b)
console.log("Exponent ",a**b)
console.log("Mod",a%b)
console.log("INcrement ",a++)
console.log("Decremnet",b--)

 //2. Take 2 numbers and 2 strings and perform addition operation on them in same sequence. 

let str1 = "yashi" , str2 = "khandelwal",x=2,y=7;
console.log("Addition of number and strings:",+x+y+str1+str2);

//3. Take 2 Strings and 2 numbers and perform addition operation on them in same sequence

console.log("Addition of number and strings:",str1+str2+x+y);

 // 4. Write an operation to get its result as NaN.  
let invalidNumber = 1 * undefined;
let result = 1;
result += invalidNumber; 
console.log(result)
//// 5. Take 2 boolean letiables as true and false and perform And and Or logical operation over them and print the result as well as operation 
let bool1= true;
let bool2= false;
 let ans1= bool1 && bool2
console.log("Logical AND -> ",bool1 && bool2)
console.log("Logical OR -> ",bool1 || bool2)
//6.ake 2 letiable and compare them using == and ===, such that result of both the comparision operations is not equal.
let x1 = "20"
let y1 = 20
let x2 = 20
let y2 = 20
if(x1===y1)
    console.log("x===y")
else 
    console.log("x1==y1")

if(x2 ===y2 )
    console.log("x2===y2")
else
    console.log("x2==y2")

