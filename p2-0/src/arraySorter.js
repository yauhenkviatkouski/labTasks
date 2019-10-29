import ArrayProcessing from './arrayProcessing';

export default class ArraySorter {
  quick(arrString, down) {
    const arr = ArrayProcessing.getArrayFromJSON(arrString);
    const sorter = (arr, down) => {
      if (arr.length === 0) return [];
      const left = [];
      const right = [];
      const base = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        if (down && arr[i] > base || !down && arr[i] < base) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return sorter(left, down).concat(base, sorter(right, down));
    };
    return sorter(arr, down);
  }

  selection(arrString, down) {
    const arr = ArrayProcessing.getArrayFromJSON(arrString);
    for (let i = 0; i < arr.length - 1; i += 1) {
      let min = i;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (down && arr[j] > arr[min] || !down && arr[j] < arr[min]) {
          min = j;
        }
      }
      const t = arr[min];
      arr[min] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  insertion(arrString, down) {
    const arr = ArrayProcessing.getArrayFromJSON(arrString);
    for (let i = 0; i < arr.length; i += 1) {
      const t = arr[i];
      let j = i - 1;
      while (j >= 0 && down && arr[j] < t || !down && arr[j] > t) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = t;
    }
    return arr;
  }

  standard(arrString, down) {
    const arr = ArrayProcessing.getArrayFromJSON(arrString);
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
