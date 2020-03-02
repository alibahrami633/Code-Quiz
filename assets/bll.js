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
    $(".question-text").html("<p>" + quiz[0].question + "</p>");
});

