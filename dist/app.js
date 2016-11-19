(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let Robot = require('./robots.js');
let robotOne = new Robot.Robot();
let robotTwo = new Robot.Robot();
$('#fightPage').hide();

$("#submit").click(function() {
  robotOne.name = $('#robot1').val();
  robotTwo.name = $('#robot2').val();
  robotOne.type = $('#robotOptions1').find(":selected").val();
  robotTwo.type = $('#robotOptions2').find(":selected").val();

  if (robotOne.type === 'j5') {
    console.log("j5");
    // robotOne.prototype = new Robot.j5();
  }
  if (robotOne.type === 'doomba') {
    console.log("doomba");
    // robotOne.prototype = new Robot.doomba();
  }
  if (robotOne.type === 'e5') {
    console.log("e5");
    // robotOne.prototype = new Robot.e5();
  }
  if (robotOne.type === 'qwerty') {
    console.log("qwerty");
    // robotOne.prototype = new Robot.qwerty();
  }
  if (robotOne.type === 'bishop') {
    console.log("bishop");
    // robotOne.prototype = new Robot.bishop();
  }
  if (robotOne.type === 'daryl') {
    console.log("daryl");
    // robotOne.prototype = new Robot.daryl();
  }
  // });

  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);
  $('#clear').hide();
  $('#fightPage').show();
});

$('#attack').click(function() {
  console.log("you clicked attack");
  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);
});

// $('#robotOptions1').change(function() {
//   console.log("hi");
// }

// var robotType1 = $('#robotOptions1').find(":selected").val();
// var robotType2 = $('#robotOptions2').find(":selected").val();
// console.log("robotType1: ", robotType1);
// console.log("robotType2: ", robotType2);


// var conceptName = $('#robotOptions1').find(":selected").text();
// console.log("conceptName: ", conceptName);
// $('select :selected').change(function(){
//   //more code
// });


// robot selection, player1
// $('#robotOptions1').find(function(event) {
//   if (event.target.innerHTML === 'j5') {
//     console.log("j5: ", j5);
//     robotOne.prototype = new Robot.j5();
//   }
//   if (event.target.innerHTML === 'doomba') {
//     console.log("doomba: ", doomba);
//     robotOne.prototype = new Robot.doomba();
//   }
//   if (event.target.innerHTML === 'e5') {
//     console.log("e5: ", e5);
//     robotOne.prototype = new Robot.e5();
//   }
//   if (event.target.innerHTML === 'qwerty') {
//     console.log("qwerty: ", qwerty);
//     robotOne.prototype = new Robot.qwerty();
//   }
//   if (event.target.innerHTML === 'bishop') {
//     console.log("bishop: ", bishop);
//     robotOne.prototype = new Robot.bishop();
//   }
//   if (event.target.innerHTML === 'daryl') {
//     console.log("daryl: ", daryl);
//     robotOne.prototype = new Robot.daryl();
//   }
// });
// // .change();

// // robot selection, player 2
// $('#robotOptions2').change(function(event) {
//   if (event.target.innerHTML === 'j5') {
//     console.log("j5: ", j5);
//     robotOne.prototype = new Robot.j5();
//   }
//   if (event.target.innerHTML === 'doomba') {
//     console.log("doomba: ", doomba);
//     robotOne.prototype = new Robot.doomba();
//   }
//   if (event.target.innerHTML === 'e5') {
//     console.log("e5: ", e5);
//     robotOne.prototype = new Robot.e5();
//   }
//   if (event.target.innerHTML === 'qwerty') {
//     console.log("qwerty: ", qwerty);
//     robotOne.prototype = new Robot.qwerty();
//   }
//   if (event.target.innerHTML === 'bishop') {
//     console.log("bishop: ", bishop);
//     robotOne.prototype = new Robot.bishop();
//   }
//   if (event.target.innerHTML === 'daryl') {
//     console.log("daryl: ", daryl);
//     robotOne.prototype = new Robot.daryl();
//   }
// });

},{"./robots.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
