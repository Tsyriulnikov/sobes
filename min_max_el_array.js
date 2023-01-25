//Максимальный или минимальный элемент массива
const array2_1 = [1, 2, 3, 4, 5, 6, 7]
let max_el1 = array2_1[0]

for (let i = 1; i < array2_1.length; i++) {
    if (array2_1[i] > max_el1) {
        max_el1 = array2_1[i]
    }
}
console.log(max_el1)