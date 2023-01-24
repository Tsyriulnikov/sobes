//сумма элементов массива
const array1 = [1,2,3,4,5,6,7,8,9,10]
let sum1 = 0
for (let i = 0; i<array1.length; i++) {
    sum1 += array1[i]
}
console.log(sum1)



// 
const array2 = [1,2,3,4,5,6,7,8,9,10]
let sum2 = array2.reduce((acc, next)=>acc + next,0)
console.log(sum2)
