(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let Robot = require('./robots.js');
let robotOne = new Robot.Robot();
let robotTwo = new Robot.Robot();


/////////////////////////////////////////////////////////////
//                      ROBOTS
/////////////////////////////////////////////////////////////

let j5 = Robot.j5.prototype;
let qwerty = Robot.qwerty.prototype;
let doomba = Robot.doomba.prototype;
let e5 = Robot.e5.prototype;
let bishop = Robot.bishop.prototype;
let daryl = Robot.daryl.prototype;


console.log("daryl: ", daryl);
console.log("j5: ", j5);
console.log("qwerty: ", qwerty);
console.log("doomba: ", doomba);
console.log("bishop: ", bishop);
console.log("e5: ", e5);

// console.log("robotOne: ", robotOne);
// console.log("robotTwo: ", robotTwo);

$('#fightPage').hide();


/////////////////////////////////////////////////////////////
//                      FIGHT CLICK
/////////////////////////////////////////////////////////////

$("#submit").click(function() {
  robotOne.name = $('#robot1').val();
  robotTwo.name = $('#robot2').val();
  robotOne.type = $('#robotOptions1').find(":selected").val();
  robotTwo.type = $('#robotOptions2').find(":selected").val();
  robotOne.health = $(5);
  robotTwo.health = $(5);
  console.log("robotOne.health: ", robotOne.health);

  $("#playerOne").append(`<h2>${robotOne.name}</h2>
                          <h4>Type: ${robotOne.type}</h4>
                          <h5 class="healthOne">Health: ${robotOne.health[0]}</h5>
                          <h5 class="damageOne">Attack Damage: ${robotOne.damage}</h5>`);
  $("#playerTwo").append(`<h2>${robotTwo.name}</h2>
                          <h4>Type: ${robotTwo.type}</h4>
                          <h5 class="healthTwo">Health: ${robotTwo.health}</h5>
                          <h5 class="damageTwo">Attack Damage: ${robotTwo.damage}</h5>`);
  if (robotOne.type === 'Johnny 5') {
    console.log("j5");
    console.log("robotOne: ", robotOne);
  }
  if (robotOne.type === 'Doomba') {
    console.log("doomba");
    // robotOne.prototype = new Robot.doomba();
  }
  if (robotOne.type === 'Eagle 5') {
    console.log("e5");
    // robotOne.prototype = new Robot.e5();
  }
  if (robotOne.type === 'QWERTY') {
    console.log("qwerty");
    // robotOne.prototype = new Robot.qwerty();
  }
  if (robotOne.type === 'Bishop') {
    console.log("bishop");
    // robotOne.prototype = new Robot.bishop();
  }
  if (robotOne.type === 'D.A.R.Y.L.') {
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
  console.log("robotOne: ", robotOne);
  console.log("robotTwo: ", robotTwo);
  console.log("robotOne.health: ", robotOne.health);
  console.log("robotTwo.health: ", robotTwo.health);



  $("");

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

},{}]},{},[1]);
