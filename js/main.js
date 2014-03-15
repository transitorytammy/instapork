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
  $('body').animate({scrollTop:$('footer').position().top}, animateDelay);
  // recipeCall();
}

function backToPig() {
  $('body').animate({scrollTop:$('#pig').position().top}, animateDelay, hideParts);

}
  function hideParts() {
    $('#aboutHam').hide().siblings().removeClass('active').hide();
    $('#aboutPig').css("height", "0px");
}

  function query(pigPart) {
    pigQuery[pigPart];
    console.log(pigQuery[pigPart]);
  }

  function recipeCall () {
    var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=87296141&_app_key=6ce4d092bd66b4777eec2f0c4a30fcc1&q=";

    // var query = 

    // your _search_parameters?callback=?;

    var apiCall = yummlyAPI + query() + 

    $.getJSON(yummlyAPI, function(json) {
      if (json.length != 0) {}
    console.log(json);
    alert( "Load was performed." );
  });
  }

// <script>
// (function() {
//   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON( flickerAPI, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });
// })();
// </script>


// // ajax

// X-Yummly-App-ID:87296141
// X-Yummly-App-Key:6ce4d092bd66b4777eec2f0c4a30fcc1

// _app_id=app-id&_app_key=app-key


// The base url for the Search Recipes GET is http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters



