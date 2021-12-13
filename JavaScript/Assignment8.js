//1. Create a function that takes a number and prints all even numbers upto that number

const getevenNumbers =(n) =>{
    for(let i=0;i<=n;i++){
        if(i%2==0)
            console.log(i);
    }
}
getevenNumbers(10);

//2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const empolyeeArray = [
    {
    name: 'Yashi',
    age: 20,
    email:"abc@gmail.com",
    address:"Indore",
    gender:"female",
    martialStatus:false
},
{
    name: 'Chhaya',
    age: 40,
    email:"bcd@gmail.com",
    address:"Bhopal",
    gender:"female",
    martialStatus:false
},
{
    name: 'Samir',
    age: 45,
    email:"efg@gmail.com",
    address:"India",
    gender:"male",
    martialStatus:false
},
{
    name: 'Purabi',
    age: 50,
    email:"hab@gmail.com",
    address:"Ujjain",
    gender:"female",
    martialStatus:true
},
{
    name: 'Ananya',
    age: 60,
    email:"c00@gmail.com",
    address:"Indore",
    gender:"female",
    martialStatus:true
}
]
function emp (empArray,ageNumber){
    return employeeArray.filter(empArray => emparr.age < ageNumber);
}
console.log(emp(emparr,40));

//3.3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.

const customSort = (employeeArray, attribute) => {
  const compare = (a, b) => {
    switch (typeof a[attribute]) {
      case "number":
        return a[attribute] - b[attribute];
      case "boolean":
        return Number(b[attribute]) - Number(a[attribute]);
      default:
        if (a[attribute] > b[attribute]) return 1;
        if (a[attribute] < b[attribute]) return -1;
        return 0;

    };

customSort(employeeArray,name);
customSort(employeeArray,age);

