const arrayProcessig = {};

function getArrayFromJSON(array) {
  try {
    array = JSON.parse(array);
    if (!Array.isArray(array)) throw new Error;
    return array;
  } catch (e) {
    alert("It isn't array of numbers!")
  }
}

arrayProcessig.subSumN2 = function (array) {
  array = getArrayFromJSON(array);
  var maxSubArray = 0;
  for (var i = 0; i < array.length; i += 1) {
    for (var j = i; j < array.length; j += 1) {
      var subArray = array.slice(i, j + 1);
      var subArrayValue = subArray.reduce(function (sum, current) {
        return sum + current;
      });
      if (subArrayValue > maxSubArray) {
        maxSubArray = subArrayValue;
      }
    }
  }
  return maxSubArray;
}

arrayProcessig.subSum_n = function (array) {
  array = getArrayFromJSON(array);
  var maxSubArray = 0;
  var accumulator = 0;
  for (var i = 0; i < array.length; i += 1) {
    accumulator = accumulator + array[i];
    if (accumulator < 0) {
      accumulator = 0;
    } else if (accumulator > maxSubArray) {
      maxSubArray = accumulator
    }
  }
  return maxSubArray;
}

arrayProcessig.searchMin = function (array) {
  array = getArrayFromJSON(array);
  return array.reduce(function (previous, item) {
    return (item < previous) ? item : previous;
  });
}

arrayProcessig.searchMax = function (array) {
  array = getArrayFromJSON(array);
  return array.reduce(function (previous, item) {
    return (item > previous) ? item : previous;
  });
}

arrayProcessig.searchMedian = function (array) {
  array = getArrayFromJSON(array);
  function quickSort(arr) {
    if (arr.length === 0) return [];
    var leftPart = [];
    var rightPart = [];
    var base = arr[0];
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i] < base) leftPart.push(arr[i]);
      else rightPart.push(arr[i]);
    }
    return quickSort(leftPart).concat(base, quickSort(rightPart));
  }
  var sort = quickSort(array);
  if (sort.length % 2 === 1) return sort[Math.floor(sort.length / 2)];
  else return (sort[Math.floor(sort.length / 2 - 1)] + sort[Math.floor(sort.length / 2)]) / 2;
}

arrayProcessig.selection = function (arr) {
  arr = getArrayFromJSON(arr);
  var sequence = [arr[0]];
  var maxSeuence = sequence;
  for (var i = 1; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
      sequence.push(arr[i]);
      if (maxSeuence.length < sequence.length) maxSeuence = sequence;
    } else {
      sequence = [arr[i]];
    }
  }
  return maxSeuence;
}


export default arrayProcessig;
