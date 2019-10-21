; (function () {
  function textFormatter(str, options) {

    switch (options.type) {
      case 'wordBrakes':
        str = str.replace(/\s/g, '\n');
        break;
      case 'symbolBrakes':
        str = str.replace(/./g, '$&\n');
        break;
      case 'sentenceBrakes': str = str.replace(/[\.?!]/g, '$&\n');
    }

    if (options.maxSize > 0 || options.maxSize === 0) {
      str = str.substr(0, options.maxSize);
    }

    if (options.maxStrings > 0) {
      var posOfBreaks = [];
      var pos = 0;
      while (true) {
        var foundPos = str.indexOf('\n', pos);
        if (foundPos === -1) break;
        posOfBreaks.push(foundPos);
        pos = foundPos + 1;
      }
      str = str.substring(0, posOfBreaks[options.maxStrings - 1]);
    } else if (options.maxStrings === 0) {
      str = '';
    }

    // document.getElementById('txtFormRes').textContent = str;
    return str;
  }

  window.textFormatter = textFormatter;
})();

