$(document).ready(function(){
   $('#large_box').click(function(){
      alert('you clicked the big box!');
      $('#large_box').css("background-color",random_color());
      $('#large_box').children().css("background-color",random_color());
//comment this out when you have figured out what event.stopPropagation is used for
   })
   $('.side_box').click(function(event){
       $(this).siblings().css("background-color",random_color());
         event.stopPropagation();
   })
   $('.middle_box').click(function(event){
     $('#large_box').css("background-color",random_color());
      event.stopPropagation();
   })
});
