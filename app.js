let cityValue = "";
document.addEventListener("DOMContentLoaded", () => {
	const city = document.querySelector("input");
	console.log(city);

	if (city) {
		city.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				cityValue = city.value;
				console.log(cityValue);
				event.preventDefault();
			}
		});
	}
});

// connect to WeatherAPI.com
const apiURL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityValue}`;

const headers = {
	"X-RapidAPI-Key": "bf9fb0cbe2mshb3ebcbecd98c7abp183eccjsncc0a3851dc4e",
	"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};

async function getWeather() {
	try {
		const res = await fetch(apiURL, {
			method: "GET",
			params: {
				q: cityValue,
			},
			headers: headers,
		});
		console.log(res.json());
	} catch (err) {
		console.log(err);
	}
}

getWeather();
