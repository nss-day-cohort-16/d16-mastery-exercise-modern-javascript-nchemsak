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
