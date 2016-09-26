 var google = "https://maps.googleapis.com/maps/api/geocode/json?address=";
 var darkSkyKey = "13fc88504c837e8f47ca908c7f4d4628/";
$(function(){
  $("#submit").click(function(location){
    var zip = $("#zip").val();
    if (!zip) return;
    console.log(zip);

  $.ajax(google + zip + "&key=AIzaSyDGPYE8ZkdO4QmSnUPmkuSVVMDwf4L1Luk" ).done(function(data){
     var googleLat = data.results[0].geometry.location.lat;
     var googleLng = data.results[0].geometry.location.lng;
     var place = data.results[0].formatted_address;
    //  console.log(googleLat);
    //  console.log(googleLng);
    //  console.log(data);

   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + googleLat + "," + googleLng, { dataType: "jsonp"}).done(function(data) {
    var temp = data.currently.temperature;
    var maxTemp = data.daily.data[0].temperatureMax;
    var minTemp = data.daily.data[0].temperatureMin;
    var summary = data.daily.data[0].summary;
    var rain = data.daily.data[0].precipProbability;
    $(".absolute").append("<li>" + place + "</li>");
    $(".absolute").append("<li>" + "Temperature: " + temp + "</li>");
     $(".absolute").append("<li>" + "Max Temperature: " + maxTemp + "</li>");
      $(".absolute").append("<li>" + "Min Temperature: " + minTemp + "</li>");
      $(".absolute").append("<li>" + "Rain Chance: " + rain + "</li>");
       $(".absolute").append("<li>" + "summary: " + summary + "</li>");
       
 function bckgrnd(image){
   var img = $(".card").html
   if(summary = clear-day){ 
     return "clear-day.jpg";
 }else if(summary = clear-night){ 
   return "clear-night.jpg";
 }else if(summary = rain){
   return "rain.jpg";
 }else if(summary = snow){
   return "snow.jpg";
 }else if(summary = sleet){
   return "sleet.jpg";
 }else if(summary = wind){
   return "wind.jpg";
 }else if(summary = fog){
   return "fog.jpg";
 }else if(summary = cloudy){
   return "cloudy.jpg";
 }else if(summary = partly-cloudy-day){
   return "partly-cloudy-day.jpg";
 }else if(summary = partly-cloudy-night){
   return "partly-cloudy-night.jpg";
 }else if(summary = hail){
   return "hail.jpg";
 }else if(summary = thunderstorm){
   return "thunderstorm.jpg";
 }else if(summary = tornado){
   return "tornado.jpg";
 }else if(!img){ return;}

 var imgData = bckgrnd(image);
 $(".card").append(imgData);

}
   })
  })
})

});



function generateCard(personInfo) {
            // Insert the original HTML into a string by reading from the div. I wrote the HTML first, tested it looked right, 
            // then grabbed it as a string by asking jQuery to go get me the HTML from the DOM.
            var template = $("#templateDiv").html(); // gets the html from inside the templateDiv div

            // Swap out the values.
            template = template.replace("@@IMGURL@@", personInfo.profilePhoto);
            template = template.replace("@@NAME@@", personInfo.name + "<br />" + personInfo.age);
            template = template.replace("@@LOCATION@@", personInfo.cityState);

            // Return the new HTML.
            return template;
        }

        function testGenerateCard() {
            var sampleData = {
                name: "Randy Unicorn",
                cityState : "Lollipopland, MN",
                age : "42",
                profilePhoto: "http://1.bp.blogspot.com/_IIRXllB6WyY/S_2V0-Pa4WI/AAAAAAAAA5k/jQRe4gHBzJA/s1600/lego_unicorn.jpg"
            };

            // The divs will automatically wrap because of Bootstrap knowing it's a col-md-3.
            var html = generateCard(sampleData);
            $("#cards").append(html);

        }
