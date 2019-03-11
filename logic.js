var numberOfWords = 3;
var tableSize;
var index;
var score = 0;

var words = new BuildArray(numberOfWords);
var tableSize = 0;

words[1] = 'test1';
words[2] = 'test2';
words[3] = 'test3';

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function pickRandomWord() {
    return words[Math.ceil(Math.random() * numberOfWords)];
}

function insertText(word) {
    document.getElementById('vards').innerHTML = word;
    console.log("Added text!");
}

function changeTableSize() {
    tableSize = Math.ceil(Math.random() * 100);
    document.getElementById('tableSize').innerHTML = tableSize;
}

function setHighScore(score) {
    document.getElementById('score').innerHTML = 'Score: ' + score;
}

function doSetup() {
    word = pickRandomWord();
    insertText(word);
    changeTableSize();
    setHighScore(score);
    index = hash(word);
    console.log('Table size is: ' + tableSize);
    console.log('Index is: ' + index);
}


function hash(word) {
    var sum = 0;
    for (const c of word) {
        sum += c.charCodeAt(0);
    }
    console.log('Sum is: ' + sum);
    return sum % tableSize;
}

function checkAnswer() {
    var answer = document.getElementById('atbilde').value
    console.log('Answer: ' + answer + ' index: ' + index);
    var value = answer == index;
    console.log('The answer is: ' + value);

    var f = document.getElementById('correct');
    if (value) {
        score++;
        f.innerHTML = 'Correct';
        f.style.color = 'Green';
    } else {
        f.innerHTML = 'Wrong';
        f.style.color = 'Red';
    }

    //Restart

    doSetup();
}