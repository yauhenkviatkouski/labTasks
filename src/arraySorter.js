(function () {
  var arraySorter = {};
  function isArray(arr) {
    try {
      if (!Array.isArray(JSON.parse(arr))) throw new Error;
      return true
    } catch (e) {
      return false
    }
  }

  arraySorter.quick = function quick(arr, down) {
    if (!Array.isArray(arr)) {
      if (!isArray(arr)) return "It isn't array of numbers!"
      arr = JSON.parse(arr);
    }

    if (arr.length === 0) return [];
    var leftPart = [];
    var rightPart = [];
    var base = arr[0];
    if (down) {
      for (var i = 1; i < arr.length; i += 1) {
        if (arr[i] > base) leftPart.push(arr[i]);
        else rightPart.push(arr[i]);
      }
    } else {
      for (i = 1; i < arr.length; i += 1) {
        if (arr[i] < base) leftPart.push(arr[i]);
        else rightPart.push(arr[i]);
      }
    }
    return quick(leftPart, down).concat(base, quick(rightPart, down));
  }

  arraySorter.selection = function (arr, down) {
    if (!Array.isArray(arr)) {
      if (!isArray(arr)) return "It isn't array of numbers!"
      arr = JSON.parse(arr);
    }

    for (var i = 0; i < arr.length - 1; i += 1) {
      var min = i;
      for (var j = i + 1; j < arr.length; j += 1) {
        if (down === true) {
          if (arr[j] > arr[min]) min = j;
        } else {
          if (arr[j] < arr[min]) min = j;
        }
      }
      var t = arr[min];
      arr[min] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  arraySorter.insertion = function (arr, down) {
    if (!Array.isArray(arr)) {
      if (!isArray(arr)) return "It isn't array of numbers!"
      arr = JSON.parse(arr);
    }

    for (var i = 0; i < arr.length; i += 1) {
      var v = arr[i];
      var j = i - 1;
      if (down === true) {
        while (j >= 0 && arr[j] < v) {
          arr[j + 1] = arr[j]; j--;
        }
      } else {
        while (j >= 0 && arr[j] > v) {
          arr[j + 1] = arr[j]; j--;
        }
      }
      arr[j + 1] = v;
    }
    return arr;
  }

  arraySorter.standard = function (arr, down) {
    if (!Array.isArray(arr)) {
      if (!isArray(arr)) return "It isn't array of numbers!"
      arr = JSON.parse(arr);
    }

    if (down === true) {
      arr.sort(function (a, b) {
        return b - a;
      })
    } else {
      arr.sort(function (a, b) {
        return a - b;
      })
    }

    return arr;

  }

  window.arraySorter = arraySorter;
})();
