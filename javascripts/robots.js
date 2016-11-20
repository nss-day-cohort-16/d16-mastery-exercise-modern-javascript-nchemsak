'use strict';

////////////////////////////////////////////////////////////
//                    Base Robot Function
/////////////////////////////////////////////////////////////

let Robot = function() {
  this.name = null;
  this.health = null;
  this.damage = null;
  this.property = null;
};


////////////////////////////////////////////////////////////
//                    Constructors
/////////////////////////////////////////////////////////////

// Define 3 robot functions: drone, bipedal, atv.
// Give each robot model a different range of health and Damage.
// For example, one model can have health of 50-80, another one 60-120, etc.


var Drone = function() {
  let droneBottomHealth = 30;
  let droneTopHealth = 50;
  let droneBottomDamage = 30;
  let droneTopDamage = 40;
  this.health = Math.floor(Math.random() * (droneTopHealth - droneBottomHealth + 1)) + droneBottomHealth;
  this.damage = Math.floor(Math.random() * (droneTopDamage - droneBottomDamage + 1)) + droneBottomDamage;
  this.property = "Aerial";
};
Drone.prototype = new Robot();

var BiPedal = function() {
  let biBottomHealth = 30;
  let biTopHealth = 50;
  let biBottomDamage = 30;
  let bitTopDamage = 40;
  this.health = Math.floor(Math.random() * (biTopHealth - biBottomHealth + 1)) + biBottomHealth;
  this.damage = Math.floor(Math.random() * (bitTopDamage - biBottomDamage + 1)) + biBottomDamage;
  this.property = "Ground";
};
BiPedal.prototype = new Robot();

var ATV = function() {
  let atvBottomHealth = 30;
  let atvTopHealth = 50;
  let atvBottomDamage = 30;
  let atvTopDamage = 40;
  this.health = Math.floor(Math.random() * (atvTopHealth - atvBottomHealth + 1)) + atvBottomHealth;
  this.damage = Math.floor(Math.random() * (atvTopDamage - atvBottomDamage + 1)) + atvBottomDamage;
  this.property = "Ground";
};
ATV.prototype = new Robot();


/////////////////////////////////////////////////////////////
//                          Robots
/////////////////////////////////////////////////////////////


// ATV types

let j5 = new ATV();
j5.name = "Johnny 5";
console.log("j5: ", j5);

let doomba = new ATV();
doomba.name = "Doomba";
console.log("doomba: ", doomba);


// Drone types

let qwerty = new Drone();
qwerty.name = "Qwerty";
console.log("qwerty: ", qwerty);

let e5 = new Drone();
e5.name = "Eagle 5";
console.log("e5: ", e5);

// BiPedal Types

let bishop = new BiPedal();
bishop.name = "Bishop";
console.log("bishop: ", bishop);

let daryl = new BiPedal();
daryl.name = "D.A.R.Y.L.";
console.log("daryl: ", daryl);


module.exports = { Robot, Drone, BiPedal, ATV, j5, doomba, e5, daryl, bishop, qwerty };
