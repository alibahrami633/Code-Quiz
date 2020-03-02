var quiz = [
    {question: "What is HTML?", answers: ["Hyper Text Multiple Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "Hyper Text Madeup Language"], correct: 2},
    {question: "Question 2 text", answers: ["answer 1", "answer2", "answer3", "answer4"], correct: 3},
    {question: "Question 3 text", answers: ["answer 1", "answer2", "answer3", "answer4"], correct: 1}
];

// hides the start window - starting the test
$("#start-btn").on("click", function() {
    // goes to the test
    $("#start-window").css("display", "none");
    $("#questions-window").css("display", "block"); 
    
    // question window content initaition
    $(".question-text").html("<p>" + quiz[0].question + "</p>"); // adding the question

    // adding answers
    for(var i = 0; i < quiz[0].answers.length; i++) {
        var j = i+1;
        $(".answers-list").append('<li class="list-group-item"><input id="choice' + j + '" type="radio" name="answers" value="' + j + '"><label for="choice' + j + '">' + quiz[0].answers[i] + '</label></li>');
    }
});


