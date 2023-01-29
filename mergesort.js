//сортировка слиянием
function mergeSort(arr) {

    if (arr.length < 2) return arr;
  
    const middleIndex = ~~(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
  
    return [...result, ...left, ...right];
  }
    return arr;
}
