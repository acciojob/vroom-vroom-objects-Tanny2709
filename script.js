// Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
  // Call Car constructor to inherit make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Do not change the code below (for Cypress testing)
window.Car = Car;
window.SportsCar = SportsCar;
