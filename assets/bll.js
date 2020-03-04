// hides the start window - starting the test
$("#start-btn").on("click", function() {
    // goes to the test
    $("#start-window").css("display", "none");
    $("#questions-window").css("display", "block"); 
    
    createQuestionCards();

    // adding questions and answers with no display
    var quiz = createQuestionCards();
    var cardNumber = 1;    

    addQuestions(quiz);
    timerStart();
    nextCard(cardNumber, quiz);       
});

// cards initiation 
function nextCard(cardNumber, quiz) {
    var currentCardId = "#card" + cardNumber;
    var correctAnswer = "";
    var currentIndex = 0;

    if($(currentCardId)) {        

        $(currentCardId).css("display", "block");
        
        // checking the submitted answer
        $(".submit").on("click", function() {
            var selected = 0;
            currentIndex = cardNumber-1;                 
            correctAnswer = quiz[currentIndex].correct;

            // checking all the radio buttons to find the selected one                
            $("input[name='answers" + currentIndex + "']").each(function() {
                if(this.checked) {
                    selected = this.value;                    
                }
            });

            if(selected == correctAnswer) {
                if(cardNumber < quiz.length + 1) {
                    $(currentCardId).css("display", "none");
                    cardNumber += 1;
                    debugger;
                    nextCard(cardNumber, quiz);
                }
                else {
                    $(currentCardId).css("display", "none");
                    alert("End!");
                    // jumps to the scoring stage
                }
            }
            else {
                //alert("incorrect");                
                //timeReduce();
            }
           

        });
    }
    else 
        console.log("err: empty question bank");
}

function timeReduce() {
    //
}

function timerStart() {
    //
    var timer = setInterval(function() {
    var count = parseInt($('#theTarget').html());
        
        if (count !== 0) {
        $('#theTarget').html(count - 1);
        } else {
        clearInterval(timer);
        }
    }, 1000);
}

function createQuestionCards() {
    // quiz content data initiation
    var quiz = [
        {question: "What is HTML?", answers: ["Hyper Text Multiple Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "Hyper Text Madeup Language"], correct: 2},
        {question: "Question 2 text", answers: ["answer11", "answer12", "answer13", "answer14"], correct: 3},
        {question: "Question 3 text", answers: ["answer21", "answer22", "answer23", "answer24"], correct: 4}
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
        
        $("#answers-list" + currentQuestionNumber).append('<li class="list-group-item"><input id="choice' + ind + k + '" type="radio" name="answers'+ ind +'" value="' + k + '"><label for="choice' + ind +
        k + '">' + currentQ.answers[i] + '</label></li>');
    }
}


