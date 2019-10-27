class WeatherApi {
  constructor() {
    this.state = {
      currentLang: 'ru',
      currentUnits: 'metric', // imperial
      currentCity: 'Minsk',
    };

    this.data = {
      cities: {
        Minsk: {
          en: 'Minsk',
          ru: 'Минск',
        },
        Homyel: {
          en: 'Homyel',
          ru: 'Гомель',
        },
        Brest: {
          en: 'Brest',
          ru: 'Брест',
        },
        Vitsyebsk: {
          en: 'Vitsyebsk',
          ru: 'Витебск',
        },
        Mahilyow: {
          en: 'Mahilyow',
          ru: 'Могилев',
        },
        Hrodna: {
          en: 'Hrodna',
          ru: 'Гродно',
        },
      },
      weather: {
        en: 'Weather',
        ru: 'Погода',
      },
      temp: {
        en: 'temperature',
        ru: 'Температура',
      },
      overcast: {
        en: 'Оvercast',
        ru: 'Облачность',
      },
      degrees: {
        imperial: '°F',
        metric: '°C',
      },
    };
  }

  getWeather() {
    const xhr = new XMLHttpRequest();
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      this.state.currentCity +
      ',by&APPID=63b5f0f7da4cdbc5f7ee9af7c7afbc96&lang=' +
      this.state.currentLang +
      '&units=' +
      this.state.currentUnits;
    xhr.open('GET', url);
    xhr.onerror = () => {
      alert('Something went wrong please reload the page');
    };
    xhr.onload = () => {
      this.drawWeather(JSON.parse(xhr.response));
    };
    xhr.send();
  }

  drawWeather(response) {
    document.querySelector('.title').textContent =
      this.data.weather[this.state.currentLang];
    document.querySelector('.city').textContent =
      this.data.cities[this.state.currentCity][this.state.currentLang];
    document.querySelector('.temp').textContent =
      this.data.temp[this.state.currentLang] + ': ' +
      response.main.temp + this.data.degrees[this.state.currentUnits];
    document.querySelector('.overcast').textContent =
      this.data.overcast[this.state.currentLang] + ': ' +
      response.weather[0].description;

    const img = document.createElement('img');
    img.src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
    const icon = document.querySelector('.icon');
    if (icon.querySelector('img')) {
      icon.removeChild(icon.querySelector('img'));
    }
    icon.insertAdjacentElement('afterbegin', img);
    const cityList = document.querySelector('.cities__list').children;
    for (let i = 0; i < cityList.length; i += 1) {
      cityList[i].textContent =
        this.data.cities[cityList[i].value][this.state.currentLang];
    }
  }

  weatherApi() {
    this.getWeather();

    document.querySelector('.lang__list').addEventListener('change', (e) => {
      const value = e.target.value;
      if (value === this.state.currentLang) return;
      this.state.currentLang = value;
      this.getWeather();
    });

    document.querySelector('.cities__list').addEventListener('change', (e) => {
      const value = e.target.value;
      if (value === this.state.currentCity) return;
      this.state.currentCity = value;
      this.getWeather();
    });

    document.querySelector('.system__list').addEventListener('change', (e) => {
      const value = e.target.value;
      if (value === this.state.currentUnits) return;
      this.state.currentUnits = value;
      this.getWeather();
    });
  }
}

const weatherVidget = new WeatherApi;
weatherVidget.weatherApi();
