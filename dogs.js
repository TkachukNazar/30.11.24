function Dog(name, breed, weight, speed = 0) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  let age = 0;
  this.speed = speed;

  this.setAge = function (a) {
    if (a > 0) {
      age = a;
    } else {
      alert("Цей собака, очевидно, ще не з'явився на світ...");
    }
  };

  this.getAge = function () {
    return age;
  };
  this.bark = function () {
    if (this.weight < 25) {
      alert(this.name + " сказав Тяф!");
    } else {
      alert(this.name + " сказав Гав!");
    }
  };
  this.changeSpeed = function (coef) {
    if (coef >= 0.5 && coef <= 2) {
      if (
        (this.weight < 25 && this.speed * coef <= 4) ||
        (this.weight > 25 && this.speed * coef <= 20)
      )
        this.speed *= coef;
    }
  };
  this.stop = function () {
    this.speed = 0;
  };
  this.start = function () {
    this.speed = 1;
  };
  this.toString = function () {
    return `Speed: ${this.speed}; Name: ${this.name}; Breed: ${this.breed}; Weight: ${this.weight}.`;
  };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let max = new Dog();
max.name = "Max";
max.weight = 15;

fido.setAge(10);

let dogs = [fido, fluffy, spot, max];

for (let i = 0; i < dogs.length; i++) {
  if (dogs[i] instanceof Dog) {
    alert(dogs[i]);
    console.log(dogs[i]);
    alert(`Speed: ${dogs[i].speed}`);
    dogs[i].start();
    alert(`Start. Speed: ${dogs[i].speed}`);
    for (let j = 0; j < 4; j++) {
      dogs[i].changeSpeed(2);
      alert(`Speed: ${dogs[i].speed}`);
    }
    alert(dogs[i]);
    dogs[i].stop();
    alert(`Stop. Speed: ${dogs[i].speed}`);
  }
}
