; (function () {
  var cashe = [];
  window.cashingCalc = function (a, b, oper) {
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
      }
    }

    var require = {
      a: a,
      b: b,
      oper: oper
    }

    cashe.forEach(function (item) {
      if (require.a === item.a && require.b === item.b && require.oper === item.oper) {
        require.result = item.result;
      }
    });

    if (require.result) return 'Result from cashe: ' + require.result;
    if (oper === '+' || oper === '-' || oper === '*' || oper === '/') {
      require.result = simpleCalc(a, b, oper);
    } else {
      var customFunction = new Function('a', 'b', 'return ' + oper);
      require.result = customFunction(a, b);
    }
    cashe.push(require);
    return 'No in cashe. Result: ' + require.result;
  }

})();
