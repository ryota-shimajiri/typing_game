var questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"], startBtn = document.getElementById("start");
var randomNum = Math.floor(Math.random() * questionList.length), textLength = questionList[randomNum].length, currentPosition = 0, startFlg = false;
startBtn.addEventListener("click", start);
function start() {
    init();
    startFlg = true;
    document.getElementById("questionText").innerHTML = questionList[randomNum];
}
document.addEventListener("keydown", function (e) {
    if (startFlg === false) {
        return;
    }
    var key = e.key, questionText = questionList[randomNum];
    if (key === questionText.charAt(currentPosition)) {
        currentPosition++;
        document.getElementById("questionText").innerHTML = questionText.substring(currentPosition, textLength);
        if (currentPosition === textLength) {
            init();
            document.getElementById("questionText").innerHTML = questionList[randomNum];
        }
    }
});
function init() {
    randomNum = Math.floor(Math.random() * questionList.length),
        textLength = questionList[randomNum].length;
    currentPosition = 0;
}
