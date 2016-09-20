// if (expression) { statements only run if they are true

// }
var is0n = false;
var peopleHome = false;

if(5 != 5){
  console.log("something");
} else {
  console.log("you're right!");
}

if (is0n && peopleHome){
  console.log("This light is on!");
}else {
  console.log("This light is off!");
}
// &&, || are comparisons. && is and, || is or
var isOff = false;
var securityActive = false;

if (isOff || securityActive){
  console.log("Our home is safe");
}else {
  console.log("call grandma");
}



var bankAccount = 1000;
var debt = 500;
var difference = bankAccount - debt;

console.log("I have $ " + bankAccount + " in my account, and Uncle Sam wants to take: $" + debt + ".");

if (difference >= 500){
  console.log("I am good.");
}else{
  console.log("Oh no!");
}


var timePastOne = true;
var timeBeforeOne = false;

if (timePastOne && timeBeforeOne){
  console.log("Yea time is past one");
}else{
  console.log("No time is'nt past one");
}