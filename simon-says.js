//Stores the random gaming sequence
let gameSeq = [];

//stores the sequence of user
let userSeq = [];

//btns array that defines the four main colors of this game
let btns = ["red", "yellow", "blue", "green"];

//Started Because the game is not started without keypressing
let started = false;

let startBtn = document.querySelector(".startBtn");

//initialize the level = 0
let level = 0;


//stores your current score 
let score = 0;

//stores high score
highScore = 0;

let h2 = document.querySelector("h2");
let overlay = document.querySelector(".overlay");


let audio1 = new Audio('music-glitch-squid-game-way-back-then-55389.mp3');

startBtn.addEventListener("click", function () {
    startBtn.classList.add("hide");
    overlay.classList.add("hide");

    audio1.play();
    audio1.loop = true;

    //Game is started after clicked on the button
    if (started == false) {
        console.log("Game is started");
        started = true;

        //the function that increments the level
        lvlUp();
    }
});

//function that flash a random button
function gameFlash(btn) {
    btn.classList.add("flash");

    //removing the flashlight instantly
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


//Flash that was created by user after click event
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

//level up function
function lvlUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];

    //randBtn stores the color name
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);

    gameFlash(randBtn);
}


//function that checks the user and gaming sequence
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(lvlUp, 1000);
            score = level * 10;
            document.querySelector("#sc").textContent = score;
        }
    } else {
        audio1.pause();
        let audio = new Audio("mixkit-retro-arcade-lose-2027.wav");
        audio.play();

        score = level * 10;
        document.querySelector("#sc").textContent = score;
        if (score > highScore) {
            highScore = score;
            document.querySelector("span").textContent = highScore;
        }
        h2.innerText = "Game Over! Press any key to restart";

        document.addEventListener("keypress", reset);
        document.querySelector("#sc").textContent = 0;
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let audio2 = new Audio("mixkit-quest-game-interface-click-1139.wav");
    audio2.play();

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    h2.innerText = "";
    lvlUp();
    audio1.currentTime = 0;
    audio1.play();
}