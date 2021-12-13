let emp_file=require('./Empolyees.js')
 
let obj1 = new emp_file.Emp(10, 'ram', "@gmail", 98, "Indore", 5678, "M", false, 500000);
 
let obj2 = new emp_file.Emp(2, 'nimi', "@outlook", 45, "Bhopal", 1234, "F", true, 87854)
 
 
console.log(obj1.sort_by_parameter("address"))