var ar = '[2, -1, 2, 3, -9]';


function subSum(array) {
  try {
    array = JSON.parse(array);
    if (!Array.isArray(array)) throw new Error;
  } catch (e) {
    return "It isn't array of numbers!"
  }


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

// console.log(subSum(ar));

