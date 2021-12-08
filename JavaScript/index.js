//1. Find sum of first 10 natural numbers
let i = 1;
let sum = 0;
for(;i<10;i++){
    sum += i;
}


console.log("sum of natural numbers"+sum);

//2. Print fibbonaci series upto first 10 numbers.
let n1 = 0;
let n2 = 1;
let next;
console.log(n1);
console.log(n2);
for(let i=2;i<10;i++){
    next = n1+n2;
    console.log(next)
    n1 = n2;
    n2 = next;
}
//3. Print all the keys and values of employee object used in first problem
const emplloyeeDetails = {
    name:"Yashi",
    email:"yashi@gmail.com",
    age:20,
    address:"Indore",
    phoneNo:9899899899,
    martialStatus:false
}
for(let x in emplloyeeDetails){
    console.log(x,emplloyeeDetails[x]);
}