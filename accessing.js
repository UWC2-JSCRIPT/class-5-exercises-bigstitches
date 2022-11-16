// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
Array.from(document.getElementsByClassName("sun")).forEach(item => item.style.color = "orange");

/*
var elements = document.getElementsByClassName('sun'); // get all elements of class sun
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color = "orange";
	}
*/

// Change the class of the second <li> from to "sun" to "cloudy"
document.getElementsByTagName("li")[1].className = "cloudy";