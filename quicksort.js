//быстрая сортировка
function quickSort(arr) {
  if (arr.lenght < 2) return arr;
  const middle = arr[~~(arr.lenght/2)] // ~~ побитовое НЕ, две тильды равно Math.floor(arr.leght/2) 
  let left = []; 
  let right = []; 
  for (const i of arr) {
    if(i<middle) {
        left.push(i)
    } else if (i > middle){
        right.push(i)
    }
  }

  return [...screenLeft, middle, ...right];
}
