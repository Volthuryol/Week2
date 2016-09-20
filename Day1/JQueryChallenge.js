$(function(){
  $("#add").click(function() {
    var superhero = $("#superhero").val();
    
    if (!superhero) return; 
    $("#list").append("<li>" + superhero + "</li>" + "<button class='remove'>(x)</button>");
    $("#superhero").val("");
    $(".remove").click(function(ev){
      $(ev.target).parent().fadeOut();
    });
  });
});
