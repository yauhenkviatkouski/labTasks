function stringCalculator(expr) {

  function check(str) {
    var bracketsConfig = ['(', ')'];
    var brackets = str.match(/[\(\)]/g);
    for (var i = 0; i <= brackets.length; i++) {
      if (brackets.length === 0) return true;
      if ((brackets[i] === bracketsConfig[0] && brackets[i + 1] === bracketsConfig[1])) {
        brackets.splice(i, 2)
        i = (i === 0) ? i - 1 : i - 2;
        continue;
      }
    }
    return false;
  }

  if (expr.indexOf('(') !== -1 || expr.indexOf(')') !== -1) {
    if (!check(expr)) throw ('ExpressionError: Brackets must be paired')
  }

  expr = expr.replace(/\s/g, '');

  function operationSingleSolve(exprShort) {
    var operandA = Number(exprShort.match(/\-?\d+\.*\d*/g)[0]);
    exprShort = exprShort.replace(/\-?\d+\.*\d*/, '');
    var operation = exprShort.match(/[\-\+\*\/]/)[0];
    exprShort = exprShort.replace(/[\-\+\*\/]/, ' ');
    var operandB = Number(exprShort.match(/\-?\d+\.*\d*/g)[0]);
    switch (operation) {
      case '+': return operandA + operandB;
      case '-': return operandA - operandB;
      case '*': return operandA * operandB;
      case '/':
        if (operandB === 0) throw ('TypeError: Devision by zero.');
        return operandA / operandB;
    }
  }
  function operationManySolve(exprLong) {
    while ((exprLong.match(/\-?\d+\.*\d*/g).length > 1) && (exprLong.indexOf('/') !== -1 || exprLong.indexOf('*') !== -1)) {
      exprLong = exprLong.replace(/((?<!\d)(\-?))\d+\.*\d*((e-1\d)?)[\*\/]\-?\d+\.*\d*/, operationSingleSolve);
    }
    while ((exprLong.match(/\-?\d+\.*\d*/g).length > 1) && (exprLong.indexOf('+') !== -1 || exprLong.indexOf('-') !== -1)) {
      exprLong = exprLong.replace(/((?<!\d)(\-?))\d+\.*\d*((e-1\d)?)[\+\-]\-?\d+\.*\d*/, operationSingleSolve);
    }
    exprLong = exprLong.replace(/[()]/g, '');
    return exprLong;
  }

  while (expr.indexOf('(') !== -1) {
    expr = expr.replace(/\([^(]+?\)/, operationManySolve)
  }

  return Number(operationManySolve(expr));

}

console.log(stringCalculator(' (  6 + 28 + 18 - (  (  61 + 17 * 64 * 98  ) * (  61 / 53 * 47 / 36 * 98  ) + 82 + (  69 - 55 / (  62 * 77 / 88 - 52 / 10  ) - 42 - (  48 / 84 * 77 + 40 - 13  )  )  )  ) - 4 / 99 '))
