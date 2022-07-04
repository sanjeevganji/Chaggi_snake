var num = Math.floor(Math.random() * 10) + 1;
document.querySelector(".body").classList.add("bg" + num);
let foodSound = new Audio("../sounds/eat.mp3");
let gameOverSound = new Audio("../sounds/game_over.mp3");
foodSound.play();