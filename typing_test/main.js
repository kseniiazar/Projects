const btnLevel1 = document.querySelector('#level_1');
const btnLevel2 = document.querySelector('#level_2');
const btnLevel3 = document.querySelector('#level_3');
const btnLevel4 = document.querySelector('#level_4');
const btnLevel5 = document.querySelector('#level_5');

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
let originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];
let interval;
let timerRunning = false;

//choose complexity of the task
btnLevel1.addEventListener('click', () => {
    originText.innerHTML = 'hello my friend';
})

btnLevel2.addEventListener('click', () => {
    originText.innerHTML = 'Hello! Nice weather today! Are you excited to try more complicated task?';
})

btnLevel3.addEventListener('click', () => {
    originText.innerHTML = 'One day Jimmy Westfielder was walking home from school and saw a big, brown dog walking behind him.';
})

btnLevel4.addEventListener('click', () => {
    originText.innerHTML = 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.';
})

btnLevel5.addEventListener('click', () => {
    originText.innerHTML = 'JCVI-syn3A, a robust minimal cell with a 543 kbp genome and 493 genes, provides a versatile platform to study the basics of life. Using the vast amount of experimental information available on its precursor, Mycoplasma mycoides capri, we assembled a near-complete metabolic network with 98% of enzymatic reactions supported by annotation or experiment. ';
})

// Add leading zero to numbers 9 or below (purely for aesthetics):
const leadingZero = (time) => {
    if (time <= 9) {
        time = '0' + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
const runTimer = () => {
    let currentTime = leadingZero(timer[0]) + ':' + leadingZero(timer[1]) + ':' + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor(timer[3]/100/60);
    timer[1] = Math.floor(timer[3]/100 - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
const spellCheck = () => {
    let textEntered = testArea.value;
    let originTextMatch = originText.innerHTML.substring(0, textEntered.length);

    if (textEntered == originText.innerHTML) {
        testWrapper.style.borderColor = 'green';
        clearInterval(interval);
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = '#65CCf3';
        } else {
            testWrapper.style.borderColor = '#E95D0F';
        }
    }

}

// Start the timer:
const start = () => {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 100);
    }
}

// Reset everything:
const reset = () => {
    clearInterval (interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;
    
    testArea.value = '';
    theTimer.innerHTML = '00:00:00';
    testWrapper.style.borderColor = 'grey';
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener('click', reset);