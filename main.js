var questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"];
// どの文字を出すかはランダムとする
var randomNum = Math.floor(Math.random() * questionList.length), textLength = questionList[randomNum].length, currentPosition = 0;
var start = function () {
    init();
    var typingText = document.getElementById("typingText");
    if (typingText === null)
        return;
    typingText.innerHTML = questionList[randomNum];
};
var startBtn = document.getElementById("start");
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", start);
document.addEventListener("keydown", function (e) {
    typing(e);
});
var init = function () {
    randomNum = Math.floor(Math.random() * questionList.length);
    textLength = questionList[randomNum].length;
    currentPosition = 0;
};
var typing = function (e) {
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
};
