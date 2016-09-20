//Caden Cheek, Matthew Watson, 9-17-16
//problem1
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var index = numArray.indexOf(27);
console.log(index);
//problem2
console.log(numArray.reduce((a,b) => a+b)); //sum of numArray

//problem3
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(x.pop());

//problem4
function addition(a, b) {
  var r = a + b;
  if (r <= 25) {
    return true;
  } else {
    return false;
  }
}
console.log(addition(2, 23));

//problem5
function sum(c, d) {
  var e = c + d;
  if (e.length > 12) {
    return "Error, string too long.";
  } else {
    return e.length;
  }
}
console.log(sum("Hello ", "Nice to meet you"));

//problem6
var num = 0;
do {
  if(num <= 5) {
    console.log("Very Low Number");
 }else if (num <= 10){
   console.log("Low Number");
 }else if (num <= 15) {
   console.log("High Number");
 }else {
   console.log("Very High Number ")
 }
 num++;
}while(num < 20)