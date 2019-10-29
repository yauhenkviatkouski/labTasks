export default class StringCalc {
  calculate(expr) {
    const check = (str) => {
      const brConf = ['(', ')'];
      const brackets = str.match(/[()]/g);
      for (let i = 0; i <= brackets.length; i++) {
        if (brackets.length === 0) {
          return true;
        }
        if ((brackets[i] === brConf[0] && brackets[i + 1] === brConf[1])) {
          brackets.splice(i, 2);
          i = (i === 0) ? i - 1 : i - 2;
        }
      }
      return false;
    };

    if (expr.indexOf('(') !== -1 || expr.indexOf(')') !== -1) {
      if (!check(expr)) alert('ExpressionError: Brackets must be paired');
    }

    expr = expr.replace(/\s/g, '');

    const operSingleSolve = (exprShort) => {
      const operandA = Number(exprShort.match(/-?\d+\.*\d*/g)[0]);
      exprShort = exprShort.replace(/-?\d+\.*\d*/, '');
      const operation = exprShort.match(/[-+*/]/)[0];
      exprShort = exprShort.replace(/[-+*/]/, ' ');
      const operandB = Number(exprShort.match(/-?\d+\.*\d*/g)[0]);
      switch (operation) {
        case '+': return operandA + operandB;
        case '-': return operandA - operandB;
        case '*': return operandA * operandB;
        case '/':
          if (operandB === 0) alert('TypeError: Devision by zero.');
          return operandA / operandB;
      }
    };
    const operManySolve = (exprLong) => {
      while (
        (exprLong.match(/-?\d+\.*\d*/g).length > 1) &&
        (exprLong.indexOf('/') !== -1 || exprLong.indexOf('*') !== -1)
      ) {
        exprLong = exprLong.replace(/((-?))\d+\.*\d*((e-1\d)?)[*/]-?\d+\.*\d*/,
            operSingleSolve);
      }
      while (
        (exprLong.match(/-?\d+\.*\d*/g).length > 1) &&
        (exprLong.indexOf('+') !== -1 || exprLong.indexOf('-') !== -1)
      ) {
        exprLong = exprLong.replace(/((-?))\d+\.*\d*((e-1\d)?)[+-]-?\d+\.*\d*/,
            operSingleSolve);
      }
      exprLong = exprLong.replace(/[()]/g, '');
      return exprLong;
    };

    while (expr.indexOf('(') !== -1) {
      expr = expr.replace(/\([^(]+?\)/, operManySolve);
    }

    return Number(operManySolve(expr));
  }
}
