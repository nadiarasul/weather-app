// icon: 	
//	temp_c:
// display_location: > city:
// local_time_rfc822:



var weatherWidget = {

};
weatherWidget.apiURL = 'http://api.wunderground.com/api/600fa0355bf6ff11/conditions/q/UK/London.json';

weatherWidget.init = function(){
	// This code in here is used to initialize our application
	weatherWidget.getWeather();
};

// When the data returns we want to display specific things (found on the html page)
	// When the page loads get some data
		
	// Make an AJAX call to the wunderground API
	
	weatherWidget.getWeather = function(){
			$.ajax({
			url: weatherWidget.apiURL,
			method: 'GET',
			dataType: 'json',
		}).then(function(data){
		var obs = data.current_observation;	
		 weatherWidget.display(obs);
		});

	};
	weatherWidget.display = function(obs){
		var weatherImage = obs.icon_url;
		$('.weather_image').attr('src', weatherImage);
		 
		var weatherString = obs.weather;
		$('.weather_string').text(weatherString);
		 
		var weatherTemp = obs.temp_c;
		$('.temp_c').text(weatherTemp);
		 
		var weatherLocation = obs.display_location.city + ", " + obs.display_location.country;
		$('.city_name').text(weatherLocation);
		 
		var weatherTime = obs.local_time_rfc822;
		$('.date_time').text(weatherTime);

	};


$(document).ready(function(){
  weatherWidget.init();
});