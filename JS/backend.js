var score = 0;
var attempt = 0;
var rn = randint()
var arr = [];
arr[attempt] = rn;

function randint(){
    num = Math.ceil(Math.random() * 100);
    return num;
}

function start() {
    window.location.href = "GamePage.html";
}

function help() {
    alert(" Instructions\n\nPress Start button to begin the game.\nThe game will generate a random number.\nUser has to guess the number correctly.\nAfter the user guesses the sequence correctly, a random number is added to the sequence.\nThe level increases as the sequence is guessed correctly.\nThe sequence has to be guessed correctly in order to get to the next level.\nIf the sequence is entered incorrectly, the game ends.\nThe total score would be shown simultaneously.");
}

function restart() {
    window.location.href = "GamePage.html";
}

function exit() {
    window.location.href = "FinishPage.html";
}

function randomNum() {
    var num = document.getElementById("randomNum");
    num.innerHTML = rn;
    var button = document.getElementById("start");
    button.style.display = "none";
}

function submit() {
    var guess = document.getElementById("guess").value;
    guessstr = guess.toString();
    myArray = guess.split(" ");
    var num = document.getElementById("randomNum");
    var flag = true;
    var i = 0;

    while (i <= attempt && flag) {
        if (myArray[i] == arr[i]) {
            flag = true;
        } else {
            flag = false;
        }
        i++;
    }

    if (flag && myArray.length === attempt + 1) {
        attempt++;
    }
    else {
        alert("You entered the incorrect sequence.");
        window.location.href = "FinishPage.html";
        highScore(attempt);

    }

    var rn =  randint();
    num.innerHTML = rn;
    arr[attempt] = rn;

    var score = document.getElementById("score");
    score.innerHTML = "Score - " + attempt;

    document.getElementById("guess").value = "";

    setTimeout(hideText, 2000);
    var btn = document.getElementById("submit");
    btn.addEventListener("click", showText);

    localStorage.setItem("HS", attempt);

}


function highScore(){
    
   var hs = localStorage.getItem("HS");
   var j =  document.getElementById("high_Score")
   j.innerHTML = "Highest Score - " + hs;

}

function hideText() {
    var prob = document.getElementById("randomNum");
    prob.style.display = "none";
  }

function showText() {
    var prob = document.getElementById("randomNum");
    prob.style.display = "block";
  }