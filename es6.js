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
function Person4(name) {
  let object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object4 = new Person4("Sudheer");
//5
function Person5() {}
Person.prototype.name = "Sudheer";
let object5 = new Person5();

//6
class Person6 {
  constructor(name) {
    this.name = name;
  }
}
var object6 = new Person6("Sudheer");

//7
const object7 = new (function () {
  this.name = "Sudheer";
})();

//// 333 345
function a(x) {
  x++;
  return function () {
    console.log(++x);
  };
}
a(1);
a(1);
a(1);
let x = a(1);
x();
x();
x();
