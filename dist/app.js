(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let Robot = require('./robots.js');
let robotOne = new Robot.Robot();
let robotTwo = new Robot.Robot();
// console.log("Robot: ", Robot);
// console.log("robotOne: ", robotOne);

/////////////////////////////////////////////////////////////
//                      ROBOTS
/////////////////////////////////////////////////////////////

$('#fightPage').hide();

$("#submit").click(function() {
  robotOne.name = $('#robot1').val();
  robotTwo.name = $('#robot2').val();
  robotOne.type = $('#robotOptions1').find(":selected").val();
  robotTwo.type = $('#robotOptions2').find(":selected").val();

  $("#playerOne").append(`<h2>Name: ${robotOne.name}</h2>
                          <h4>Type: ${robotOne.type}</h4>`);
  $("#playerTwo").append(`<h2>Name: ${robotTwo.name}</h2>
                          <h4>Type: ${robotTwo.type}</h4>`);

  /////////////////////////////////////////////////////////////
  //                      robotOne
  /////////////////////////////////////////////////////////////

  if (robotOne.type === 'Johnny 5') {
    robotOne = Robot.j5;
  }
  if (robotOne.type === 'Doomba') {
    robotOne = Robot.doomba;
  }
  if (robotOne.type === 'Eagle 5') {
    robotOne = Robot.e5;
  }
  if (robotOne.type === 'QWERTY') {
    robotOne = Robot.qwerty;
  }
  if (robotOne.type === 'Bishop') {
    robotOne = Robot.bishop;
  }
  if (robotOne.type === 'D.A.R.Y.L.') {
    robotOne = Robot.daryl;
  }

  /////////////////////////////////////////////////////////////
  //                      robotTwo
  /////////////////////////////////////////////////////////////

  if (robotTwo.type === 'Johnny 5') {
    robotTwo = Robot.j5;
  }
  if (robotTwo.type === 'Doomba') {
    robotTwo = Robot.doomba;
  }
  if (robotTwo.type === 'Eagle 5') {
    robotTwo = Robot.e5;
  }
  if (robotTwo.type === 'QWERTY') {
    robotTwo = Robot.qwerty;
  }
  if (robotTwo.type === 'Bishop') {
    robotTwo = Robot.bishop;
  }
  if (robotTwo.type === 'D.A.R.Y.L.') {
    robotTwo = Robot.daryl;
  }

  $('#clear').hide();
  $('#fightPage').show();
  append();
});

/////////////////////////////////////////////////////////////
//                   APPEND STATS TO DOM
/////////////////////////////////////////////////////////////

function append() {
  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);
  $("#playerOne").append(`<h4>Health: ${robotOne.health}</h2>
                          <h4>Attack Damage: ${robotOne.damage}</h4>`);
  $("#playerTwo").append(`<h4>Health: ${robotTwo.health}</h2>
                          <h4>Attack Damage: ${robotTwo.damage}</h4>`);
}

/////////////////////////////////////////////////////////////
//                      FIGHT CLICK
/////////////////////////////////////////////////////////////

$('#attack').click(function() {
  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);



  if (robotOne.health > 0) {
    robotTwo.health = (robotTwo.health) - (robotOne.prototype.damage);
    $(".healthTwo").html(robotTwo.health);
    if (robotTwo.health < 0) {
      console.log("robotTwo lost");
    }
  } else {
    console.log("robotOne lost");
  }




});

},{"./robots.js":2}],2:[function(require,module,exports){
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


},{}]},{},[1]);
