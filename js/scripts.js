// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

// activate tabs
$('.menu .item')
  .tab()
;

// get cheney weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney .icon').img(weather.icon);
        //display icon
        $('.geo i').addClass('icon-' + weather.code);
        //get the forcast
        $('#d1').text(weather.forecast[1].date);
        $('#d1').text(weather.forecast[1].high);
        $('#d1').text(weather.forecast[1].code);

      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }

  });


// Get Geo Location

  // Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geo button').show();
} else {
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');
}

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

    //Get geolocation weather    
var getWeather = function(location) {

    $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney .icon').img(weather.icon);
        //display icon
        $('.geo i').addClass('icon-' + weather.code);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

};





