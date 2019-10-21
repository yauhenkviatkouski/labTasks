(function () {
  function convertNum(inputNumber, base, outputBase) {

    try {
      inputNumber = JSON.parse(inputNumber);
      if (!Array.isArray(inputNumber)) throw new Error;
    } catch (e) {
      return "It isn't array of numbers!"
    }

    var alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
    function convertToTen(num, base) {
      var pow = 0;
      var result = 0;
      for (var i = num.length - 1; i >= 0; i -= 1) {
        result += alphabet.indexOf(String(num[i])) * Math.pow(base, pow);
        pow += 1;
      }
      return result;
    }

    function convertFromTen(num, base) {
      var result = '';
      while (num > 0) {
        result = alphabet[num % base] + result;
        num = Math.floor(num / base);
      }
      return result;
    }

    if (base === 10) {
      return convertFromTen(parseInt(inputNumber.join('')), outputBase);
    } else {
      return convertFromTen(convertToTen(inputNumber, base), outputBase);
    }
  }

  window.convertNum = convertNum;
})();
