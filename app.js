const weatherDIV = document.querySelector(".weather-container");

// connect to WeatherAPI.com
const apiURL = "https://weatherapi-com.p.rapidapi.com/current.json";

const headers = {
	"X-RapidAPI-Key": "bf9fb0cbe2mshb3ebcbecd98c7abp183eccjsncc0a3851dc4e",
	"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};

//Fetch and populate data in HTML
async function getWeather(cityValue) {
	try {
		const queryParams = new URLSearchParams({ q: cityValue });
		const apiUrl = `${apiURL}?${queryParams}`;
		const res = await fetch(apiUrl, {
			method: "GET",
			headers: headers,
		});
		const data = await res.json();
		document.getElementById("city").textContent = data.location.name;
		document.getElementById("country").textContent = data.location.country;
		document.getElementById("temperature").textContent =
			data.current.temp_f + "°F";
		document.getElementById("weather").textContent =
			data.current.condition.text;
		console.log(data.current.condition.icon);
		document.getElementById("humidity").textContent =
			data.current.humidity + "%";

		weatherDIV.classList.add("visible");
	} catch (err) {
		console.log(err);
	}
}

//Get input and call async function
document.addEventListener("DOMContentLoaded", () => {
	const city = document.querySelector("input");

	if (city) {
		city.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				getWeather(city.value);
				event.preventDefault();
			}
		});
	}
});
