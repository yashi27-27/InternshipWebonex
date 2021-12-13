// Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
const employees =[{
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
} ]

function printEmpolyee() {
    return new Promise((resolve, reject) => {

    if (employees != undefined) {
        console.log(`Employees are present`)
        resolve(employees);
    } else {
        console.log(`Employees are not present`)
        reject();
        }

    } )
}
printEmpolyee().then(function (employeelist){
    return employeelist;
}).then(function(message){
    setTimeout(() => {
        console.log(message);
    },15000)
})


//2.Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
const employeeSort = (a,b) => {
    if(a["name"]<b["name"]) return -1;
    else if(a["name"]>b["name"]) return 1;
    else return 0;
}
function funcEmp() {
    return new Promise((resolve, reject) => {

        if (employees != undefined) {
            console.log(`Employees are present`)
            resolve(employees);
        } else {
            console.log(`Employees are not present`)
            reject();
        }

    })
}

funcEmp().then(function (employeeList) {
    console.log(`sorting employees`);
    return employeeList.sort(employeeSort);
}).then(function (message) {
    setTimeout(() => {
        console.log(message)
    }, 2000)
})