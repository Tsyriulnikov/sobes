//сортировка подсчётом
function countingSort(arr, max = testArr.length - 1) {
  const counts = new Array(max + 1).fill(0);
  arr.forEach((v) => counts[v]++);
}
