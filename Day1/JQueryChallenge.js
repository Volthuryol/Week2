$function(){
  $("#add").click(function(ev) {
    var superhero = $("#superhero").val();

    if (!superhero) return; 
    $("#list").append("<li>" + superhero + "</li>");

    $("#superhero").val(" ");
  });
};