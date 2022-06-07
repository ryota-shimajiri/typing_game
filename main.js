var questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"], startBtn = document.getElementById("start");
var randomNum = Math.floor(Math.random() * questionList.length), textLength = questionList[randomNum].length, currentPosition = 0, startFlg = false;
startBtn.addEventListener("click", start);
function start() {
    init();
    startFlg = true;
    document.getElementById("typingText").innerHTML = questionList[randomNum];
}
document.addEventListener("keydown", function (e) {
    if (startFlg === false) {
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
    var key = e.key, typingText = questionList[randomNum];
    if (key === typingText.charAt(currentPosition)) {
        currentPosition++;
        // 先頭の文字を切り取る
        document.getElementById("typingText").innerHTML = typingText.substring(currentPosition, textLength);
        if (currentPosition === textLength) {
            // 最後の文字を打ち終えたら
            init();
            document.getElementById("typingText").innerHTML = questionList[randomNum];
        }
    }
}
