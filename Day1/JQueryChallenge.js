$(function () {
  // $("#add").click(function() {
  //   var superhero = $("#superhero").val();
  //  $("#list").append("<li>" + text + "</li>" + "<button class='remove'>(x)</button>");
  //   if (!superhero) return; 
  //   $("#superhero").val("");
  //   $(".remove").click(function(ev){
  //     $(ev.target).parent().fadeOut();
  //   });
  $("#friend").click(function (ev) {
    console.log(ev.target);
  })
  var friends = "http://rest.learncode.academy/api/learncode/friends";
  $.ajax(friends, { method: "GET" }).done(function (data) {
    var text = data;
    for (var index in text)
      $("#list").append("<li>" + text[index].name + "</li>");  //Asking the function once it is done collecting data from the url to index the information of the data and to show me just the name.
  })
});
