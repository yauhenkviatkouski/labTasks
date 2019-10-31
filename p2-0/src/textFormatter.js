export default class TextFormatter {
  cutMaxStrings(str, maxStrings) {
    if (maxStrings > 0) {
      const posOfBreaks = [];
      let pos = 0;
      for (; ;) {
        const foundPos = str.indexOf('\n', pos);
        if (foundPos === -1) {
          break;
        }
        posOfBreaks.push(foundPos);
        pos = foundPos + 1;
      }
      str = str.substring(0, posOfBreaks[maxStrings - 1]);
    } else if (maxStrings === 0) {
      str = '';
    }
    return str;
  }

  cutLastSpace(str, resultStr, maxSize, startSubStr) {
    const subStr = str.slice(startSubStr, startSubStr + maxSize);
    const lastSpace = subStr.lastIndexOf(' ');
    if (lastSpace < 1) {
      return resultStr += subStr + '\n';
    } else {
      return resultStr += subStr.slice(0, lastSpace) + '\n';
    }
  }

  cutOnSymbol(str, options) {
    const maxSize = parseInt(options.maxSize);
    let result = '';
    let startSubStr = 0;
    while (startSubStr < str.length) {
      result += str.slice(startSubStr, startSubStr + maxSize) + '\n';
      startSubStr += maxSize;
    }
    return result;
  }

  cutOnWord(str, options) {
    const maxSize = parseInt(options.maxSize);
    let result = '';
    let startSubStr = 0;
    while (startSubStr < str.length) {
      result = this.cutLastSpace(str, result, maxSize, startSubStr);
      startSubStr = result.lastIndexOf('\n') + 1;
    }
    return result;
  }

  cutOnSentence(str, options) {
    const maxSize = parseInt(options.maxSize);
    let result = '';
    let startSubStr = 0;
    while (startSubStr < str.length) {
      const subStr = str.slice(startSubStr, startSubStr + maxSize);
      const lastSentenceEnd = Math.max(
          subStr.lastIndexOf('. '),
          subStr.lastIndexOf('! '),
          subStr.lastIndexOf('? ')
      );
      if (lastSentenceEnd < 1) {
        result = this.cutLastSpace(str, result, maxSize, startSubStr);
        startSubStr = result.lastIndexOf('\n') + 1;
      } else {
        result += subStr.slice(0, lastSentenceEnd + 1) + '\n';
        startSubStr += 1 + lastSentenceEnd;
      }
    }
    return result;
  }

  format(str, options) {
    options.type = options.type || 'symbol';
    const maxSize = parseInt(options.maxSize);
    if (maxSize >= 0) {
      switch (options.type) {
        case 'symbol': {
          str = this.cutOnSymbol(str, options);
          break;
        }
        case 'word': {
          str = this.cutOnWord(str, options);
          break;
        }
        case 'sentence': {
          str = this.cutOnSentence(str, options);
          break;
        }
        default: {
          break;
        }
      }
    }

    return this.cutMaxStrings(str, options.maxStrings);
  }
}

