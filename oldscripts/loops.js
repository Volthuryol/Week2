// for (var day = 1; day <= 3; day++){
//   console.log("have a great day");
// }
// for (var num = 10; num >= 1; num--){
//   console.log("lift off in: " + num);
// }
// variables are separate so you could use the same variable such as day and day for both and there wouldn't be a conflict.
// for(var num = 100; num >= 0; num = num - 10) {
//   console.log(num);
// }
// for(var num = 100; num >= 0; num = num - 5) {
//   console.log(num);
// }

// var zero = 0
// while (zero > 50){
//   zero = zero++ ;
//   console.log ("zero ") + zero;
// }
// var x = 0;
// do {
//   x++
//   console.log("the number is: " + x);
// }while (x < 10);


// for (var num = 100; num >= 1; num = num - 25) {
//   if (num == 50) {
//     console.log("Halfway there!")
//   } else {
//     console.log(num)
//   }
// }

// using a for loop, write out "Funnel cakes have got to go" vertically

var y = "Funnel cakes have got to go";
// for (x = 0; x < y.length; x++) {
//   console.log(y[x]);
// }

for(var letter in y){
  console.log(y[letter]); // this is equivalent of the code sequence above in lines 37-40
} 