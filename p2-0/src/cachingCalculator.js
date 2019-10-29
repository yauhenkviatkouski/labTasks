export default class CachingCalc {
  constructor() {
    this.cache = {};
  }

  calculate(a, b, operation) {
    a = Number(a);
    b = Number(b);

    function simpleCalc(a, b, operation) {
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

    const requireKey = '' + a + b + operation;
    if (Object.prototype.hasOwnProperty.call(this.cache, requireKey)) {
      return 'Result from cache: ' + this.cache[requireKey];
    }

    if (operation.length === 1) {
      this.cache[requireKey] = simpleCalc(a, b, operation);
    } else {
      const customFunction = new Function('a', 'b', 'return ' + operation);
      this.cache[requireKey] = customFunction(a, b);
    }
    return 'No in cache. Result: ' + this.cache[requireKey];
  }
}
