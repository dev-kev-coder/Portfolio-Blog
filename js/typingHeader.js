const titles = ["Full-Stack Developer", "React Developer", "Problem Solver", "Life-Long Learner"]

const landingHeader = document.querySelector('#home h1');

function startTyping(words, htmlEl, timeDelay) {
    const copyWords = [...words];
    let currentWord = '';
    let wordIndex = 0;
    let letterIndex = 0;
    let wordChangeIntervalId;

    function typeLetter() {
        if (letterIndex === currentWord.length) {
            clearInterval(wordChangeIntervalId);
            setTimeout(() => {
                wordIndex++;
                if (wordIndex === copyWords.length) {
                    return;
                }
                currentWord = copyWords[wordIndex];
                letterIndex = 0;
                htmlEl.textContent = '';
                wordChangeIntervalId = setInterval(typeLetter, timeDelay);
            }, 2000); 
            return;
        }

        // Add the next letter to the html element's text content
        htmlEl.textContent += currentWord[letterIndex];
        // Move to the next letter
        letterIndex++;
    }

    // Initialize the first word
    currentWord = copyWords[wordIndex];

    // Start the interval to type letters
    wordChangeIntervalId = setInterval(typeLetter, timeDelay);
}

startTyping(titles, landingHeader, 100);