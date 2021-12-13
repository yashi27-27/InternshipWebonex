//1. Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.
const obj = require('./employeeList.json');

obj.forEach((e , index) => {
    e["id"] = index+1;
});
/*
//2. Add a function to return list of employees that contains "am" in his name. Add it in separate file and import it to call in another file.*/
import { Name } from './Names';
const employeesNameUpdate = Name(employeesData);
console.log(employeesNameUpdate);

//3.3. Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac
import employeesData from './employeeList.json'
for(const index in employeesData){
    employeesData[index].salary= ((500000*(Math.random()+1))/100000).toFixed(1) + 'Lac';
}

console.log(employeesData);

//
