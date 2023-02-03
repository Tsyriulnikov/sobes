//определение методов
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};
console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
// 0 1 2

//создание объекта (create object instance)
//1
let object1 = new Object();
//2
let object2 = Object.create(null);
//3
let object3 = {};
//4
function Person(name) {
  let object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object4 = new Person("Sudheer");
