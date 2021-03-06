(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const Robot = require('./robots.js');
let round = 0;
let robotOne = new Robot.Robot();
let robotTwo = new Robot.Robot();

/////////////////////////////////////////////////////////////
//                      ROBOTS
/////////////////////////////////////////////////////////////

$('#fightPage').hide();

$("#submit").click(function() {
  robotOne.name = $('#robot1').val();
  robotTwo.name = $('#robot2').val();
  robotOne.type = $('#robotOptions1').find(":selected").val();
  robotTwo.type = $('#robotOptions2').find(":selected").val();
  $("#names").html(`<h2>${robotOne.name} vs. ${robotTwo.name}</h2>`);

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
  stats();
});

/////////////////////////////////////////////////////////////
//                   STATS TO DOM
/////////////////////////////////////////////////////////////

function stats() {
  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);
  console.log("robotTwo.name: ", robotTwo.name);
  $("#playerOne").html(`<h2>Type: ${robotOne.name}</h2>
                          <h4>Property: ${robotOne.property}</h4>
                          <h4>Health: ${robotOne.health}</h2>
                          <h4>Attack Damage: ${robotOne.damage}</h4>`);
  $("#playerTwo").html(`<h2>Type: ${robotTwo.name}</h2>
                          <h4>Property: ${robotTwo.property}</h4>
                          <h4>Health: ${robotTwo.health}</h2>
                          <h4>Attack Damage: ${robotTwo.damage}</h4>
                          `);

  // ATTACK BUTTON CLICK
  $('#attack').click(() => {
    attack();
  });
}

/////////////////////////////////////////////////////////////
//                    ATTACK FUNCTION
/////////////////////////////////////////////////////////////
function attack() {
  round++;
  robotOne.health = (robotOne.health) - (robotTwo.damage);
  robotTwo.health = (robotTwo.health) - (robotOne.damage);
  $("#playerOne").html(`<h2>Type: ${robotOne.name}</h2>
                          <h4>Property: ${robotOne.property}</h4><h4 class="health">Health: ${robotOne.health}</h2>
                          <h4>Attack Damage: ${robotOne.damage}</h4>`);
  $("#playerTwo").html(`<h2>Type: ${robotTwo.name}</h2>
                          <h4>Property: ${robotTwo.property}</h4><h4 class="health">Health: ${robotTwo.health}</h2>
                          <h4>Attack Damage: ${robotTwo.damage}</h4>`);


  console.log("robotOne.health: ", robotOne.health);
  console.log("robotTwo.health: ", robotTwo.health);

  if (robotOne.health <= 0 && robotTwo.health > 0) {
    console.log("RobotTwo Won!!");
    $("#playerOne").html(`<h4>${robotOne.name} LOST :(</h4>`);
    $("#playerTwo").html(`<h4>${robotTwo.name} WON!!</h4>`);
  } else if (robotTwo.health <= 0 && robotOne.health > 0) {
    console.log("RobotOne Won!!");
    $("#playerOne").html(` <h4>${robotOne.name} WON!!!</h4>`);
    $("#playerTwo").html(`<h4>${robotTwo.name} LOST :(</h4>`);
  } else if (robotOne.health && robotTwo.health > 0) {
    console.log("keep fighting!");
  } else if (robotOne.health && robotTwo.health < 0) {
    $("#playerOne").html(`<h4>BOTH ROBOTS DEAD!!</h4>`);
    $("#playerTwo").html(`<h4>BOTH ROBOTS DEAD!!</h4>`);
    console.log("Both Robots dead");
  }

  console.log("round: ", round);
}

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

},{}]},{},[1]);
