async function getWeather(){
    const city = document.getElementById("city").value;
    const apikey ="d777f217814ea533039a31f75b8ac370";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.cod !== 200) {
            document.getElementById("result").innerHTML =
                `❌ Error: ${data.message}`;
            return;
        }
        document.getElementById("result").innerHTML =
      `🌍 City: ${data.name}
       <br>🌡️ Temp: ${data.main.temp}°C
       <br>☁️ Weather: ${data.weather[0].description}`;
     } 
     catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data!";
    }
}