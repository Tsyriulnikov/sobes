// const array3_1 = new Array([12,2,3,4,15,6,7,8,9,10,1,5])
const array3_1 = [12,2,3,4,15,6,7,8,9,10,1,5]
array3_1.sort((x1, x2)=>{
    if (x1<x2)  {return -1}
    if (x1===x2) {return 0}
    return 1

})
console.log(array3_1)