//сортировка подсчётом
function countingSort(arr, max = testArr.length - 1) {
  const counts = new Array(max + 1).fill(0);
  arr.forEach((v) => counts[v]++);
  const result = [];
  let index = 0;
  counts.forEach((c, i) => {
    for (let j = 0; j < c; j++) {
      result[index] = i;
      index++;
    }
  });
  return result;
}
