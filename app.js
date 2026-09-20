const form = document.querySelector("#quizForm");

const output = document.querySelector("#out");

const progressFill =
    document.querySelector("#progressFill");

const progressText =
    document.querySelector("#progressText");

const currentQuestion =
    document.querySelector("#currentQuestion");

const resultTitle =
    document.querySelector("#resultTitle");

const resultMessage =
    document.querySelector("#resultMessage");

const scoreNumber =
    document.querySelector("#scoreNumber");

const resultIcon =
    document.querySelector("#resultIcon");

const restartBtn =
    document.querySelector("#restartBtn");



const TOTAL_QUESTIONS = 5;

let selectedQuestions = [];

let correctAnswers = {};



/*
    Start quiz
*/

function startQuiz() {

    selectedQuestions = getRandomQuestions();

    correctAnswers = {};

    form.innerHTML = "";

    output.classList.add("hidden");

    renderQuestions();

    createSubmitButton();

    updateProgress();

}



/*
    Create all questions
*/

function renderQuestions() {

    selectedQuestions.forEach((question, index) => {

        const questionContainer =
            document.createElement("div");

        questionContainer.className = "question";


        /*
            Question number
        */

        const questionNumber =
            document.createElement("div");

        questionNumber.className =
            "question-number";

        questionNumber.textContent =
            `Question ${index + 1}`;

        questionContainer.appendChild(
            questionNumber
        );


        /*
            Question text
        */

        const questionText =
            document.createElement("p");

        questionText.textContent =
            question.question;

        questionContainer.appendChild(
            questionText
        );


        /*
            Options container
        */

        const optionsContainer =
            document.createElement("div");

        optionsContainer.className = "options";


        /*
            Store correct answer
        */

        correctAnswers[`q${index + 1}`] =
            question.answer;


        /*
            Create options
        */

        question.options.forEach((option) => {

            const label =
                document.createElement("label");

            label.className =
                "option-label";


            const input =
                document.createElement("input");

            input.type = "radio";

            input.name = `q${index + 1}`;

            input.value = option;


            const text =
                document.createTextNode(option);


            label.appendChild(input);

            label.appendChild(text);

            optionsContainer.appendChild(label);


            /*
                Update progress whenever
                user selects an answer
            */

            input.addEventListener(
                "change",
                updateProgress
            );

        });


        questionContainer.appendChild(
            optionsContainer
        );


        form.appendChild(
            questionContainer
        );

    });

}



/*
    Create Submit button
*/

function createSubmitButton() {

    const button =
        document.createElement("button");

    button.type = "submit";

    button.className =
        "submit-btn";

    button.textContent =
        "Submit Quiz";


    form.appendChild(button);

}



/*
    Update progress
*/

function updateProgress() {

    let answered = 0;


    for (
        let i = 1;
        i <= TOTAL_QUESTIONS;
        i++
    ) {

        const selected =
            document.querySelector(
                `input[name="q${i}"]:checked`
            );


        if (selected) {
            answered++;
        }

    }


    const percentage =
        (answered / TOTAL_QUESTIONS) * 100;


    progressFill.style.width =
        `${percentage}%`;


    progressText.textContent =
        `${answered} / ${TOTAL_QUESTIONS} answered`;

}



/*
    Submit quiz
*/

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formData =
            new FormData(form);


        let score = 0;


        /*
            Check every question
        */

        for (
            let i = 1;
            i <= TOTAL_QUESTIONS;
            i++
        ) {

            const selectedAnswer =
                formData.get(`q${i}`);


            if (
                selectedAnswer &&
                selectedAnswer ===
                correctAnswers[`q${i}`]
            ) {

                score++;

            }

        }


        showResult(score);

    }
);



/*
    Show result
*/

function showResult(score) {

    scoreNumber.textContent =
        score;


    /*
        Result messages
    */

    if (score === 5) {

        resultIcon.textContent = "🏆";

        resultTitle.textContent =
            "Perfect Score!";

        resultMessage.textContent =
            "Amazing! You got every question correct.";

    }

    else if (score >= 4) {

        resultIcon.textContent = "🔥";

        resultTitle.textContent =
            "Excellent Work!";

        resultMessage.textContent =
            "Great cricket knowledge! Almost perfect.";

    }

    else if (score >= 3) {

        resultIcon.textContent = "👏";

        resultTitle.textContent =
            "Good Job!";

        resultMessage.textContent =
            "Nice attempt. Keep improving your cricket knowledge.";

    }

    else if (score >= 1) {

        resultIcon.textContent = "💪";

        resultTitle.textContent =
            "Keep Practicing!";

        resultMessage.textContent =
            "You have a good start. Try the quiz again.";

    }

    else {

        resultIcon.textContent = "🏏";

        resultTitle.textContent =
            "Better Luck Next Time!";

        resultMessage.textContent =
            "Don't worry. Try again and improve your score.";

    }


    /*
        Hide form
    */

    form.classList.add("hidden");


    /*
        Show result
    */

    output.classList.remove("hidden");


    /*
        Scroll to result
    */

    output.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/*
    Restart quiz
*/

restartBtn.addEventListener(
    "click",
    function () {

        form.classList.remove("hidden");

        startQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/*
    Start the quiz
*/

startQuiz();