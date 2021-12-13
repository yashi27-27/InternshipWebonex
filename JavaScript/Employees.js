class Employees {
    constructor(listOfEmployees) {
      this.listOfEmployees = listOfEmployees;
    }
    const customSort = (attribute) => {
        const compare = (a, b) => {
            if (typeof a[attribute] === "number") {
                return a[attribute] - b[attribute];
            } else if (a[attribute] > b[attribute]) {
                return 1;
            } else if (a[attribute] < b[attribute]) {
                return -1;
            }
            return 0;
            };
        }
        let newArray = this.listOfEmployees.sort(compare);
         console.log(newArray);
        filterByAge(age) {
            let newArray = [];
            newArray = this.listOfEmployees.filter((employee) => {
                return employee.age < age;
            }
        }
        module.exports = Employees;
