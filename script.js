const compliments = [
    "Ты — моя звезда! 🌟",
    "Ты делаешь этот мир лучше! ✨",
    "Твоя улыбка — это волшебство! 😄",
    "Ты невероятна! 💕",
    "Ты — самый ценный подарок в моей жизни! 🎁",
    "С тобой каждый момент особенный! 💖",
    "Ты заставляешь мир сиять ярче! ✨"
];

const riddles = [
    { question: "Когда мы познакомились, это был день, который я запомнил навсегда. Напиши дату, когда это произошло (в формате ДД.ММ):", answer: "14.02" },
    { question: "Какой фильм мы смотрели в первый раз вместе?", answer: "Титаник" }
];

let complimentCount = 0;

function startGame() {
    document.getElementById('game').style.display = 'block';
}

function checkGuess() {
    let userGuess = document.getElementById('guess').value.toUpperCase();
    if (userGuess === 'M') {
        document.getElementById('game').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('compliment').innerText = compliments[Math.floor(Math.random() * compliments.length)];
    } else {
        document.getElementById('message').innerText = "Неверно, попробуй ещё раз!";
    }
}

function showMessage() {
    document.getElementById('encrypted-message').style.display = 'block';
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    document.getElementById('riddle').innerText = riddle.question;
}

function checkRiddle() {
    let answer = document.getElementById('riddle-answer').value;
    const correctAnswer = riddles[0].answer; // Change this if you want to match specific riddles
    if (answer === correctAnswer) {
        alert("Ты разгадала загадку! ❤️");
        document.getElementById('compliment-generator').style.display = 'block';
    } else {
        alert("Попробуй снова!");
    }
}

function generateCompliment() {
    complimentCount++;
    if (complimentCount >= 5) {
        document.getElementById('generated-compliment').innerText = "Все слова не передать, какая ты замечательная! ❤️";
    } else {
        document.getElementById('generated-compliment').innerText = compliments[Math.floor(Math.random() * compliments.length)];
    }
}

window.onload = startGame;