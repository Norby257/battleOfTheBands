console.log("We are linked");
$(document).ready(function() {
    //  object to hold the characters 
    var characters = {
        "Envy Adams": {
            name: "Envy Adams",
            health: 140,
            attack: 12,
            imageUrl: "assets/images/envy_adams.jpg",
            enemyAttackBack: 15

        },

        "Gideon": {
            name: "Gideon",
            health: 150,
            attack: 15,
            imageUrl: "assets/images/gideon.jpg",
            enemyAttackBack: 20

        },

        "Scott Pilgrim": {
            name: "Scott Pilgrim",
            health: 130,
            attack: 17,
            imageUrl: "assets/images/scott_pilgrim.jpg",
            enemyAttackBack: 25
        },

        "Ramona Flowers": {
            name: "Ramona Flowers",
            health: 120, 
            attack: 20,
            imageUrl: "assets/images/ramona_flowers.jpg",
            enemyAttackBack: 30

        }



    }

    console.log(characters);

    //  other variables here 
    //  keeping track of fighter / defender, turns, and ko's

    var attacker;

    var combatants = [];

    var defender;

   var turnCount =1;

   var koCount = 0;

//  functions controlling how to start / re-start / stop the game 
//  use values stored in object and render them to browser
//  these are later accessed in the event handlers 
var showCharacters = function(character ,renderArea) {
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");    
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $(`<img alt='image' class='character-image'>`).attr(`src`, character.imageUrl);
    var charHealth = $(`<div class='character-health'>`).text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv)
};


var startGame = function() {
    for (var key in characters) {
        showCharacters(characters[key], "#characters-section");
    }
};


    startGame();

    // updateCharacter();
    var updateCharacter = function(charObj, areaRender) {
        $(areaRender).empty();
        showCharacters(charObj, areaRender);
    };

    var showEnemies = function(enemyArr) {
        for (var i = 0; i < enemyArr.length; i++) {
            showCharacters(enemyArr[i], "#available-to-attack-section");
        }
    }

    var showMessage = function(message) {
        var gameMessageSet = $("#game-message");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);
    };

var restartGame = function(resultMessage) {
    var restart = $("<button>Restart</button>").click(function(){
        location.reload();
    });

    //  div that holds the result message 

var gameState = $("<div>").text(resultMessage);

//  render the above to the body of hte page 

$("body").append(gameState);
$("body").append(restart);

};

//  empty the message section

var clearMessage = function() {
    var gameMessage = $("#game-message");
    gameMessage.text("");
}


//  event handlers 
//  handle when user clicks on character, store what character was selected 
$("#characters-section").on("click", ".character", function(){
    var name = $(this).attr("data-name");
    console.log(name);
})

     




    })
