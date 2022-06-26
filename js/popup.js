$(document).ready(function() { 
  $('button#go').click( function(event){ 
    event.preventDefault(); 
    $('.popup') 
    .css('display', 'block') 
    .animate({opacity: 1});
    console.log('test');
  });

  $('span#close').click(function(event){
    event.preventDefault();
   $('.popup')
   .css('display', 'none') 
   .animate({opacity: 0});
   console.log('test 2');
 });

});