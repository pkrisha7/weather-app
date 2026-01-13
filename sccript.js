function getWeather() {
    const location = document.getElementById("locationInput").value;
    const result = document.getElementById("weatherResult");

    if (location === "") {
        result.innerHTML = "Please enter a location";
        return;
    }

    const apiKey = "e9fe662ec6b2435997e84839261301";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            result.innerHTML = `
                <p><b>City:</b> ${data.location.name}</p>
                <p><b>Temperature:</b> ${data.current.temp_c} °C</p>
                <p><b>Condition:</b> ${data.current.condition.text}</p>
            `;
        })
        .catch(() => {
            result.innerHTML = "Error fetching weather";
        });
}
