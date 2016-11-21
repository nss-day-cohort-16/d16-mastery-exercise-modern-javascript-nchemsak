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


let Drone = function() {
  let droneBottomHealth = 80;
  let droneTopHealth = 90;
  let droneBottomDamage = 10;
  let droneTopDamage = 15;
  this.health = Math.floor(Math.random() * (droneTopHealth - droneBottomHealth + 1)) + droneBottomHealth;
  this.damage = Math.floor(Math.random() * (droneTopDamage - droneBottomDamage + 1)) + droneBottomDamage;
  this.property = "Aerial";
};
Drone.prototype = new Robot();

let BiPedal = function() {
  let biBottomHealth = 70;
  let biTopHealth = 80;
  let biBottomDamage = 5;
  let bitTopDamage = 10;
  this.health = Math.floor(Math.random() * (biTopHealth - biBottomHealth + 1)) + biBottomHealth;
  this.damage = Math.floor(Math.random() * (bitTopDamage - biBottomDamage + 1)) + biBottomDamage;
  this.property = "Ground";
};
BiPedal.prototype = new Robot();

let ATV = function() {
  let atvBottomHealth = 50;
  let atvTopHealth = 70;
  let atvBottomDamage = 15;
  let atvTopDamage = 20;
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

// console.log("j5: ", j5);

let doomba = new ATV();
doomba.name = "Doomba";
// console.log("doomba: ", doomba);


// Drone types

let qwerty = new Drone();
qwerty.name = "Qwerty";
// console.log("qwerty: ", qwerty);

let e5 = new Drone();
e5.name = "Eagle 5";
// console.log("e5: ", e5);

// BiPedal Types

let bishop = new BiPedal();
bishop.name = "Bishop";
// console.log("bishop: ", bishop);

let daryl = new BiPedal();
daryl.name = "D.A.R.Y.L.";
// console.log("daryl: ", daryl);


module.exports = { Robot, Drone, BiPedal, ATV, j5, doomba, e5, daryl, bishop, qwerty };
// module.exports = { Robot };
