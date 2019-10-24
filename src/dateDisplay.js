; (function () {
  var dateDisplay = {};

  function parser(str, inputScheme) {
    var components = {};
    var defaultScheme = (inputScheme) ? inputScheme : 'DDMMYYYY';
    components.day = str.substr([defaultScheme.indexOf('DD')], 2);
    components.month = str.substr([defaultScheme.indexOf('MM')], 2);
    components.year = str.substr([defaultScheme.indexOf('YYYY')], 4);
    return components;
  }

  function print(components, outputScheme) {
    var defaultScheme = (outputScheme) ? outputScheme : 'DD-MM-YYYY';
    var result = defaultScheme.replace(/DD/, components.day);
    if (outputScheme.indexOf('MMMM') >= 0) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      result = result.replace(/MMMM/, months[Number(components.month) - 1]);
    } else {
      result = result.replace(/MM/, components.month);
    }
    result = result.replace(/YYYY/, components.year);
    return result
  }


  dateDisplay.formatStr = function (str, inputScheme, outputScheme) {
    var components = parser(str, inputScheme);
    return print(components, outputScheme);
  }

  dateDisplay.formatMs = function (ms, outputScheme) {
    var date = new Date(Number(ms));
    var components = {};
    var day = date.getDate();
    var month = date.getMonth() + 1;
    components.year = date.getFullYear();
    components.day = (day < 10) ? '0' + day : day;
    components.month = (month < 10) ? '0' + month : month;
    console.log(components)
    return print(components, outputScheme);
  }

  dateDisplay.fromNow = function (str, inputScheme) {
    var components = parser(str, inputScheme);
    var date = new Date(components.year + '-' + components.month + '-' + components.day);
    var nowDate = new Date();
    var diffDays = (nowDate - date) / 1000 / 60 / 60 / 24;
    var isPast = (date < nowDate) ? true : false;
    diffDays = Math.floor(Math.abs(diffDays));
    var years = Math.floor(diffDays / 365);
    var days = (diffDays % 365);
    var resultString = years ? years + ' years and ' + days + ' days' : days + ' days';
    return isPast ? 'it was ' + resultString + ' ago' : 'it will be in ' + resultString;


  }

  window.dateDisplay = dateDisplay;
})();
