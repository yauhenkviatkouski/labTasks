class ArrayProcessig {
  getArrayFromJSON(arrayString) {
    try {
      const array = JSON.parse(arrayString);
      if (!Array.isArray(array)) throw new Error;
      return array;
    } catch (e) {
      alert('It isn\'t array of numbers!');
    }
  }

  subSumN2(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    let maxSubArray = 0;
    for (let i = 0; i < array.length; i += 1) {
      for (let j = i; j < array.length; j += 1) {
        const subArray = array.slice(i, j + 1);
        const subArrayValue = subArray.reduce((sum, current) => {
          return sum + current;
        });
        if (subArrayValue > maxSubArray) {
          maxSubArray = subArrayValue;
        }
      }
    }
    return maxSubArray;
  }

  subSumN(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    let maxSubArray = 0;
    let accumulator = 0;
    for (let i = 0; i < array.length; i += 1) {
      accumulator = accumulator + array[i];
      if (accumulator < 0) {
        accumulator = 0;
      } else if (accumulator > maxSubArray) {
        maxSubArray = accumulator;
      }
    }
    return maxSubArray;
  }

  searchMin(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    return array.reduce(function(previous, item) {
      return (item < previous) ? item : previous;
    });
  }

  searchMax(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    return array.reduce(function(previous, item) {
      return (item > previous) ? item : previous;
    });
  }

  searchMedian(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    const quickSort = (arr) => {
      if (arr.length === 0) return [];
      const leftPart = [];
      const rightPart = [];
      const base = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < base) {
          leftPart.push(arr[i]);
        } else {
          rightPart.push(arr[i]);
        }
      }
      return quickSort(leftPart).concat(base, quickSort(rightPart));
    };
    const sort = quickSort(array);
    const center = sort[Math.floor(sort.length / 2)];
    if (sort.length % 2 === 1) {
      return center;
    } else {
      const centerLeft = sort[Math.floor(sort.length / 2 - 1)];
      return (centerLeft + center) / 2;
    }
  }

  selection(arrayString) {
    const array = this.getArrayFromJSON(arrayString);
    let sequence = [array[0]];
    let maxSequence = sequence;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] > array[i - 1]) {
        sequence.push(array[i]);
        if (maxSequence.length < sequence.length) {
          maxSequence = sequence;
        }
      } else {
        sequence = [array[i]];
      }
    }
    return maxSequence;
  }
}

export default ArrayProcessig;
