const Employees = require("./Employee");
const employeeArray = [ 
{
    name:"Yashi",
    email:"abc@gmail.com",
    age:20,
    address:"Indore",
    phoneNumber:"8888888888",
    gender:"Male",
    isMarried:false,
    salary:592000
},
{name:"ashi",
    email:"abc@gmail.com",
    age:20,
    address:"Indore",
    phoneNumber:"8888888888",
    gender:"Male",
    isMarried:false,
    salary:592000
},
{
    name:"roopanshi",
    email:"abc@gmail.com",
    age:20,
    address:"Indore",
    phoneNumber:"8888888888",
    gender:"Male",
    isMarried:false,
    salary:592000
}
]
const obj = new Employee(employeeArray);
let sortedArray = obj.sortEmployees("name");
console.log(sortedArray);

let filteredArray = obj.filterByAge(45);
console.log(filteredArray);