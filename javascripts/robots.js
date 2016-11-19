'use strict';

// Base Robot Function
let Robot = function() {
  this.type = null;
  this.health = null;
  this.damage = null;
  console.log("Robot: ", Robot);
};

////////////////////////////////////////////////////////////
//                          Constructors
/////////////////////////////////////////////////////////////

var Drone = function() {
  this.property = "aerial";
  let bottomHealth = 30;
  let topHealth = 50;
  let bottomDamage = 30;
  let topDamage = 40;
  let droneHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  let droneDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
  console.log("property: ", this.property);
  console.log("droneHealth: ", droneHealth);
  console.log("droneDamage: ", droneDamage);
};

let Bipedal = function() {
  this.property = "ground";
  let bottomHealth = 50;
  let topHealth = 70;
  let bottomDamage = 20;
  let topDamage = 30;
  let bipedalHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  let bipedalDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
  console.log("property: ", this.property);
  console.log("bipedalHealth: ", bipedalHealth);
  console.log("bipedalDamage: ", bipedalDamage);
};

let Atv = function() {
  let property = "aerial";
  let bottomHealth = 60;
  let topHealth = 90;
  let bottomDamage = 10;
  let topDamage = 20;
  let atvHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
  let atvDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
  console.log("property: ", property);
  console.log("atvHealth: ", atvHealth);
  console.log("atvDamage: ", atvDamage);
};



// Define 3 robot functions: drone, bipedal, atv
// Give each robot model a different range of health and Damage. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()]

/////////////////////////////////////////////////////////////
//                          Robots
/////////////////////////////////////////////////////////////

// ATV
let j5 = function() {
  this.name = "Johnny5";
  this.damage = "";
  this.health = "";
  this.image = "";
};
j5.prototype = new Atv();

let doomba = function() {
  this.name = "Doomba";
  this.damage = "";
  this.health = "";
  this.image = "";
};
doomba.prototype = new Atv();


// Drones
let e5 = function() {
  this.name = "Eagle 5";
  this.damage = "";
  this.health = "";
  this.image = "";
};
e5.prototype = new Drone();

let qwerty = function() {
  this.name = "QWERTY";
  this.damage = "";
  this.health = "";
  this.image = "";
};
qwerty.prototype = new Drone();


// Bipedal
let bishop = function() {
  this.name = "Bishop";
  this.damage = "";
  this.health = "";
  this.image = "";
};
bishop.prototype = new Bipedal();

let daryl = function() {
  this.name = "D.A.R.Y.L";
  this.damage = "";
  this.health = "";
  this.image = "";
};
daryl.prototype = new Bipedal();


// function drone() {
//   let property = "aerial";
//   let bottomHealth = 30;
//   let topHealth = 50;
//   let bottomDamage = 30;
//   let topDamage = 40;
//   let droneHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
//   let droneDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
//   console.log("property: ", property);
//   console.log("droneHealth: ", droneHealth);
//   console.log("droneDamage: ", droneDamage);
// }
// // drone();

// function bipedal() {
//   let property = "ground";
//   let bottomHealth = 50;
//   let topHealth = 70;
//   let bottomDamage = 20;
//   let topDamage = 30;
//   let bipedalHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
//   let bipedalDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
//   console.log("property: ", property);
//   console.log("bipedalHealth: ", bipedalHealth);
//   console.log("bipedalDamage: ", bipedalDamage);

// }
// bipedal();

// function atv() {
//   let property = "aerial";
//   let bottomHealth = 60;
//   let topHealth = 90;
//   let bottomDamage = 10;
//   let topDamage = 20;
//   let atvHealth = Math.floor(Math.random() * (topHealth - bottomHealth + 1)) + bottomHealth;
//   let atvDamage = Math.floor(Math.random() * (topDamage - bottomDamage + 1)) + bottomDamage;
//   console.log("property: ", property);
//   console.log("atvHealth: ", atvHealth);
//   console.log("atvDamage: ", atvDamage);
// }
// // atv();


// Robot();

module.exports = { Robot, Drone, Bipedal, Atv, j5, doomba, e5, daryl, bishop, qwerty };
