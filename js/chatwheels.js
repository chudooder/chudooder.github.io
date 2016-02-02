//Set up the phrase selection dialog.
var dialog = $('#dialog-scroll-list');
for(var i=0; i<phraseList.length; i++) {
if(phraseList[i].name==="Careful!")
  dialog.append("<hr><h2> POSITIONING </h2>");
if(phraseList[i].name==="Help!") 
  dialog.append("<hr><h2> STATUS </h2>");
if(phraseList[i].name==="Missing!") 
  dialog.append("<hr><h2> ENEMY </h2>");
if(phraseList[i].name==="Split push") 
  dialog.append("<hr><h2> LANE </h2>");
if(phraseList[i].name==="We need wards.") 
  dialog.append("<hr><h2> ITEMS </h2>");
if(phraseList[i].name==="Stack and pull please")
  dialog.append("<hr><h2> NEUTRALS </h2>");
if(phraseList[i].name==="Okay.")
  dialog.append("<hr><h2> MISC </h2>");
if(phraseList[i].name==="Well played!")
  dialog.append("<hr><h2> FLAVOR </h2>");
$("<div class='dialog-text'>"+phraseList[i].name+"</div>")
  .data('phraseindex', i)
  .appendTo(dialog);
}

$(document).ready(function() {

var targetBox = null;
var targetIndex = -1;
var targetWheel = -1;
// holds data for the selected phrases
var selections = [];
var keySelections = [];
var light = false;

var addListeners = function() {
  $('.box').click(function(e) {
    targetBox = $(this);
    targetIndex = targetBox.data('boxnum');
    targetWheel = targetBox.data('wheelnum');
    $('#dialog').fadeIn(200);
    $('#dialog-overlay').fadeIn(200);
  });

  $('.box').mouseenter(function(e) {
    // update target variables
    targetBox = $(this);
    targetIndex = targetBox.data('boxnum');
    targetWheel = targetBox.data('wheelnum');

    // rotate the wheel
    var deg = targetIndex*45;
    var wheel = $(this).parent().parent().children(".left").children(".wheel");
    wheel.css("transform","rotate("+deg+"deg)");
    wheel.css("-webkit-transform","rotate("+deg+"deg)");
  });

  $('.box').mouseleave(function(e) {
    // reset wheel to neutral
    var wheel = $(this).parent().parent().children(".left").children(".wheel");
    wheel.css("transform","rotate(0deg)");
    wheel.css("-webkit-transform","rotate(0deg)");
  });

  $(".key").keypress(function(e){
    return false;
  });

  $(".key").keydown(function(e){
    var charCode = (e.which) ? e.which : event.keyCode;
    var wheel = $(this).data('wheelnum');
    keySelections[wheel] = charCode;
    e.target.value = keyMap[charCode].name;
  });

  $(".delete-button").click(function(e) {
    var parent = $(this).parent().parent();
    var num = $(this).data('wheelnum');
    selections[num] = null;
    keySelections[num] = null;
    parent.remove();
  });
}

// clicking on a chat wheel phrase 
$(".dialog-text").click(function(e) {
  var num = $(this).data('phraseindex');
  selections[targetWheel][targetIndex] = num;
  targetBox.children('.box-text').text($(this).text());
  $('#dialog').fadeOut(200);
  $('#dialog-overlay').fadeOut(200);
  targetBox = null;
  targetIndex = -1;
});

// clicking on the done button
$(".done-button").click(function(e) {
  makeConfig();
  $('html, body').animate({
    scrollTop: $("#script-box").offset().top
  }, 500);
});

// clicking on the add wheel button
$(".add-button").click(function(e) {
  makeContainer();
});

// clicking outside the chat wheel phrase dialog
$("#dialog-overlay").click(function(e) {
  targetBox = null;
  targetIndex = -1;
  $('#dialog').fadeOut(200);
  $('#dialog-overlay').fadeOut(200);
});

var makeConfig = function() {
  var script = "";
  for(var k=0; k<selections.length; k++) {
    // skip null wheels, if they were deleted earlier
    if(selections[k] == null || keySelections[k] == null) {
      continue;
    }

    // create the config
    var key = keyMap[keySelections[k]].scriptname;
    script += "bind "+key+" \"+chatwheel; chat"+k+"\"<br/>alias chat"+k+" \""
    for(var i=0; i<8; i++) {
      script += "chat_wheel_phrase_"+i+" "+phraseList[selections[k][i]].gameindex+";";
    }
    script += "\"<br/>";
  }
  $("#script-box").show();
  $("#script-text").html(script);
}

var makeContainer = function() {
  // create the container
  var num = selections.length;
  $('#wheels').append("<div class='container'><div class='left'><span class='helper'></span><img class='wheel' src='img/wheel.png'></div><div class='right'></div><div class='moreright'>Select a key:<input class='key'></div><div class='rightdown'><div class='delete-button'><div class='delete-button-text'>Delete</div></div></div><div style='clear:both'></div></div>");
  for(var i=0; i<8; i++) {
    var phrase = phraseList[i].name;
    $("<div class=\"box\">\n<div class='box-text'>"+phrase+"</div>\n</div>")
      .data( {"wheelnum": num, "boxnum": i} )
      .appendTo($('.right:last'));
  }

  if(light) {
    $('.container:last').css("background-color", "#222")
  }

  $('.key:last').data('wheelnum', num);
  $('.delete-button:last').data('wheelnum', num);

  light = !light;
  addListeners();
  selections[selections.length] = [0,1,2,3,4,5,6,7];
  keySelections[keySelections.length] = 0;
}

makeContainer();


});