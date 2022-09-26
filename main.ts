const questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"];
const startBtn = document.getElementById("start");

// どの文字を出すかはランダムとする
let randomNum = Math.floor(Math.random() * questionList.length);
let textLength = questionList[randomNum].length;
let currentPosition = 0;
let isStart = false;

const start = () => {
    init();
    isStart = true;

    const typingText = document.getElementById("typingText");
    if (typingText === null) return;
    typingText.innerHTML = questionList[randomNum];
}

startBtn?.addEventListener("click", start);

document.addEventListener("keydown", (e) => {
    if (isStart === false) return;
    typing(e);
});

const init = () => {
    randomNum = Math.floor(Math.random() * questionList.length);
    textLength = questionList[randomNum].length;
    currentPosition = 0;
}

const typing = (e: KeyboardEvent) => {
    const typingText = document.getElementById("typingText");
    if (typingText === null) return;

    const questionText = questionList[randomNum];

    if (e.key === questionText.charAt(currentPosition)) {
        currentPosition++;
        // 先頭の文字を切り取る
        typingText.innerHTML = questionText.substring(currentPosition, textLength);

        if (currentPosition === textLength) {
            // 最後の文字を打ち終えたら
            init();
            typingText.innerHTML = questionList[randomNum];
        }
    }
}
