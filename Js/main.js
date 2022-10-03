// VARIABLES //
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")
const splashScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");

let gameClass;



// MAIN FUNCTIONS //

const startGame = () => {
   splashScreen.style.display = "none"

   canvas.style.display = "block"

   gameClass = new Game()
   //console.log(gameClass)
   gameClass.gameLoop()

}



// ADDEVENTLISTENERS //

startBtn.addEventListener("click", startGame)
window.addEventListener("keydown", (event) => {
   if (event.code === "ArrowRight") {
      gameClass.cockroachPlayer.forwardCockroach()
   } else if (event.code === "ArrowLeft") {
      gameClass.cockroachPlayer.backCockroach()
   } else if (event.code === "ArrowUp") {
      gameClass.cockroachPlayer.upCockroach()
   } else if (event.code === "ArrowDown") {
      gameClass.cockroachPlayer.downCockroach()
   }
})



