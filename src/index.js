
function _parser(str, inputScheme) {
  var components = {};
  var defaultScheme = (inputScheme) ? inputScheme : 'DDMMYYYY';
  components.day = str.substr([defaultScheme.indexOf('DD')], 2);
  components.month = str.substr([defaultScheme.indexOf('MM')], 2);
  components.year = str.substr([defaultScheme.indexOf('YYYY')], 4);
  return components;
}

function _print(components, outputScheme) {
  var defaultScheme = (outputScheme) ? outputScheme : 'DD/MM/YYYY';
  var result = defaultScheme.replace(/DD/, components.day);
  result = result.replace(/MM/, components.month);
  result = result.replace(/YYYY/, components.year);
  return result
}


function formatMs(ms, outputScheme) {
  var date = new Date(Number(ms));
  var components = {};
  var day = date.getDate();
  var month = date.getMonth() + 1;
  components.year = date.getFullYear();
  components.day = (day < 10) ? '0' + day : day;
  components.month = (month < 10) ? '0' + month : month;
  console.log(components)
  return _print(components, outputScheme);
}

console.log(formatMs(651654651651))
