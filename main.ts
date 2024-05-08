//Excercise#03//
//Name Cases//

//Store a person's name in a variable and then print that person's name in lowercase, uppercase and titlecase.//

let personname: string = "muskan khan";

//lowercase

console.log(personname.toLowerCase());

//uppercase

console.log(personname.toUpperCase());

//titlecase

let firstletter: string = personname.charAt(0).toUpperCase();
let restletter: string = personname.slice(1).toLowerCase();

let titlecase = firstletter + restletter
console.log(titlecase);

