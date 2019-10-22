var foo = function (x, y, z) {
  return x + y + z;
};

function bind() {
  var args = [];
  for (var key in arguments) {
    args.push(arguments[key]);
  }
  var bindedFunc = '' + args[args.length - 1];
  var bodyBindedFunc = eval(bindedFunc);
  args.length = args.length - 1;
  return function () {
    for (var key in arguments) {
      args.push(arguments[key]);
    }
    args += '';



    var operation = '(function(' + args + ')' + bodyBindedFunc + ')()'

    return eval('(function(' + args + ')' + bodyBindedFunc + ')()');
  }
};

console.log(bind(1, 2, foo)(4));

// don't use call apply bind ...
