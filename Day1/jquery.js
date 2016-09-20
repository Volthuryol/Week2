// $ = jQuery;
//$function() works the same as below
$(document).ready(function () {
  $("#para").click(function () {
    // $("#para").fadeOut('slow','linear'); works the same.
    $(this).fadeOut('slow', 'linear');
    //ev.target == this have to put the event in the param of the function ev == event can be any variable
  });
  //h3 {text-decoration, underline;}
  $("h3")
    .css("text-decoration", "underline")
    .css("font-style", "italic")
  //$("ul li:first-child") works the same as below
  $("ul").find("li:first-child")
    .css("color", "red");
  $("#add").click(function (ev) {
    //apend adds to the end
    $("ul").append('<li> Item 2 <button class = "remove"> Remove </button> </li>');
    //prepend adds to the beginning
  });
  $(".remove").click(function (ev) {
    console.log(ev);
    $(ev.target).parent().fadeOut();
  })
  $("#name").blur(function (ev) {
    // var name = $("#name").val();
    var name = $(ev.target).val();
    alert("Hello, " + name);
  });
  //stop here
});
//Here be dragons