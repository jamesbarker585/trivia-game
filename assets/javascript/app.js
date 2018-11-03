
$(document).ready(function() {

    var counter = 61;
    var intervalId;
    var questionNumber = 0
    var questionCorrect = 0
    var questionWrong = 0
    var responseArray = []
    var answerArray = ["Pacific Ocean", "center of the earth", "Australia", "Sahara", "nitrogen", "20%", "USA", "Wrangell-St. Elias", "Australia", "January"]

    $(".pageheader").hide();
    $("#subHeader").hide();
    $("#instructions").hide();
    $(".startbutton").hide();
    $(".questionPanel").hide();
    $(".theTimer").hide();
    $(".questionColumn").hide();
    $(".FinishScreen").hide();
    $(".pageheader").delay(1000).fadeIn(1000);
    $("#subHeader").delay(2500).fadeIn(1000);
    $("#instructions").delay(3500).fadeIn(1000);
    $(".startbutton").delay(3700).fadeIn(1000);

    $(".startbutton").on("click", function() {
        $(".theTimer").show();
        $("#instructions").hide();
        $(".startbutton").hide();
        $(".FinishScreen").hide();
        $(".questionPanel").delay(500).fadeIn(500);
        startGame()
    })

    function startGame() {
        intervalId = setInterval(decrement, 1000);

        function decrement() {
            counter--;
            $("#show-number").html(counter)
            if (counter === -1) {
                tally()
            }
        }

        $(".questionColumn").fadeIn(500);

        // Reset game parameters
        var questionNumber = 0
        var questionCorrect = 0
        var questionWrong = 0

        $(".finish").on("click", function() {
            tally()
        })
 
    }

    function tally() {

        var AOne = $('input:radio[name="question1"]:checked').val();
        var ATwo = $('input:radio[name="question2"]:checked').val();
        var AThree = $('input:radio[name="question3"]:checked').val();
        var AFour = $('input:radio[name="question4"]:checked').val();
        var AFive = $('input:radio[name="question5"]:checked').val();
        var ASix = $('input:radio[name="question6"]:checked').val();
        var ASeven = $('input:radio[name="question7"]:checked').val();
        var AEight = $('input:radio[name="question8"]:checked').val();
        var ANine = $('input:radio[name="question9"]:checked').val();
        var ATen = $('input:radio[name="question10"]:checked').val();

        responseArray.push(AOne, ATwo, AThree, AFour, AFive, ASix, ASeven, AEight, ANine, ATen)

        for (i = 0; i < answerArray.length; i++) {
            if (responseArray[i] === answerArray[i]) {
                questionCorrect++
            } else {
                questionWrong++
            }
        }
        
        $(".questionColumn").hide();
        $(".theTimer").hide();
        $(".FinishScreen").show();

        $("#rightResponses").html(questionCorrect)
        $("#wrongResponses").html(questionWrong)
    }
});
