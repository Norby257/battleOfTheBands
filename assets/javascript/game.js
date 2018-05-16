console.log("We are linked");


$(document).ready(function() {
    $(".image").on("click", function() {
        console.log("I've been clicked");

        //  get the exact fighter that was chosen

        var fighter = $(this).attr("fighter");
        console.log(fighter);
    })




})