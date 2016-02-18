

$(document).ready(function(){

  // QUESTION: help I have a problem with

  // select 'choose classes'
  $("#option-choose-classes").click(function() {
    $("#panel-choose-classes").slideDown("slow");

    // slide up all current class panels
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

  // select 'current class'
  $("#option-current-class").click(function() {
    $("#panel-current-class").slideDown("slow");
    
    // slide up all 'choose classes' panels
    $("#panel-choose-classes").slideUp("slow"); 
    $("#panel-semester").slideUp("slow"); 
    $("#panel-longterm").slideUp("slow"); 
    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow"); 
  });  


  // QUESTION: choose classes long term or for semester?

  // select 'long term'
  $("#option-longterm").click(function() {
    $("#panel-longterm").slideDown("slow");
    
    // slide up all 'semester' panels
    $("#panel-semester").slideUp("slow"); 
    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow"); 
  });

  // select 'semester'
  $("#option-semester").click(function() {
    $("#panel-semester").slideDown("slow");

    // slide up long-term panels
    $("#panel-longterm").slideUp("slow"); 
  });  

  // QUESTION: schedule vs. place to start?

  // select 'schedule'
   $("#option-semester-schedule").click(function() {
    $("#panel-semester-schedule").slideDown("slow");
    $("#panel-semester-start").slideUp("slow"); 
  });

  // select 'place to start'
  $("#option-semester-start").click(function() {
    $("#panel-semester-start").slideDown("slow");
    $("#panel-semester-schedule").slideUp("slow"); 
  });   


  // QUESTION: class content vs. external

  // select 'content'
  $("#option-class-content").click(function() {
    $("#panel-class-content").slideDown("slow");

    // slide up all 'external' panels
    $("#panel-class-external").slideUp("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 
  });

  // select 'external'
  $("#option-class-external").click(function() {
    $("#panel-class-external").slideDown("slow");

    // slide up all 'content' panels
    $("#panel-class-content").slideUp("slow"); 
    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
    $("#panel-gir-yes").slideUp("slow"); 
    $("#panel-gir-no").slideUp("slow"); 
  });     

  // QUESTION: gir or not gir?

  // select 'yes gir'
  $("#option-gir-yes").click(function() {
    $("#panel-gir-yes").slideDown("slow");
    
    // slide up all 'not gir' panels
    $("#panel-gir-no").slideUp("slow"); 
    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
  });

  // select 'not gir'
  $("#option-gir-no").click(function() {
    $("#panel-gir-no").slideDown("slow");
    $("#panel-gir-yes").slideUp("slow"); s
  });     

  // QUESTION: writing or not writing?

  // select 'yes writing'
  $("#option-writing-yes").click(function() {
    $("#panel-writing-yes").slideDown("slow");
    $("#panel-writing-no").slideUp("slow"); 
  });

  // select 'not writing'
  $("#option-writing-no").click(function() {
    $("#panel-writing-no").slideDown("slow");
    $("#panel-writing-yes").slideUp("slow"); 
  }); 

  // QUESTION: type of external factor?

  // select 'professor problem'
  $("#option-external-professor").click(function() {
    $("#panel-external-professor").slideDown("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 
  });

  // select 'short term problem'
  $("#option-external-shortterm").click(function() {
    $("#panel-external-shortterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-longterm").slideUp("slow"); 
  }); 

  // select 'long term problem'
  $("#option-external-longterm").click(function() {
    $("#panel-external-longterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
  }); 
});