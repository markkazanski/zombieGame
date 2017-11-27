// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
/*
1. Generate user health and zombie health
    Zombie number to guess and damage
2. Get user guess
    Compare to zombie number, attack or take damage
3. Check for game over
4. Generate next zombie. 
5. Show gameover. 
*/

var inquirer = require("inquirer");

var questions = [
    {
        type:"list",
        name:"guess",
        message: "Attack zombie - Guess",
        choices: [1, 2, 3, 4, 5],
        default: 1
    }
];

var player = {
    health:100,
    strength:10,
    zombiesKilled:0,
    guess:undefined,
    takeDamage:function(){
        player.health -= zombie.strength;
    }
};

var zombie = {
    health:randomIntFromInterval(10,25),
    strength:randomIntFromInterval(5,20),
    secretNumber:randomIntFromInterval(1,5),
    takeDamage:function(){
        zombie.health -= player.strength;
    }
};

while(player.health > 0){ //check player is alive
    inquirer.prompt(questions).then(function(inquirerResponse){
        //inquirerResponse.name;
    });
}

function initGame(){

}

function initZombie(){
    health = randomIntFromInterval(10,25);
    strength = randomIntFromInterval(5,20);
    secretNumber = randomIntFromInterval(1,5);
    console.log("New Zombie!");
}

function nextZombie(){
    //check roll
    //check gameover
   if( zombie.secretNumber === player.guess ){
        zombie.takeDamage();
   }else{
       player.takeDamage();
   }

   if(zombie.health <= 0){ //create new zombie. 
        initZombie();
        player.zombiesKilled++;
        console.log("Zombie Killed!");
   }
}

function randomIntFromInterval(min,max){ //get random number
    return Math.floor(Math.random()*(max-min+1)+min);
}