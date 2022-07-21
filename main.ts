const questionList: string[] = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"];
const startBtn: HTMLElement = document.getElementById("start") as HTMLElement;

// どの文字を出すかはランダムとする
let randomNum: number = Math.floor(Math.random() * questionList.length);
let textLength: number = questionList[randomNum].length;
let currentPosition: number = 0;
let isStart: boolean = false;

startBtn.addEventListener("click", start);

function start() {
    init();
    isStart = true;

    const typingText: HTMLElement = document.getElementById("typingText") as HTMLElement;
    if (typingText === null) return;
    typingText.innerHTML = questionList[randomNum];
}

document.addEventListener("keydown", (e) => {
    if (isStart === false) return;
    typing(e);
});

function init() {
    randomNum = Math.floor(Math.random() * questionList.length);
    textLength = questionList[randomNum].length;
    currentPosition = 0;
}

function typing(e: KeyboardEvent) {
    const typingText: HTMLElement = document.getElementById("typingText") as HTMLElement;
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