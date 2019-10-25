; (function () {
  function textFormatter(str, options) {
    options.type = options.type || 'symbol';
    var maxSize = parseInt(options.maxSize);

    if (maxSize > 0 || maxSize === 0) {
      var result = '';
      var startSubStr = 0;
      if (options.type === 'symbol') {
        while (startSubStr < str.length) {
          result += str.slice(startSubStr, startSubStr + maxSize) + '\n';
          startSubStr += maxSize;
        }
      }

      if (options.type === 'word') {
        while (startSubStr < str.length) {
          var subStr = str.slice(startSubStr, startSubStr + maxSize);
          var lastSpace = subStr.lastIndexOf(' ');
          if (lastSpace < 1) {
            result += subStr + '\n';
            startSubStr += maxSize;
          } else {
            result += subStr.slice(0, lastSpace) + '\n';
            startSubStr += 1 + lastSpace;
          }
        }
      }

      if (options.type === 'sentence') {
        while (startSubStr < str.length) {
          subStr = str.slice(startSubStr, startSubStr + maxSize);
          var lastSentenceEnd = Math.max(subStr.lastIndexOf('. '), subStr.lastIndexOf('! '), subStr.lastIndexOf('? '));
          if (lastSentenceEnd < 1) {
            lastSpace = subStr.lastIndexOf(' ');
            if (lastSpace < 1) {
              result += subStr + '\n';
              startSubStr += maxSize;
            } else {
              result += subStr.slice(0, lastSpace) + '\n';
              startSubStr += 1 + lastSpace;
            }
          } else {
            result += subStr.slice(0, lastSentenceEnd + 1) + '\n';
            startSubStr += 1 + lastSentenceEnd;
          }
        }
      }
      str = result;
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

    return str;
  }

  window.textFormatter = textFormatter;
})();

