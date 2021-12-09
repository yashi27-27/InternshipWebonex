//1. Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
const employee ={
    name:"Yashi",
    email:"abc@gmail.com",
    age:20,
    address:"Indore",
    phoneNumber:"8888888888",
    gender:"Male",
    isMarried:false,
    salary:592000
};
try{
    throw employee.age/null;
}catch(e){
    let result = employee.age/2;
    console.log(result);
}
//2.Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function
let a;
function getNumber(m, n) {
    for (let i = m; i <= n; i++) {
        a = setInterval(() => {
            console.log(i);
        }, 100);
    }
}
clearInterval(a);
getNumber(4,7);