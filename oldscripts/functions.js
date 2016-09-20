// function greetings(){                   //if name is put in () have to change argument with what you would like to replace what
//   console.log("Weekend is near o.0");  //is in the ().
// }
// greetings();
// greetings("Caden"); //is not declared so doesn't change anything.


// function week(statement){         //example of arguments working
//   console.log("Hello " , statement);
// }
// week("Caden");


// var x = add(928, 156);  //don't have to assign a var can do console.log(add(928, 156)); and it would work the same.
// function add(a, b) {
//   return a + b;
// }
// console.log(x);


// function isEven(num) {
//   return num % 2 == 0; 
// }
// var result = isEven(47);
// console.log(result ? "Even" : "Odd"); //can only use this for either or answer cannot use it for multiple else if statements.

function smallerNum(c,d){
  console.log(c,d)
  if (c < d) {
    return c;
  }else {
    return d;
  }
}
var min = smallerNum(Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1);
console.log(min);

// var arry = [10,20,30,40]
// function avgArry(arry){
//   var totalArry = 0;
//   for( var i = 0; i < arry.length; i++){
//     totalArry += arry[i];
//   }
//   return totalArry / arry.length;
// }
// var avg = avgArry(arry);
// console.log(avg);

// function reverse(str) {
//   return str.split("").reverse().join(""); //silver chalenge (completed)
// }
// var h = reverse("Kentucky");
// console.log(h);

//gold chalenge (completed)
// var array = [8,6,7,5,3,0,9]
// function sort(array){
//   return array.sort();
// }
// var sortArray = sort(array);
// console.log(sortArray);