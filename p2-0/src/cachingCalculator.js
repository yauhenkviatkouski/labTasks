; (function () {
  var cache = [];
  window.cachingCalc = function (a, b, oper) {
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

    var require = {
      a: a,
      b: b,
      oper: oper
    }

    for (var i = 0; i < cache.length; i += 1) {
      if (require.a === cache[i].a && require.b === cache[i].b && require.oper === cache[i].oper) {
        require.result = cache[i].result;
        break;
      }
    }

    if (require.result) return 'Result from cache: ' + require.result;
    if (oper.length === 1) {
      require.result = simpleCalc(a, b, oper);
    } else {
      var customFunction = new Function('a', 'b', 'return ' + oper);
      require.result = customFunction(a, b);
    }
    cache.push(require);
    return 'No in cache. Result: ' + require.result;
  }

})();
