$(document).ready(function(){

  venuesGet()

  function venuesGet() {
    var index = 1
    $.get('/venue/all', function(data_all){
      data_all.forEach(function(venue){
      eachVenue(venue, index)
      index ++;
      })
    })
  }

  function eachVenue(venue, index) {
    $('#venues').append("<div id=" + index + " class='container' style='margin-top: 20;' </div>")
    $('#'+index).append("<div class ='pictures'><f href=\'#\'><img style='width:240px; height:160px; border-radius:10px' src=" + venue.pictures + "></f></div>")
    $('#'+index).append("<div class ='title'>" + venue.title +"</div>")
    $('#'+index).append("<div class ='address'>" + venue.address +"</div>")
    $('#'+index).append("<div class ='price'>" + venue.price +"</div>")
    $('#'+index).append("<div class ='description'>" + venue.description +"</div>")
    $('#'+index).append("<div class ='user'>" + venue.user +"</div>")
  }
});
