//Максимальный или минимальный элемент массива
const array2_1 = [1, 2, 3, 4, 5, 6, 7]
let max_el1 = array2_1[0]

for (let i = 1; i < array2_1.length; i++) {
    if (array2_1[i] > max_el1) {
        // max_el1 = array2_1[i]
        max_el1 = Math.max(array2_1[i],max_el1);
    }
}
console.log(max_el1)

//reduce
const array2_2 = [1,2,3,4,5,6,7,8]
let max_el2 = array2_2.reduce((acc, next) => Math.max(acc, next))
console.log(max_el2)

//sort
const array2_3 = [1,2,3,4,5,7,8,9]
array2_3.sort((x1, x2)=>x1-x2)
// let max_el3 = array2_3[array2_3.length-1]
let max_el3 = array2_3.pop()
console.log(max_el3)