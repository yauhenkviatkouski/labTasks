export default class CachingCalc {
  constructor() {
    this.cache = [];
  }

  calculate(a, b, oper) {
    a = Number(a);
    b = Number(b);

    function simpleCalc(a, b, operation) {
      switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
          if (b === 0) {
            alert('TypeError: Devision by zero.');
            throw new Error('TypeError: Devision by zero.');
          }
          return a / b;
        default:
          alert('TypeError: incorrect operator');
          throw new Error('TypeError: incorrect operator.');
      }
    }

    const require = {
      a: a,
      b: b,
      oper: oper,
    };

    for (let i = 0; i < this.cache.length; i += 1) {
      if (require.a === this.cache[i].a &&
        require.b === this.cache[i].b &&
        require.oper === this.cache[i].oper) {
        require.result = this.cache[i].result;
        break;
      }
    }

    if (require.result) return 'Result from cache: ' + require.result;
    if (oper.length === 1) {
      require.result = simpleCalc(a, b, oper);
    } else {
      const customFunction = new Function('a', 'b', 'return ' + oper);
      require.result = customFunction(a, b);
    }
    this.cache.push(require);
    return 'No in cache. Result: ' + require.result;
  }
}
