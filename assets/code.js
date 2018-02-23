$(document).ready(function () {


    var compSelec = Math.floor(Math.random() * 30)

    var onclickAdd = Math.floor(Math.random() * 2 + 1)
    var onclickAddSec = Math.floor(Math.random() * 10)
    var onclickAddер = Math.floor(Math.random() * 6)
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    $('#winsCount').text(wins);
    $('#lostCount').text(losses);
    $('#randomNumber').text(compSelec);


    function reload() {
        compSelec = Math.floor(Math.random() * 30)
        onclickAdd = Math.floor(Math.random() * 11)
        onclickAddSec = Math.floor(Math.random() * 10)
        onclickAddер = Math.floor(Math.random() * 6)
        playerScore = 0;
        $('#playerTotal').text(playerScore);
        $('#randomNumber').text(compSelec);
    }
    function win() {
        wins++;
        $('#winsCount').text(wins);
        reload();
    }
    function lost() {
        losses++;
        $('#lostCount').text(losses);
        reload();
    }

    $('.cardsToClick').on('click', function () {
        playerScore = playerScore + onclickAdd;
        $('#playerTotal').text(playerScore);
        if (playerScore == compSelec) {
            win();
        }
        else if (playerScore > compSelec) {
            lost();
        }
    })

    $('.cardsToClick1').on('click', function () {
        playerScore = playerScore + onclickAddер;
        $('#playerTotal').text(playerScore);
        if (playerScore == compSelec) {
            win();
        }
        else if (playerScore > compSelec) {
            lost();
        }
    })

    $('.cardsToClick2').on('click', function () {
        playerScore = playerScore + onclickAddSec;
        $('#playerTotal').text(playerScore);
        if (playerScore == compSelec) {
            win();
        }
        else if (playerScore > compSelec) {
            lost();
        }
    })

  

});