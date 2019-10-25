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
    xhr.onerror = function () {
      alert('Something went wrong please reload the page');
    }
    xhr.onload = function () {
      drawWeather(JSON.parse(xhr.response));
    }
    xhr.send();
  }


  function drawWeather(response) {
    document.querySelector('.title').textContent = data.weather[state.currentLang];
    document.querySelector('.city').textContent = data.cities[state.currentCity][state.currentLang];
    document.querySelector('.temp').textContent = data.temp[state.currentLang] + ': ' + response.main.temp + data.degrees[state.currentUnits];
    document.querySelector('.overcast').textContent = data.overcast[state.currentLang] + ': ' + response.weather[0].description;

    var img = document.createElement("img");
    img.src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
    var icon = document.querySelector('.icon');
    if (document.querySelector('.icon img')) {
      icon.removeChild(document.querySelector('.icon img'));
    }
    icon.insertAdjacentElement('afterbegin', img);
    var cityList = document.querySelector('.cities__list').children;
    for (i = 0; i < cityList.length; i += 1) {
      cityList[i].textContent = data.cities[cityList[i].value][state.currentLang]
    }
  }

  weatherApi = function () {
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

    document.querySelector('.system__list').addEventListener('change', function (event) {
      var value = event.target.value;
      if (value === state.currentUnits) return;
      state.currentUnits = value;
      getWeather();
    });
  }

  weatherApi();

})();
