// - Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
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

function checkArray(employees){
    return new Promise((resolve,reject) => {
        if (employees != undefined)
        resolve(employees);
        else 
        reject();
        
    } )
}
async function printEmpolyee(employees) {
    try{
        const result =   await checkArray (employees);
        console.log(result);
    }
    catch(e){
            console.error(arraynotfound);
    }
}
