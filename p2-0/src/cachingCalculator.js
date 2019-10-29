export default class CachingCalc {
  constructor() {
    this.cache = {};
  }

  static simpleCalc(a, b, operation) {
    switch (operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/':
        if (b === 0) {
          alert('TypeError: Division by zero.');
          throw new Error('TypeError: Division by zero.');
        }
        return a / b;
      default:
        alert('TypeError: incorrect operator');
        throw new Error('TypeError: incorrect operator.');
    }
  }

  calculate(a, b, operation) {
    a = Number(a);
    b = Number(b);

    const requireKey = '' + a + b + operation;
    if (Object.prototype.hasOwnProperty.call(this.cache, requireKey)) {
      return 'Result from cache: ' + this.cache[requireKey];
    }

    if (operation.length === 1) {
      this.cache[requireKey] = CachingCalc.simpleCalc(a, b, operation);
    } else {
      const customFunction = new Function('a', 'b', 'return ' + operation);
      this.cache[requireKey] = customFunction(a, b);
    }
    return 'No in cache. Result: ' + this.cache[requireKey];
  }
}
