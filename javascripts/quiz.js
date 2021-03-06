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
