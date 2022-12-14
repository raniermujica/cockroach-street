// VARIABLES //
const canvas = document.querySelector("#my-canvas");
const canvaSection = document.querySelector("#game-screen");
const ctx = canvas.getContext("2d");
const splashScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#game-over");
const restartBtn = document.querySelector("#restart-btn");
const scoreMarker = document.querySelector("#Score");
const scoreHealth = document.querySelector("#health-player");
const genericMusic = document.querySelector("#generic-audio");

let gameClass;
let playerClass;
let newMusic = new Audio("./sounds/generic-music.mp3");
newMusic.volume = 0.1;

// MAIN FUNCTIONS //

const startGame = () => {
  splashScreen.style.display = "none";

  canvas.style.display = "flex";
  //scoreMarker = "inline"
  canvaSection.style.display = "flex";

  gameOverScreen.style.display = "none";

  gameClass = new Game();
  //console.log(gameClass)
  gameClass.gameLoop();

  newMusic.volume = 0.1;
  newMusic.play();
};

const playerMove = () => {
  playerClass = new cockroachFor();
  gameClass = new Game();

  if ((gameClass.cockroachStepsCollision().playerOn = false)) {
    playerClass.speed = 0;
  }
};

genericMusic.play();

// ADDEVENTLISTENERS //

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    gameClass.cockroachPlayer.forwardCockroach();
  } else if (event.code === "ArrowLeft") {
    gameClass.cockroachPlayer.backCockroach();
  } else if (event.code === "ArrowUp") {
    gameClass.cockroachPlayer.upCockroach();
  } else if (event.code === "ArrowDown") {
    gameClass.cockroachPlayer.downCockroach();
  }
});

restartBtn.addEventListener("click", startGame);
