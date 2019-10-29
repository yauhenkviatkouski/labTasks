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

  format(str, options) {
    options.type = options.type || 'symbol';
    const maxSize = parseInt(options.maxSize);

    if (maxSize >= 0) {
      let result = '';
      let startSubStr = 0;
      const cutLastSpace = (subStr) => {
        const lastSpace = subStr.lastIndexOf(' ');
        if (lastSpace < 1) {
          result += subStr + '\n';
          startSubStr += maxSize;
        } else {
          result += subStr.slice(0, lastSpace) + '\n';
          startSubStr += 1 + lastSpace;
        }
      };

      switch (options.type) {
        case 'symbol': {
          while (startSubStr < str.length) {
            result += str.slice(startSubStr, startSubStr + maxSize) + '\n';
            startSubStr += maxSize;
          }
          break;
        }
        case 'word': {
          while (startSubStr < str.length) {
            const subStr = str.slice(startSubStr, startSubStr + maxSize);
            cutLastSpace(subStr);
          }
          break;
        }
        case 'sentence': {
          while (startSubStr < str.length) {
            const subStr = str.slice(startSubStr, startSubStr + maxSize);
            const lastSentenceEnd = Math.max(
                subStr.lastIndexOf('. '),
                subStr.lastIndexOf('! '),
                subStr.lastIndexOf('? ')
            );
            if (lastSentenceEnd < 1) {
              cutLastSpace(subStr);
            } else {
              result += subStr.slice(0, lastSentenceEnd + 1) + '\n';
              startSubStr += 1 + lastSentenceEnd;
            }
          }
          break;
        }
        default: {
          break;
        }
      }
      str = result;
    }

    return this.cutMaxStrings(str, options.maxStrings);
  }
}

