let tableSize = 0;
let index = 0;
let score = 0;

async function getRandomWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        if (!response.ok) throw new Error('Failed to fetch word');
        const words = await response.json();
        return words[0];  // The API returns an array with a single random word
    } catch (error) {
        console.error('Error fetching word:', error);
        return 'Fallback';  // Fallback word in case of fetch error
    }
}

function updateTextContent(id, text) {
    document.getElementById(id).textContent = text;
}

function changeTableSize() {
    tableSize = Math.ceil(Math.random() * 100);
    updateTextContent('tableSize', tableSize);
}

function setHighScore(score) {
    updateTextContent('score', `Score: ${score}`);
}

async function doSetup() {
    const word = await getRandomWord();
    updateTextContent('vards', word);
    changeTableSize();
    setHighScore(score);
    index = hash(word);
}

function hash(word) {
    return [...word].reduce((sum, c) => sum + c.charCodeAt(0), 0) % tableSize;
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('atbilde').value, 10);
    const correctElement = document.getElementById('correct');

    if (answer === index) {
        score++;
        correctElement.textContent = 'Correct!';
        correctElement.style.color = 'green';
    } else {
        correctElement.textContent = 'Wrong!';
        correctElement.style.color = 'red';
    }

    setHighScore(score);
    document.getElementById('atbilde').value = '';
    doSetup();
}

document.getElementById('checkButton').addEventListener('click', checkAnswer);
document.getElementById('atbilde').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') checkAnswer();
});

document.addEventListener('DOMContentLoaded', doSetup);
