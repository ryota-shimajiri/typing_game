var questionList = ["apple", "banana", "melon", "orange"];
var randomNum = Math.floor(Math.random() * questionList.length);
document.addEventListener("keydown", function (e) {
    var keys = e.key;
    document.getElementById("test").innerHTML = keys;
    document.getElementById("questionText").innerHTML = questionList[randomNum];
});
