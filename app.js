const questionSqreen = document.querySelector(".question-sqreen");
const answerField = document.querySelector(".answer-field");

const questions = [{
    question: "What is 2 + 2?",
    answers: [{ text: "4", correct: true }, { text: "0", correct: false }, { text: "8", correct: false }, { text: "44", correct: false }]
}, {
    question: "Who has the most popular Instagram?",
    answers: [{ text: "Rhiana", correct: false }, { text: "MC Zipula", correct: false }, { text: "Conor McGregor", correct: false }, { text: "Cristiano Ronaldo", correct: true }]
}, {
    question: "The most biggest country in the world?",
    answers: [{ text: "Vatican", correct: false }, { text: "Japan", correct: false }, { text: "Russia", correct: true }, { text: "Spain", correct: false }]
}, {
    question: "Who sings : 'Женщина не танцую, женщина я не танцую'",
    answers: [{ text: "Philip Kirkorov", correct: false }, { text: "Travis Scott", correct: false }, { text: "Adele", correct: false }, { text: "Stas Kostyshkin", correct: true }]
}, {
    question: "The fastes man alive",
    answers: [{ text: "Usein Bolt", correct: true }, { text: "John Cena", correct: false }, { text: "Donald Trump", correct: false }, { text: "Lionel Messi", correct: false }]
}, {
    question: "The best football player in history",
    answers: [{ text: "Pele", correct: false }, { text: "Lionel Messi", correct: false }, { text: "Cristiano Ronaldo", correct: true }, { text: "Maradona", correct: false }]
}, {
    question: "Who is the stongest man in the WORLD?",
    answers: [{ text: "Eric Davidich", correct: true }, { text: "Mark Hery", correct: false }, { text: "Vasyl Virastyk", correct: true }, { text: "Arnold Schwarzenegger", correct: false }]
}, {
    question: "2 + 2 * 2",
    answers: [{ text: "44", correct: false }, { text: "8", correct: false }, { text: "6", correct: true }, { text: "24", correct: false }]
}, {
    question: "Lucky question, choose any answer",
    answers: [{ text: "And his name is John Cena", correct: true }, { text: "Who is the boss", correct: true }, { text: "See you later", correct: true }, { text: "Good luck", correct: true }]
}, {
    question: "The richest man in the world",
    answers: [{ text: "Jeff Bezos", correct: true }, { text: "Donald Trump", correct: false }, { text: "Mark Elliot Zuckerberg", correct: true }, { text: "Bill Gates", correct: false }]
}
]

//Генерируем рандомный вопрос
function randomQuestion(questions) {
    return numberOfQuestions = Math.floor(Math.random() * questions.length);
}

randomQuestion(questions);

//Создаем вопрос 
function createQuestion(questions, numberOfQuestions) {
    const question = document.createTextNode(questions[numberOfQuestions].question)
    questionSqreen.appendChild(question);
}

createQuestion(questions, numberOfQuestions)

//Создаем варианты ответов
function createAnswers(questions) {
    //обходим каждый ответ масива answers
    questions[numberOfQuestions].answers.forEach(item => {
        const answersCard = document.createElement("div");
        answersCard.classList.add("answer-field__select", "card");
        const text = document.createTextNode(item.text);
        answersCard.appendChild(text);
        answersCard.setAttribute("correct", item.correct);
        answerField.appendChild(answersCard);
    })

};

createAnswers(questions, numberOfQuestions)

//Удаляем созданый вопрос из массива и со страницы
function delteQuestionFromArray(questions, numberOfQuestions) {
    questions.splice(numberOfQuestions, 1);
    console.log(numberOfQuestions, `and `, questions)
}

// delteQuestionFromArray(questions, numberOfQuestions);

//Клик на ответ
function clickAnswers() {
    const answers = document.querySelectorAll(".answer-field__select");
    answers.forEach(item => item.addEventListener("click", checkAnswer))
}
clickAnswers()

// Проверка на правильность ответа 
function checkAnswer(e) {
    if (e.target.getAttribute("correct") === "true") {
        alert("well done")
        nextQuestion(questions)
    } else {
        alert("Try again")
    }
}

//удаление ответов на отвеченый вопрос с экрана 
function clearAnswers() {
    const answers = document.querySelectorAll(".answer-field__select");
    answers.forEach(item => item.remove())
}

//удаление отвеченых вопросов с экрана  
function clearQuestion() {
    questionSqreen.innerHTML = ``;
}

//Генерация следующего вопроса если на предыдущий уже ответили  
function nextQuestion(questions) {
    clearAnswers();
    clearQuestion();
    delteQuestionFromArray(questions, numberOfQuestions);
    // endGame(questions);
    if (questions.length === 0) {
        alert("GRAC, YOU WIN")
        return
    }
    randomQuestion(questions);
    createQuestion(questions, numberOfQuestions);
    createAnswers(questions);
    clickAnswers();
};

document.querySelector("button").addEventListener("click", () => {
    location.reload()
})