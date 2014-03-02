var animateDelay = 1000;

$('#ham').click(function () {aboutParts('#aboutHam')});
$('#loin').click(function () {aboutParts('#aboutLoin')});
$('#butt').click(function () {aboutParts('#aboutButt')});
$('#jowl').click(function () {aboutParts('#aboutJowl')});
$('#shoulder').click(function () {aboutParts('#aboutShoulder')});
$('#belly').click(function () {aboutParts('#aboutBelly')});
$('#ribs').click(function () {aboutParts('#aboutRibs')});
$('.button').click(backToPig);


function aboutParts(pigPart) {
  console.log('aboutHam clicked: ' + pigPart);
  event.preventDefault();
  $(pigPart).siblings().removeClass('active').hide();
  $(pigPart).show().addClass('active');
  $('body').animate({scrollTop:$('footer').position().top}, animateDelay);
}

function backToPig() {
  $('body').animate({scrollTop:$('#pig').position().top}, animateDelay, hideParts);

  function hideParts() {
    $('#aboutHam').hide().siblings().removeClass('active').hide();
  }
}