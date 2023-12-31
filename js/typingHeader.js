const titles = ["Full-Stack Developer", "React Developer", "Problem Solver", "Life-Long Learner"]

const landingHeader = document.querySelector('#heading');


function startTyping(words, htmlEl, timeDelay) {
    const cursorSpan = document.createElement('span');
    cursorSpan.id = 'cursor';
    cursorSpan.textContent = "|";

    const copyWords = [...words];
    let currentWord = '';
    let wordIndex = 0;
    let letterIndex = 1;
    let wordChangeIntervalId;

    function typeLetter() {
        if (letterIndex === currentWord.length + 1) {
            clearInterval(wordChangeIntervalId);
            setTimeout(() => {
                wordIndex++;
                
                if (wordIndex === copyWords.length) {
                    return;
                }

                currentWord = copyWords[wordIndex];

                letterIndex = 1;
                htmlEl.textContent = '';
                wordChangeIntervalId = setInterval(typeLetter, timeDelay);
            }, 2000); 
            return;
        }
        htmlEl.textContent = currentWord.slice(0, letterIndex);
        htmlEl.appendChild(cursorSpan);
        letterIndex++;
    }

    currentWord = copyWords[wordIndex];

    wordChangeIntervalId = setInterval(typeLetter, timeDelay);
}

startTyping(titles, landingHeader, 100);