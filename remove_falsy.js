//удалить falsy значения
const array5_1=[7, "correct", 0, false, NaN, ""]
const notFalse = []
// const notFalse = array5_1.filter(Boolean)
for (let i = 0; i < array5_1.length; i++) {
    if (!!array5_1[i]){
        notFalse.push(array5_1[i])
    }
}
console.log(notFalse)