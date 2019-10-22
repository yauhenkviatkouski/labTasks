var foo = function (x, y, z) {
  return x + y + z;
};

function bind() {
  var args = [];
  for (var key in arguments) {
    args.push(arguments[key]);
  }
  var bindedFunc = '' + args[args.length - 1];
  args.length = args.length - 1;
  return function () {
    for (var key in arguments) {
      args.push(arguments[key]);
    }
    args = '(' + args + ')';

    return eval('(' + bindedFunc + ')' + args);
  }
};

console.log(bind(1, foo)(2, 4));

