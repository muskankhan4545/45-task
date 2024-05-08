//Excercise#03//
//Name Cases//
//Store a person's name in a variable and then print that person's name in lowercase, uppercase and titlecase.//
var personname = "muskan khan";
//lowercase
console.log(personname.toLowerCase());
//uppercase
console.log(personname.toUpperCase());
//titlecase
var firstletter = personname.charAt(0).toUpperCase();
var restletter = personname.slice(1).toLowerCase();
var titlecase = firstletter + restletter;
console.log(titlecase);