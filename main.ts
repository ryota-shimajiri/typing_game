const questionList = ["apple", "banana", "melon", "orange"];
const randomNum = Math.floor(Math.random() * questionList.length);

document.addEventListener("keydown", (e) => {
    const keys = e.key;
    document.getElementById("test").innerHTML = keys;
    document.getElementById("questionText").innerHTML = questionList[randomNum];
});