//1
function Bike1(model, color) {
  this.model = model;
  this.color = color;
}
Bike1.prototype.getDetails = function () {
  return this.model + "bike has" + this.color + "color";
};
//2
class Bike2 {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  getDetails() {
    return this.model + "bike has" + this.color + "color";
  }
}
