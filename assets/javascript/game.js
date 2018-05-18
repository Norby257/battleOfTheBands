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
    //  functions 

var showCharacters = function(character ,renderArea) {
    var charDiv = $(`<div class='character' data-name=' ${character.name} >`);
    var charName = $(`<div clas='character-name'>`).text(character.name);
    var charImage = $(`<img alt='image' class='character-image'>`).attr(`src`, character.imageUrl);
    var charHealth = $(`<div class='character-health'>`).text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv)
};


var startGame = function() {
    for (var key in characters) {
        showCharacters(characters[key], `#characters-selection`);
    }
};


    startGame();

    // updateCharacter();





    $(".image").on("click", function() {
        console.log("I've been clicked");

        //  get the exact fighter that was chosen

        var fighter = $(this).attr("fighter");
        console.log(fighter);

        //  variables 

        var hitPoints;
        var attackPoints;
        var counterAttackpoints;
    })




})