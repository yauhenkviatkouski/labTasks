import ArrayProcessing from './arrayProcessing';

export default class NumberConverter {
  convert(inputNumberString, base, outputBase) {
    const inputNumber = ArrayProcessing.getArrayFromJSON(inputNumberString);

    const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
    const convertToTen = (num, base) => {
      let pow = 0;
      let result = 0;
      for (let i = num.length - 1; i >= 0; i -= 1) {
        result += ALPHABET.indexOf(String(num[i])) * Math.pow(base, pow);
        pow += 1;
      }
      return result;
    };

    const convertFromTen = (num, base) => {
      let result = '';
      while (num > 0) {
        result = ALPHABET[num % base] + result;
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
