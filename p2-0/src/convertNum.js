export default class NumberConverter {
  convert(inputNumber, base, outputBase) {
    try {
      inputNumber = JSON.parse(inputNumber);
      if (!Array.isArray(inputNumber)) {
        throw new Error;
      }
    } catch (e) {
      return 'It isn\'t array of numbers!';
    }

    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
    const convertToTen = (num, base) => {
      let pow = 0;
      let result = 0;
      for (let i = num.length - 1; i >= 0; i -= 1) {
        result += alphabet.indexOf(String(num[i])) * Math.pow(base, pow);
        pow += 1;
      }
      return result;
    };

    const convertFromTen = (num, base) => {
      let result = '';
      while (num > 0) {
        result = alphabet[num % base] + result;
        num = Math.floor(num / base);
      }
      return result;
    };

    if (base === 10) {
      return convertFromTen(parseInt(inputNumber.join('')), outputBase);
    } else {
      return convertFromTen(convertToTen(inputNumber, base), outputBase);
    }
  }
}
