var questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"];
var startBtn = document.getElementById("start");
// どの文字を出すかはランダムとする
var randomNum = Math.floor(Math.random() * questionList.length);
var textLength = questionList[randomNum].length;
var currentPosition = 0;
var isStart = false;
startBtn.addEventListener("click", start);
function start() {
    init();
    isStart = true;
    var typingText = document.getElementById("typingText");
    if (typingText === null)
        return;
    typingText.innerHTML = questionList[randomNum];
}
document.addEventListener("keydown", function (e) {
    if (isStart === false)
        return;
    typing(e);
});
function init() {
    randomNum = Math.floor(Math.random() * questionList.length);
    textLength = questionList[randomNum].length;
    currentPosition = 0;
}
function typing(e) {
    var typingText = document.getElementById("typingText");
    if (typingText === null)
        return;
    var questionText = questionList[randomNum];
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
