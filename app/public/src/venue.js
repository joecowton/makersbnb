$(document).ready(function(){

  venuesGet()

  function venuesGet() {
    var index = 1
    $.get('/venue/all', function(data){
      data.forEach(function(venue){
      eachVenue(venue, index)
      index ++;
      })
    })
  }

  function eachVenue(venue, index) {
    $('#venues').append("<div id=" + index + " class='container'</div>")
    $('#'+index).append("<div class ='name'>" + venue.title +"</div>")
    $('#'+index).append("<div class ='date'>" + venue.price +"</div>")
    $('#'+index).append("<div class ='image'>" + venue.city +"</div>")
  }
});
