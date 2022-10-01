// VARIABLES //
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")
const splashScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");



// MAIN FUNCTIONS //

const startGame = () => {
   splashScreen.style.display = "none"

   canvas.style.display = "block"

   let gameClass = new Game()
   //console.log(gameClass)
   gameClass.gameLoop()



}







// ADDEVENTLISTENERS //

startBtn.addEventListener("click", startGame)


