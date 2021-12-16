function firstLetterCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=43.82&lon=-111.79&exclude=minutely,hourly&units=imperial&appid=faf2a69873db9518af281faeffb50521` 
fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        

        currentTemp = document.querySelector("#currentTemperature");
        weatherDescription = document.querySelector("#weatherDescription");
        humidity = document.querySelector("#humidity");

        currentTemp.textContent = jsonObject.current.temp.toFixed(0);
        weatherDescription.textContent = firstLetterCap(jsonObject.current.weather[0].description);
        humidity.textContent = jsonObject.current.humidity;

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        /* 3 days forecast*/

        dailyForecast = jsonObject.daily;

        for (let i = 0; i < 3; i++){

            forecast = dailyForecast[i];

            iconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            iconAlt = forecast.weather[0].description;

            const d = new Date();
            let day = d.getDay();

            dayName = weekDays[day + i];

            let weatherImg = document.createElement("img");
            let iconRow  = document.createElement("td");

            let dayRow = document.createElement("th");
            let daySpan = document.createElement("span");

            let tempRow = document.createElement("td");
            let tempSpan = document.createElement("span");

            weatherImg.setAttribute("src", iconSrc);
            weatherImg.setAttribute("alt", iconAlt);
            iconRow.appendChild(weatherImg);

            daySpan.textContent = dayName;
            tempSpan.textContent = forecast.temp.day.toFixed(0) + "°f";

            dayRow.appendChild(daySpan);
            tempRow.appendChild(tempSpan);
            iconRow.appendChild(weatherImg);

            document.querySelector(".forecastDay").appendChild(dayRow);
            document.querySelector(".forecastIcon").appendChild(iconRow);
            document.querySelector(".forecastTemp").appendChild(tempRow);   
        };


    })
