const questionList = ["apple", "banana", "melon", "orange", "grape", "coconut", "strawberry"], 
      startBtn = document.getElementById("start");
let randomNum = Math.floor(Math.random() * questionList.length),
    textLength:number = questionList[randomNum].length,
    currentPosition:number = 0,
    startFlg:boolean = false;

startBtn.addEventListener("click", start);

function start() {
    init();
    startFlg = true;
    document.getElementById("questionText").innerHTML = questionList[randomNum];
}

document.addEventListener("keydown", (e) => {

    if (startFlg === false) {
        return;
    }
    
    const key = e.key,
          questionText = questionList[randomNum];

    if(key === questionText.charAt(currentPosition)) {
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