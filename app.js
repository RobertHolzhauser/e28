let doc = document;  // my shortcut name for document
let wordArray = [];
let pos = 2  // initial position in array

function getWord() {
    // get word from the DOM
    let word = doc.getElementById("inpWord").value;

    // add word to array
    wordArray.push(word);

    // blank out the input field
    doc.getElementById("inpWord").value = "";
}

function popper() {

    // check
    for (let x = 3; x > 0; x--) {
        console.log(x);
    }

    if (wordArray.length > 0) {
        // loop through words in word Array and find a random position in the grid
        for (let i = 0; i < wordArray.length; i++) {
            let pos = getRandomInt(80);
            let w = wordArray[i];
            console.log("popper() about to add " + w);
            if (!(w == null) && !(w === null) && !(w === undefined)) {
                doc.getElementById(pos).innerHTML = w;
            }
            //
            if (w == doc.getElementById(pos).value) {
                console.log("success adding " + w);
            }
            else {
                console.log("error adding " + w);
            }
        }
    }
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// stop popping words, clear grid, and empty word array
function setStop() {
    try {
        clearGrid();
    }
    catch (err) {
        console.log("clearGrid error = " + err.message);
    }

    try {
        clearArray();
    }
    catch (err) {
        console.log("clearArray error = " + err.message);
    }
}

// set up buttons
const btnAddWord = doc.getElementById('btnAddWord');
btnAddWord.addEventListener('click', getWord);

const btnStop = doc.getElementById('btnStop');
btnStop.addEventListener('click', setStop);

const btnPopEm = doc.getElementById('btnRun');
btnPopEm.addEventListener('click', popper);

// blank out all positions in grid
function clearGrid() {
    for (let i = 1; i <= 80; i++) {
        doc.getElementById(i).innerHTML = "";
    }
}

// remove all words from array
function clearArray() {
    for (let i = wordArray.length; i > 0; i--) {
        let ez = wordArray.pop();
    }
}

