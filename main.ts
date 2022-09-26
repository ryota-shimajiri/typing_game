const questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"];

// どの文字を出すかはランダムとする
let randomNum = Math.floor(Math.random() * questionList.length),
    textLength = questionList[randomNum].length,
    currentPosition = 0;

const start = () => {
    init();
    const typingText = document.getElementById("typingText");
    if (typingText === null) return;
    typingText.innerHTML = questionList[randomNum];
}

const startBtn = document.getElementById("start");
startBtn?.addEventListener("click", start);

document.addEventListener("keydown", (e) => {
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
