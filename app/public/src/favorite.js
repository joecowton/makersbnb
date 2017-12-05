$(document).ready(function($){

  $('.favorite-button').click(function(){
    $.post('/favorite/new')
  })

  $('.book').click(function(){
    // $.post('/favorite/new')
    console.log("hello" )
  })
});
