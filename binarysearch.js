function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1;
  let steps = 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (list[mid] === item) {
      return `Position: ${mid}, steps: ${steps}`;
    } else if (list[mid] > item) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    steps++;
  }
  return "Not found";
}
