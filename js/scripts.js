

$(document).ready(function(){

  // question: help I have a problem with
  $("#option-choose-classes").click(function() {
    $("#panel-choose-classes").slideDown("slow");
    $("#panel-current-class").slideUp("slow"); 

    $("#panel-class-external").slideUp("slow"); 
    $("#panel-class-content").slideUp("slow");
    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
    $("#panel-gir-yes").slideUp("slow"); 
    $("#panel-gir-no").slideUp("slow"); 

    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 


  });
  $("#option-current-class").click(function() {
    $("#panel-current-class").slideDown("slow");
    $("#panel-choose-classes").slideUp("slow"); 

    // ugly, but need to pull up all
    $("#panel-semester").slideUp("slow"); 
    $("#panel-longterm").slideUp("slow"); 
    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow"); 
  });  

  // question: choose classes long term or for semester?
  $("#option-longterm").click(function() {
    $("#panel-longterm").slideDown("slow");
    $("#panel-semester").slideUp("slow"); 

    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow"); 

  });

  $("#option-semester").click(function() {
    $("#panel-semester").slideDown("slow");
    $("#panel-longterm").slideUp("slow"); 
  });  

  // question: semester classes—-schedule vs. place to start
   $("#option-semester-schedule").click(function() {
    $("#panel-semester-schedule").slideDown("slow");
    $("#panel-semester-start").slideUp("slow"); 
  });
  $("#option-semester-start").click(function() {
    $("#panel-semester-start").slideDown("slow");
    $("#panel-semester-schedule").slideUp("slow"); 
  });   

  // question: class content vs. external
  $("#option-class-content").click(function() {
    $("#panel-class-content").slideDown("slow");
    $("#panel-class-external").slideUp("slow"); 

    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 


  });
  $("#option-class-external").click(function() {
    $("#panel-class-external").slideDown("slow");
    $("#panel-class-content").slideUp("slow"); 

    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
    $("#panel-gir-yes").slideUp("slow"); 
    $("#panel-gir-no").slideUp("slow"); 
  });     

  // question: gir -- y vs. n
  $("#option-gir-yes").click(function() {
    $("#panel-gir-yes").slideDown("slow");
    $("#panel-gir-no").slideUp("slow"); 

    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
  });


  $("#option-gir-no").click(function() {
    $("#panel-gir-no").slideDown("slow");
    $("#panel-gir-yes").slideUp("slow"); 


  });     

  // question: writing -- y vs. n
  $("#option-writing-yes").click(function() {
    $("#panel-writing-yes").slideDown("slow");
    $("#panel-writing-no").slideUp("slow"); 
  });
  $("#option-writing-no").click(function() {
    $("#panel-writing-no").slideDown("slow");
    $("#panel-writing-yes").slideUp("slow"); 
  }); 

  // question: external factors
  $("#option-external-professor").click(function() {
    $("#panel-external-professor").slideDown("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 
  });
  $("#option-external-shortterm").click(function() {
    $("#panel-external-shortterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-longterm").slideUp("slow"); 
  }); 
  $("#option-external-longterm").click(function() {
    $("#panel-external-longterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    
    
  }); 
});