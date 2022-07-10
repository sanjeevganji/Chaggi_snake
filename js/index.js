//Bckground Change Logic
var num = Math.floor(Math.random() * 10) + 1;
document.querySelector(".body").classList.add("bg" + num);

//MAIN GAME

const musicSound = new Audio("./sounds/music.mp3");
const gameOverSound = new Audio("./sounds/game_over.mp3");
const foodSound = new Audio("./sounds/eat.mp3");
const moveSound = new Audio("./sounds/move.mp3");
let score = 0;
let inputtDir = {
  x: 0,
  y: 0,
};
let snakeArray = [
  {
    x: 13,
    y: 15,
  },
];
let food = {
  x: 12,
  y: 13,
};
let speed = 2;
let prevPaintTime = 0;
//User defined Functions

function main(currTime) {
  window.requestAnimationFrame(main);
  if ((currTime - prevPaintTime) / 1000 < 1 / speed) {
    return;
  }
  prevPaintTime = currTime;
  Game();
}
function isCollide(Sar) {
  return false;
}
function Game() {
  if (isCollide(snakeArray)) {
    gameOverSound.play();
    musicSound.play();
    inputtDir = { x: 0, y: 0 };
    alert("!!!GAME OVER!!!, PRESS ANY KEY TO PLAY AGAIN");
    snakeArray = [{ x: 13, y: 15 }];
    musicSound.play();
    score = 0;
  }
  //Food eating and regenration logic
  if (snakeArray[0].x === food.x && snakeArray[0].y === food.y) {
    snakeArray.unshift({x:snakeArray[0].x+inputtDir.x,y:snakeArray[0].y+inputtDir.y})
  }
  let board = document.querySelector("#board");
  //Snake Display
  board.innerHTML = "";
  snakeArray.forEach((e, index) => {
    var snakePiece = document.createElement("div");
    snakePiece.style.gridRowStart = e.y;
    snakePiece.style.gridColumnStart = e.x;
    if (index == 0) {
      snakePiece.classList.add("head");
    } else {
      snakePiece.classList.add("snake");
    }
    board.appendChild(snakePiece);
    //Food Display
    var foodPiece = document.createElement("div");
    foodPiece.style.gridRowStart = food.x;
    foodPiece.style.gridColumnStart = food.y;
    foodPiece.classList.add("food");
    board.appendChild(foodPiece);
  });
}

//Game Logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", function (event) {
  var inputtDir = {
    x: 0,
    y: 1,
  };
  moveSound.play();
  switch (event.key) {
    case "ArrowUp":
      inputtDir.x = 0;
      inputtDir.y = -1;
      break;
    case "ArrowDown":
      inputtDir.x = 0;
      inputtDir.y = 1;
      break;
    case "ArrowLeft":
      inputtDir.x = -1;
      inputtDir.y = 0;
      break;
    case "ArrowRight":
      inputtDir.x = 1;
      inputtDir.y = 0;
      break;
    default:
      break;
  }
});
