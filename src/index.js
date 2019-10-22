; (function () {
  var state = {
    currentLang: 'ru',
    currentUnits: 'metric', // imperial
    currentCity: 'Minsk',
  }

  var data = {
    cities: {
      Minsk: {
        en: 'Minsk',
        ru: 'Минск'
      },
      Homyel: {
        en: 'Homyel',
        ru: 'Гомель'
      },
      Brest: {
        en: 'Brest',
        ru: 'Брест'
      },
      Vitsyebsk: {
        en: 'Vitsyebsk',
        ru: 'Витебск'
      },
      Mahilyow: {
        en: 'Mahilyow',
        ru: 'Могилев'
      },
      Hrodna: {
        en: 'Hrodna',
        ru: 'Гродно'
      }
    },
    weather: {
      en: 'Weather',
      ru: 'Погода'
    },
    temp: {
      en: 'temperature',
      ru: 'Температура'
    },
    overcast: {
      en: 'Оvercast',
      ru: 'Облачность'
    },
    degrees: {
      imperial: '°F',
      metric: '°C'
    }
  }

  function getWeather() {
    var xhr = new XMLHttpRequest();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + state.currentCity + ',by&APPID=63b5f0f7da4cdbc5f7ee9af7c7afbc96&lang=' + state.currentLang + '&units=' + state.currentUnits;
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status !== 200) {
        alert('Something went wrong please reload the page');
      } else {
        drawWeather(JSON.parse(xhr.response));
      }
    }
  }


  function drawWeather(response) {
    document.querySelector('.title').textContent = data.weather[state.currentLang];
    document.querySelector('.city').textContent = data.cities[state.currentCity][state.currentLang];
    document.querySelector('.temp').textContent = data.temp[state.currentLang] + ': ' + response.main.temp + data.degrees[state.currentUnits];
    document.querySelector('.overcast').textContent = data.overcast[state.currentLang] + ': ' + response.weather[0].description;

    var img = document.createElement("IMG");
    img.src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
    if (document.querySelector('.icon IMG')) document.querySelector('.icon').removeChild(document.querySelector('.icon img'));
    document.querySelector('.icon').insertAdjacentElement('afterbegin', img);
  }

  window.weatherApi = function () {
    getWeather();

    document.querySelector('.language__list').addEventListener('change', function (event) {
      var value = event.target.value;
      if (value === state.currentLang) return;
      state.currentLang = value;
      getWeather();
    });

    document.querySelector('.cities__list').addEventListener('change', function (event) {
      var value = event.target.value;
      if (value === state.currentCity) return;
      state.currentCity = value;
      getWeather();
    });
  }

  weatherApi();

})();
