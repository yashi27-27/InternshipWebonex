//1. Declare all the variables in above form without initialising and print their value.

let Name;
let email;
let age;
let address;
let phoneNumber;
let gender;
let isMarried;
console.log(Name,age,address,phoneNumber,gender,isMarried);

//2. After printing their value assign them as null and print it again.
Name= null;
email=null;
age=null;
address=null;
phoneNumber=null;
gender=null;
isMarried=null;

console.log(Name,age,address,phoneNumber,gender,isMarried);

//3. Declare an object called employeeDetails and add all the above variables to this object now as keys with value as null and print this object.
const employeeDetails=new Object()
employeeDetails.name=null
employeeDetails.email=null
employeeDetails.age=null
employeeDetails.add=null
employeeDetails.phone=null
employeeDetails.married=null

console.log(employeeDetails.name);
console.log(employeeDetails.email);
console.log(employeeDetails.age);
console.log(employeeDetails.add);
console.log(employeeDetails.phone);
console.log(employeeDetails.married);

