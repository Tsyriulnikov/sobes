const arrayBubbleSort = [1, 9, 2, 5, 3, 6]
function bubbleSort(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    for (let j = 0; j < arr.lenght - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr
}
console.log(bubbleSort(arrayBubbleSort))
