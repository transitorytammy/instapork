var animateDelay = 1000;
var pigQuery = {
  "#aboutHam": "ham",
  "#aboutLoin": "pig loin",
  "#aboutButt": "pig butt",
  "#aboutJowl": "pig jowl",
  "#aboutShoulder": "pig shoulder",
  "#aboutBelly": "pig belly",
  "#aboutRibs": "pig ribs"
}

$(window).load(function() {setTimeout(function () {$('body').scrollTop(1) },0); });

// look back at sam's solution for divided times to see how to use data-
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
  $('#aboutPig').css("height", $(window).height());
  getSearchMatches(pigPart);
  $('body').animate({scrollTop:$('footer').position().top}, animateDelay);
}

function backToPig() {
  $('body').animate({scrollTop:$('#pig').position().top}, animateDelay, hideParts);

}
  function hideParts() {
    $('#aboutHam').hide().siblings().removeClass('active').hide();
    $('#aboutPig').css("height", "0px");
}

  function getSearchMatches(pigPart) {
    var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=87296141&_app_key=6ce4d092bd66b4777eec2f0c4a30fcc1&q=";

    var apiCall = yummlyAPI + pigQuery[pigPart]; 

    console.log(apiCall);
    $.ajax({                                                                   
      type: 'GET',
       url: apiCall,
       dataType: 'jsonp',
       success: displayRecipes,
       error: error               
    });
  }

  function displayRecipes(data) {
    matches = data['matches'];
    var recipes = [];
    for (var x=0; matches[x]; x++) {
      match = matches[x]['id'];
      console.log(match);
      recipes.push("<li><a href=http://www.yummly.com/recipe/" + match + ">" + matches[x]['recipeName'] + "</a></li>");
      console.log(recipes);
    }
    $(".recipes").html(recipes);
  }

  function error(data, data2) {
    console.log("Error! " + data);
  }

