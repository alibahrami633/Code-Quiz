// hides the start window - starting the test
$("#start-btn").on("click", function() {
    // goes to the test
    $("#start-window").css("display", "none");
    $("#questions-window").css("display", "block"); 
    
    createQuestionCards();

    // adding questions and answers with no display
    var quiz = createQuestionCards();
    addQuestions(quiz);
    

    // first question initiation
    if( $("#card1") ) {
        $("#card1").css("display", "block");
        
        var correctAnswer = quiz[0].correct;
        $(".submit").on("click", function(){
            var chosen;
            $("input[name='answers0']").each(function() {
                if(this.checked) chosen = this.value;                    
            });
            if(chosen == correctAnswer) 
                // alert("Correct");
                nextCard();
            else 
                alert("incorrect");
        }); // continue the code from here ...
    }
    else 
        console.log("err: empty question bank");
});

function nextCard() {
    // 
}

function createQuestionCards() {
    // quiz content data initiation
    var quiz = [
        {question: "What is HTML?", answers: ["Hyper Text Multiple Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "Hyper Text Madeup Language"], correct: 2},
        {question: "Question 2 text", answers: ["answer11", "answer12", "answer13", "answer14"], correct: 3},
        {question: "Question 3 text", answers: ["answer21", "answer22", "answer23", "answer24"], correct: 1}
    ];
    return quiz;    
}

// question window content initiation
function addQuestions(quiz) {
    for(var i = 0; i < quiz.length; i++) {
        var currentQuestionNumber = i + 1;
        
        $("#questions-window").append('<section id="card' + currentQuestionNumber +'" class="col-sm top-margin hidden"><article class="row card"><div class="card-header">Question' + currentQuestionNumber +'</div><div class="card-body question-text"></div><div class="answer-text text-left"><div class="card"><ul id="answers-list'+ currentQuestionNumber +'" class="list-group list-group-flush"></ul></div></div><div class="card-footer"><button id="submit'+ currentQuestionNumber +'" type="button" class="btn btn-primary submit">Submit the Answer</button></div></article></section>');

        addAnswers(quiz[i], i, currentQuestionNumber);        
    } 
}

// adding answers
function addAnswers(currentQ, ind, currentQuestionNumber) {    
    for(var i = 0; i < currentQ.answers.length; i++) {
        var k = i + 1;
        
        $("#answers-list" + currentQuestionNumber).append('<li class="list-group-item"><input id="choice' + k + '" type="radio" name="answers'+ ind +'" value="' + k + '"><label for="choice' + k + '">' + currentQ.answers[i] + '</label></li>');
    }
}


