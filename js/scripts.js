

$(document).ready(function(){
  $("#option1").click(function(){
    $("#panel1").slideDown("slow");
    $("#panel2").slideUp("slow"); 
  });
  $("#option2").click(function(){
    $("#panel2").slideDown("slow");
    $("#panel1").slideUp("slow"); 

  });  
});