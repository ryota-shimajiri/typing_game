var questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"], startBtn = document.getElementById("start");
var randomNum = Math.floor(Math.random() * questionList.length), textLength = questionList[randomNum].length, currentPosition = 0, isStart = false;
startBtn.addEventListener("click", start);
function start() {
    init();
    isStart = true;
    var typingText = document.getElementById("typingText");
    if (typingText === null) {
        return;
    }
    typingText.innerHTML = questionList[randomNum];
}
document.addEventListener("keydown", function (e) {
    if (isStart === false) {
        return;
    }
    typing(e);
});
function init() {
    randomNum = Math.floor(Math.random() * questionList.length),
        textLength = questionList[randomNum].length;
    currentPosition = 0;
}
function typing(e) {
    var key = e.key, questionText = questionList[randomNum];
    var typingText = document.getElementById("typingText");
    if (typingText === null) {
        return;
    }
    if (key === questionText.charAt(currentPosition)) {
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
