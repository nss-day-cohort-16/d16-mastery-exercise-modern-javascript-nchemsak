'use strict';

// Base Robot Function
let Robot = function() {
  this.type = null;
  this.health = null;
  this.damage = null;
  this.property = null;
  // console.log("Robot: ", Robot);
};

////////////////////////////////////////////////////////////
//                          Constructors
/////////////////////////////////////////////////////////////

// Define 3 robot functions: drone, bipedal, atv
// Give each robot model a different range of health and Damage. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()]

var Drone = function() {
  this.type = "Drone";
  this.property = "Aerial";
  let bottomHealth = 30;
  let topHealth = 50;
  let bottomDamage = 30;
  let topDamage = 40;
  this.health = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  this.damage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
};
Drone.prototype = new Robot();
console.log("Drone.prototype: ", Drone.prototype);

let Bipedal = function() {
  this.type = "Bipedal";
  this.property = "Ground";
  let bottomHealth = 50;
  let topHealth = 70;
  let bottomDamage = 20;
  let topDamage = 30;
  this.health = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  this.damage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
};

let Atv = function() {
  this.type = "ATV";
  this.property = "Ground";
  let bottomHealth = 60;
  let topHealth = 90;
  let bottomDamage = 10;
  let topDamage = 20;
  this.health = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  this.damage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
};


/////////////////////////////////////////////////////////////
//                          Robots
/////////////////////////////////////////////////////////////

// ATV
let j5 = function() {
  this.name = "Johnny5";
  this.damage = "AtvDamage";
  this.health = "AtvHealth";
  this.image = "";
};
j5.prototype = new Atv();
console.log("j5.prototype: ", j5.prototype);

let doomba = function() {
  this.name = "Doomba";
  this.damage = "AtvDamage";
  this.health = "AtvHealth";
  this.image = "";
};
doomba.prototype = new Atv();
console.log("doomba.prototype: ", doomba.prototype);

// Drones
let e5 = function() {
  this.name = "Eagle 5";
  this.damage = "";
  this.health = "";
  this.image = "";
};
e5.prototype = new Drone();
console.log("e5.prototype: ", e5.prototype);

let qwerty = function() {
  this.name = "QWERTY";
  this.damage = "";
  this.health = "";
  this.image = "";
};
qwerty.prototype = new Drone();
console.log("qwerty.prototype: ", qwerty.prototype);

// Bipedal
let bishop = function() {
  this.name = "Bishop";
  this.damage = "";
  this.health = "";
  this.image = "";
};
bishop.prototype = new Bipedal();
console.log("bishop.prototype: ", bishop.prototype);

let daryl = function() {
  this.name = "D.A.R.Y.L";
  this.damage = "";
  this.health = "";
  this.image = "";
};
daryl.prototype = new Bipedal();
console.log("daryl.prototype: ", daryl.prototype);

module.exports = { Robot, Drone, Bipedal, Atv, j5, doomba, e5, daryl, bishop, qwerty };
