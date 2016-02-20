

$(document).ready(function(){

  // QUESTION: help I have a problem with

  // select 'choose classes'
  $("#option-choose-classes").click(function() {
    $("#panel-choose-classes").slideDown("slow");
    $("#option-current-class").addClass("not_selected_btn");
    $("#option-choose-classes").removeClass("not_selected_btn");

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

    $("#option-class-external").removeClass("not_selected_btn");
    $("#option-class-content").removeClass("not_selected_btn"); 
  });

  // select 'current class'
  $("#option-current-class").click(function() {
    $("#panel-current-class").slideDown("slow");
    $("#option-choose-classes").addClass("not_selected_btn");
    $("#option-current-class").removeClass("not_selected_btn");
    
    // slide up all 'choose classes' panels
    $("#panel-choose-classes").slideUp("slow"); 
    $("#panel-semester").slideUp("slow"); 
    $("#panel-longterm").slideUp("slow"); 
    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow"); 

    // remove all previous selections
    $("#option-longterm").removeClass("not_selected_btn");
    $("#option-semester").removeClass("not_selected_btn");
  });  


  // QUESTION: choose classes long term or for semester?

  // select 'long term'
  $("#option-longterm").click(function() {
    $("#panel-longterm").slideDown("slow");
    $("#option-longterm").removeClass("not_selected_btn");
    $("#option-semester").addClass("not_selected_btn");
    
    // slide up all 'semester' panels
    $("#panel-semester").slideUp("slow"); 
    $("#panel-semester-schedule").slideUp("slow"); 
    $("#panel-semester-start").slideUp("slow");

    $("#option-semester-schedule").removeClass("not_selected_btn");
    $("#option-semester-start").removeClass("not_selected_btn");  
  });

  // select 'semester'
  $("#option-semester").click(function() {
    $("#panel-semester").slideDown("slow");
    $("#option-longterm").addClass("not_selected_btn");
    $("#option-semester").removeClass("not_selected_btn");

    // slide up long-term panels
    $("#panel-longterm").slideUp("slow"); 

    $("#option-semester-schedule").removeClass("not_selected_btn");
    $("#option-semester-start").removeClass("not_selected_btn"); 
  });  

  // QUESTION: schedule vs. place to start?

  // select 'schedule'
   $("#option-semester-schedule").click(function() {
    $("#panel-semester-schedule").slideDown("slow");
    $("#panel-semester-start").slideUp("slow"); 

    $("#option-semester-schedule").removeClass("not_selected_btn");
    $("#option-semester-start").addClass("not_selected_btn");
  });

  // select 'place to start'
  $("#option-semester-start").click(function() {
    $("#panel-semester-start").slideDown("slow");
    $("#panel-semester-schedule").slideUp("slow");
    $("#option-semester-schedule").addClass("not_selected_btn");
    $("#option-semester-start").removeClass("not_selected_btn"); 
  });   


  // QUESTION: class content vs. external

  // select 'content'
  $("#option-class-content").click(function() {
    $("#panel-class-content").slideDown("slow");
    $("#option-class-external").addClass("not_selected_btn");
    $("#option-class-content").removeClass("not_selected_btn"); 

    // slide up all 'external' panels
    $("#panel-class-external").slideUp("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 

    $("#option-gir-no").removeClass("not_selected_btn");
    $("#option-gir-yes").removeClass("not_selected_btn");
    $("#option-external-longterm").removeClass("not_selected_btn");
    $("#option-external-shortterm").removeClass("not_selected_btn");
    $("#option-external-professor").removeClass("not_selected_btn");
  });

  // select 'external'
  $("#option-class-external").click(function() {
    $("#panel-class-external").slideDown("slow");
    $("#option-class-external").removeClass("not_selected_btn");
    $("#option-class-content").addClass("not_selected_btn");

    // slide up all 'content' panels
    $("#panel-class-content").slideUp("slow"); 
    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 
    $("#panel-gir-yes").slideUp("slow"); 
    $("#panel-gir-no").slideUp("slow"); 

    $("#option-gir-no").removeClass("not_selected_btn");
    $("#option-gir-yes").removeClass("not_selected_btn");
    $("#option-external-longterm").removeClass("not_selected_btn");
    $("#option-external-shortterm").removeClass("not_selected_btn");
    $("#option-external-professor").removeClass("not_selected_btn");
  });     

  // QUESTION: gir or not gir?

  // select 'yes gir'
  $("#option-gir-yes").click(function() {
    $("#panel-gir-yes").slideDown("slow");
    $("#option-gir-no").addClass("not_selected_btn");
    $("#option-gir-yes").removeClass("not_selected_btn"); 
    
    // slide up all 'not gir' panels
    $("#panel-gir-no").slideUp("slow"); 
    $("#panel-writing-yes").slideUp("slow"); 
    $("#panel-writing-no").slideUp("slow"); 

    $("#option-writing-yes").removeClass("not_selected_btn");
    $("#option-writing-no").removeClass("not_selected_btn"); 
  });

  // select 'not gir'
  $("#option-gir-no").click(function() {
    $("#panel-gir-no").slideDown("slow");
    $("#panel-gir-yes").slideUp("slow");

    $("#option-gir-no").removeClass("not_selected_btn");
    $("#option-gir-yes").addClass("not_selected_btn");

    $("#option-writing-yes").removeClass("not_selected_btn");
    $("#option-writing-no").removeClass("not_selected_btn"); 
  });     

  // QUESTION: writing or not writing?

  // select 'yes writing'
  $("#option-writing-yes").click(function() {
    $("#panel-writing-yes").slideDown("slow");
    $("#panel-writing-no").slideUp("slow"); 

    $("#option-writing-yes").removeClass("not_selected_btn");
    $("#option-writing-no").addClass("not_selected_btn"); 
  });

  // select 'not writing'
  $("#option-writing-no").click(function() {
    $("#panel-writing-no").slideDown("slow");
    $("#panel-writing-yes").slideUp("slow"); 

    $("#option-writing-yes").addClass("not_selected_btn");
    $("#option-writing-no").removeClass("not_selected_btn");
  }); 

  // QUESTION: type of external factor?

  // select 'professor problem'
  $("#option-external-professor").click(function() {
    $("#panel-external-professor").slideDown("slow");
    $("#panel-external-shortterm").slideUp("slow"); 
    $("#panel-external-longterm").slideUp("slow"); 

    $("#option-external-longterm").addClass("not_selected_btn");
    $("#option-external-shortterm").addClass("not_selected_btn");
    $("#option-external-professor").removeClass("not_selected_btn");
  });

  // select 'short term problem'
  $("#option-external-shortterm").click(function() {
    $("#panel-external-shortterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-longterm").slideUp("slow"); 

    $("#option-external-longterm").addClass("not_selected_btn");
    $("#option-external-shortterm").removeClass("not_selected_btn");
    $("#option-external-professor").addClass("not_selected_btn");
  }); 

  // select 'long term problem'
  $("#option-external-longterm").click(function() {
    $("#panel-external-longterm").slideDown("slow"); 
    $("#panel-external-professor").slideUp("slow");
    $("#panel-external-shortterm").slideUp("slow");

    $("#option-external-longterm").removeClass("not_selected_btn");
    $("#option-external-shortterm").addClass("not_selected_btn");
    $("#option-external-professor").addClass("not_selected_btn");
  }); 
});