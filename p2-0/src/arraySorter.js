export default class ArraySorter {
  isArray(arr) {
    try {
      if (!Array.isArray(JSON.parse(arr))) {
        throw new Error;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  quick(arr, down) {
    if (!Array.isArray(arr)) {
      if (!this.isArray(arr)) {
        return 'It isn\'t array of numbers!';
      }
      arr = JSON.parse(arr);
    }

    if (arr.length === 0) return [];
    const leftPart = [];
    const rightPart = [];
    const base = arr[0];
    if (down) {
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > base) {
          leftPart.push(arr[i]);
        } else {
          rightPart.push(arr[i]);
        }
      }
    } else {
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < base) {
          leftPart.push(arr[i]);
        } else {
          rightPart.push(arr[i]);
        }
      }
    }
    return this.quick(leftPart, down).concat(base, this.quick(rightPart, down));
  }

  selection(arr, down) {
    if (!Array.isArray(arr)) {
      if (!this.isArray(arr)) {
        return 'It isn\'t array of numbers!';
      }
      arr = JSON.parse(arr);
    }

    for (let i = 0; i < arr.length - 1; i += 1) {
      let min = i;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (down === true) {
          if (arr[j] > arr[min]) {
            min = j;
          }
        } else if (arr[j] < arr[min]) {
          min = j;
        }
      }
      const t = arr[min];
      arr[min] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  insertion(arr, down) {
    if (!Array.isArray(arr)) {
      if (!this.isArray(arr)) return 'It isn\'t array of numbers!';
      arr = JSON.parse(arr);
    }

    for (let i = 0; i < arr.length; i += 1) {
      const t = arr[i];
      let j = i - 1;
      if (down === true) {
        while (j >= 0 && arr[j] < t) {
          arr[j + 1] = arr[j];
          j -= 1;
        }
      } else {
        while (j >= 0 && arr[j] > t) {
          arr[j + 1] = arr[j];
          j -= 1;
        }
      }
      arr[j + 1] = t;
    }
    return arr;
  }

  standard(arr, down) {
    if (!Array.isArray(arr)) {
      if (!this.isArray(arr)) return 'It isn\'t array of numbers!';
      arr = JSON.parse(arr);
    }

    if (down === true) {
      arr.sort(function(a, b) {
        return b - a;
      });
    } else {
      arr.sort(function(a, b) {
        return a - b;
      });
    }
    return arr;
  }
}
