$(function(){
 var darkSkyKey = "13fc88504c837e8f47ca908c7f4d4628";
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.9081059,-82.65828309999999", { dataType: "jsonp"}).done(function(data) {
    var temp = data.currently.temperature;
    var maxTemp = data.daily.data[0].temperatureMax;
    var minTemp = data.daily.data[0].temperatureMin;
    var summary = data.daily.data[0].summary
    $(".absolute").append("<li>" + temp + "</li>");
  }) 
});