// повернуть массив
const array4_1 = [1,2,3,4,5,6,7,8,9,10,11]
array4_1.reverse()
console.log(array4_1)

////////////////////////////////
const array4_2 = [1,2,3,4,5]
let revers = []
for (let i = array4_2.length - 1; i >= 0; i--) {
    // revers.push(array4_2[i])
    revers = array4_2.map((e, index, array) =>array[array.length - index - 1])
}
console.log(revers)
