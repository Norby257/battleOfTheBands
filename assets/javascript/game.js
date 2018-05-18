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