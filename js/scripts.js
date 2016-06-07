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
        //display icon
        $('#cheney i').addClass('icon-' + weather.code);
        //get the forcast
        $('#d1-c .day').text(weather.forecast[1].date);
        $('#d1-c .temp').text(weather.forecast[1].high);
        $('#d1-c i').addClass('icon-' + weather.forecast[1].code);

        
        // add custom body class
        
        if (weather.code >= 0 && weather.code <= 2){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for hurricans
            $('body').addClass('bg-1');
            
        }
        
        if (weather.code >= 3 && weather.code <= 4 && weather.code >= 37 && weather.code <= 39 && weather.code === 45 && weather.code === 47){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for tunderstorms
            $('body').addClass('bg-2');
            
        }
        
        if (weather.code >= 5 && weather.code <= 10 && weather.code === 35){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for mixed rain and ice
            $('body').addClass('bg-3');
            
        }
        
        if (weather.code >= 11 && weather.code <= 12 && weather.code === 40){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for showers
            $('body').addClass('bg-4');
            
        }
        
        if (weather.code >= 13 && weather.code <= 18 && weather.code >=42 && weather.code <=43 && weather.code === 46){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for snow and sleet
            $('body').addClass('bg-5');
            
        }
        
        if (weather.code >= 19 && weather.code <= 22){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for dust and foggy
            $('body').addClass('bg-6');
            
        }
        
        if (weather.code >= 23 && weather.code <= 25){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for windy and cold
            $('body').addClass('bg-7');
            
        }
        
        if (weather.code >= 26 && weather.code <= 30 && weather.code === 44){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for cloudy
            $('body').addClass('bg-8');
            
        }
        
        if (weather.code === 31){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for clear night
            $('body').addClass('bg-9');
            
        }
        
        if (weather.code >= 32 && weather.code <= 34){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for sunny
            $('body').addClass('bg-10');
            
        }
        
        if (weather.code === 36){
            
            //remove class
            $('body').removeClass('bg-0');
            //add class for hot
            $('body').addClass('bg-11');
            
        }

    },
    error: function(error) {
      // Show if weather cannot be retreived
    }

  });


// get buckely weather
$.simpleWeather({
    location: '98321',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      // Display Data
      $('#buckley .temp').text(weather.temp);
      $('#buckley .city').text(weather.city);
        //display icon
        $('#buckley i').addClass('icon-' + weather.code);
        //get the forcast
        $('#d1-b .day').text(weather.forecast[1].date);
        $('#d1-b .temp').text(weather.forecast[1].high);
        $('#d1-b i').addClass('icon-' + weather.forecast[1].code);
        
 

    },
    error: function(error) {
      // Show if weather cannot be retreived
    }

});

// Get Geo Location

  // Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geo button').show();
} 
else {
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');
}

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude); 
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
      $('#geo .temp').text(weather.temp);
      $('#geo .city').text(weather.city);
        //display icon
        $('#geo i').addClass('icon-' + weather.code);
    
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

};





