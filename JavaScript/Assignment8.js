//1. Create a function that takes a number and prints all even numbers upto that number

let evenNumbers =(n) =>{
    for(let i=0;i<=n;i++){
        if(i%2==0)
            console.log(i);
    }
}
evenNumbers(10);

//2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const emparr = [
    {
    name: 'Yashi',
    age: 20
},
{
    name: 'Chhaya',
    age: 40
},
{
    name: 'Samir',
    age: 45
},
{
    name: 'Purabi',
    age: 50
},
{
    name: 'Ananya',
    age: 60
}
]
function emp (emparr,ageNumber){
    return emparr.filter(emparr => emparr.age < ageNumber);
}
console.log(emp(emparr,40));

//3.3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.
function sortEmployees(emparr, attribute){ 
    emparr.sort( function(first, second){  
                                if(first[attribute] > second[attribute])
                                    return 1;
                                if(first[attribute] < second[attribute])
                                    return -1;
                                return 0;
                                })
}

sortEmployees(emparr, 'name');
console.log(emparr);

