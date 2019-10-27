export default class DateDisplay {
  parser(str, inputScheme) {
    const components = {};
    const defaultScheme = (inputScheme) ? inputScheme : 'DDMMYYYY';
    components.day = str.substr([defaultScheme.indexOf('DD')], 2);
    components.month = str.substr([defaultScheme.indexOf('MM')], 2);
    components.year = str.substr([defaultScheme.indexOf('YYYY')], 4);
    return components;
  }

  print(components, outputScheme) {
    const defaultScheme = (outputScheme) ? outputScheme : 'DD-MM-YYYY';
    let result = defaultScheme.replace(/DD/, components.day);
    if (outputScheme.indexOf('MMMM') >= 0) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      result = result.replace(/MMMM/, months[Number(components.month) - 1]);
    } else {
      result = result.replace(/MM/, components.month);
    }
    result = result.replace(/YYYY/, components.year);
    return result;
  }

  formatStr(str, inputScheme, outputScheme) {
    const components = this.parser(str, inputScheme);
    return this.print(components, outputScheme);
  }

  formatMs(ms, outputScheme) {
    const date = new Date(Number(ms));
    const components = {};
    const day = date.getDate();
    const month = date.getMonth() + 1;
    components.year = date.getFullYear();
    components.day = (day < 10) ? '0' + day : day;
    components.month = (month < 10) ? '0' + month : month;
    return this.print(components, outputScheme);
  }

  fromNow(str, inputScheme) {
    const components = this.parser(str, inputScheme);
    const date =
      new Date(components.year + '-' + components.month + '-' + components.day);
    const nowDate = new Date();
    let diffDays = (nowDate - date) / 1000 / 60 / 60 / 24;
    const isPast = (date < nowDate) ? true : false;
    diffDays = Math.floor(Math.abs(diffDays));
    const years = Math.floor(diffDays / 365);
    const days = (diffDays % 365);
    const resStr =
      years ? years + ' years and ' + days + ' days' : days + ' days';
    return isPast ? 'it was ' + resStr + ' ago' : 'it will be in ' + resStr;
  }
}
