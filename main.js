

const weatherApi={
    key:"655164c2f3ce81f4d06e886b57747f74",
    baseURL:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox= document.getElementById('InputBox');

searchInputBox.addEventListener('keypress',(event) =>{
   
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.Body2').style.display="block";
    }

});

function getWeatherReport(city){
   fetch(`${weatherApi.baseURL}?q=${city}&appid=${weatherApi.key}&units=metric`)
   .then(weather =>{
    return weather.json();
   }).then(showWeatherReport)
}

function showWeatherReport(weather){
      console.log(weather);

      let city=document.getElementById('city');
      city.innerText=`${weather.name},${weather.sys.country}`;

      let temperature =document.getElementById('temp');
      temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

      let minmaxtemp=document.getElementById('min-max');
      minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_min)}&deg;C (max) `;

      let weathertype=document.getElementById('weatherwordly');
      weathertype.innerText=`${weather.weather[0].main}`;


      let dated=document.getElementById('date');
      let todayDate=new Date();
      dated.innerText=dateManage(todayDate);

      if(weathertype.textContent=='Clear'){
        document.body.style.backgroundImage="url('images/clear.jpg')";
      }
      else if(weathertype.textContent=='Clouds'){
        document.body.style.backgroundImage="url('images/cloudy.jpg')";
      }
      else if(weathertype.textContent=='Rain'){
        document.body.style.backgroundImage="url('images/rainy.jpg')";
      }
      else if(weathertype.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunder.jpg')";
      }
      else if(weathertype.textContent=='Snow'){
        document.body.style.backgroundImage="url('images/snowy.jpg')";
      }
      else if(weathertype.textContent=='Sunny'){
        document.body.style.backgroundImage="url('images/sunny.jpg')";
      }
      else if(weathertype.textContent=='Haze'){
        document.body.style.backgroundImage="url('images/cloudy.jpg')";
      }
      
      

}


function dateManage(dateArg) {
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Aug","Oct","Nov","Dec"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}


