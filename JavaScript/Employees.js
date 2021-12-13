class Employess{
    constructor(employess){
        this.employess = employess;
    }
}
function compare(a,b){
    let nameA = a.name, nameB = b.name;
    if(nameA>nameB) return 1;
    if(nameA<nameB) return -1;
    return 0;

}
