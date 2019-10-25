var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Problem 1: Partial Application + Problem 2: Currying ///////////
function bind() {
  var args = [];
  for (var key in arguments) {
    args.push(arguments[key]);
  }
  var bindedFunc = args[args.length - 1];
  args.length = args.length - 1;
  return function () {
    for (var key in arguments) {
      args.push(arguments[key]);
    }

    const UNIQUE_ID_PREFIX = '0110';
    uniqID = UNIQUE_ID_PREFIX + Math.random();
    global[uniqID] = bindedFunc;
    var result = eval('(global[uniqID])(' + args + ')');
    delete global[uniqID];

    return result;
  };
}

var foo = function (x, y, z) {
  return x + y + z;
};

var a = bind(1, foo);
var b = bind(2, a);
console.log('output for Problem 1: Partial Application: ')
console.log(b(4));



// Problem 3: Linear fold /////////////////////////////////////////
function likeReduce(array, callback, init) {
  var previousValue = init || array[0];
  for (var i = (init) ? 0 : 1; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}

function sum(previousValue, item, index, array) {
  return previousValue + item;
}
console.log('output for Problem 3: Linear fold: ');
console.log(likeReduce(arr, sum, 0));



// Problem 4: Linear unfold //////////////////////////////////////
function unfold(callback, stateValue) {
  var result = [];
  var resultOfCallback;
  while (stateValue !== false) {
    resultOfCallback = callback(stateValue);
    stateValue = resultOfCallback.nextStateValue;
    result.push(resultOfCallback.nextElemSequence);
  }
  return result;
}

function someRandoms(stateValue) {
  result = {};
  result.nextElemSequence = Math.round(Math.random() * 10);
  result.nextStateValue = (stateValue - 1 !== 0) ? stateValue - 1 : false;
  return result;
}
console.log('output for Problem 4: Linear unfold: ')
console.log(unfold(someRandoms, 10))



// Problem 5: map ////////////////////////////////////////////
function likeMap(array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i += 1) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
console.log('output for Problem 5: map: ');
console.log(likeMap(arr, sum, 0));



// Problem 6: filter ///////////////////////////////////////////
function likeFilter(array, callback, init) {
  var result = [];
  for (var i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
}

function ifEven(item) {
  return item % 2 === 0;
}
console.log('output for Problem 6: filter: ');
console.log(likeFilter(arr, ifEven, 0));



// Problem 7:Average of even numbers ///////////////////////////////
var arrayFor7 = [1, 23, 2, 6, 12, 0];
console.log('output for Problem 7: Average of even numbers:');
var arrFltred = likeFilter(arrayFor7, ifEven);
console.log(likeReduce(arrFltred, sum, 0) / arrFltred.length);




// Problem 8:Sum of random numbers ///////////////////////////////
console.log('output for Problem 8:Sum of random numbers:');
console.log(likeReduce(unfold(someRandoms, 10), sum));



// Problem 9: First /////////////////////////////////////////////
function likeFind(array, callback) {
  for (var i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return array[i];
  }
}
console.log('output for Problem 9: first: ');
console.log(likeFind(arr, ifEven));



// Problem 11: Memoization ///////////////////////////////////////////
function cachingFunc(f) {
  var cache = {};
  return function (x) {
    if (cache[x]) {
      console.log('from cache:' + cache[x])
      return cache[x];
    }
    else {
      var result = f(x);
      cache[x] = result;
      console.log('calculated:' + result);
      return result;
    }
  }
}

function mult(x) {
  return x * x;
}
var cechedMult = cachingFunc(mult);

console.log('output for Problem 11: Memoization: ');
console.log(cechedMult(5));
console.log(cechedMult(5));
