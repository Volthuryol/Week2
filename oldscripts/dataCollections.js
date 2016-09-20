var classNames = []; //Empty arry


var myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 1; i <= 10; i++){
//   myNumber.push(i);
  
// }

//.pop takes off the last .push

// for(var x in myNumber ){
//   console.log("number: " + myNumber[x]);
// }
// var i = 0;
// while(i < 100){
//   i = i + 1;
//   console.log(i)
// }
/*for (var i = 0; i <= 50; i = i + 1){
  if (i == 45){
    console.log("man it's been a short week");
  }else{
    console.log(i);
  }
}*/

var total = 0;
for (var i = 0; i < myNumber.length; i++){
  total = total + myNumber[i];
}
console.log(total);
