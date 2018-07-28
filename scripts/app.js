"use strict";
var footer_hidden = true;
var footer_button_text_hidden = "Show the footer";
var footer_button_text_shown = "Hide the footer";
var footer_animation_speed = 1000;
// Funtion that toggle the footer element to apear or vanish
function togle_footer(){
    if(footer_hidden){
        showFooter();
        footer_hidden = false;
    }else{
        hideFooter();
        footer_hidden = true;
    }
}
// Hides footer
function hideFooter(){
    var height = parseInt($(window).height());
  $( ".footer" ).clearQueue().stop().animate({top: height},footer_animation_speed,function(){
      $(".footer").hide();
  });
    $("#footer_button").html(footer_button_text_hidden);
}
//Display footer
function showFooter(){
    $( ".footer" ).show();
    var footer_height = parseInt($("#footer_content").height());
    var height = parseInt($(window).height())- footer_height;
   $( ".footer" ).clearQueue().stop().animate({top: height},footer_animation_speed);
    $("#footer_button").html(footer_button_text_shown);
}
//Function that deals with screen changes if footer active
$( window ).resize(function() {
  if(!footer_hidden){
    var footer_height = parseInt($("#footer_content").height());
    var height = parseInt($(window).height())- footer_height;
   $( ".footer" ).animate({top: height},0);
  }
});
// initial setup 
 $( ".footer" ).animate({top: parseInt($(window).height())},0).hide();
 $("#footer_button").html(footer_button_text_hidden);


