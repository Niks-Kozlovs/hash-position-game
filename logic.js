var numberOfWords = 25;
var tableSize;
var index;
var score = 0;

var words = new BuildArray(numberOfWords);
var tableSize = 0;

words[1] = 'Smoke';
words[2] = 'Taxi';
words[3] = 'Harbor';
words[4] = 'Obstacle';
words[5] = 'Rally';
words[6] = 'Appreciate';
words[7] = 'Egg';
words[8] = 'Other';
words[9] = 'Asylum';
words[10] = 'Competition';
words[11] = 'Inject';
words[12] = 'Nun';
words[13] = 'Fox';
words[14] = 'Visit';
words[15] = 'Provide';
words[16] = 'Reinforce';
words[17] = 'Wage';
words[18] = 'Mind';
words[19] = 'Station';
words[20] = 'Closed';
words[21] = 'Prosecution';
words[22] = 'Behead';
words[23] = 'Blank';
words[24] = 'Anxiety';
words[25] = 'Unlike';

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
}


function hash(word) {
    var sum = 0;
    for (const c of word) {
        sum += c.charCodeAt(0);
    }
    return sum % tableSize;
}

function checkAnswer() {
    var answer = document.getElementById('atbilde').value
    var value = answer == index;

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