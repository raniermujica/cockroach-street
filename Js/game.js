class Game {
    constructor() {
        //Elementos del juego:
        //fondo movimiento
        this.backgroundMov = new background()
        //!this.background = new Image()
        //!this.background.src = "./images/acera-imagen-fondo.jpg"
        //cucaracha
        this.cockroachPlayer = new cockroachFor()
        
        //pisadas
        //this.stepsObs = new steps()
        this.stepsObsArr = []
        this.pointsArr = []
        //comida
        //alcantarillas
        this.counter = 0;
    }
    //metodos o acciones del juego:
    //dibujar fondo
    //!drawBackground = () => {
    //!   ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    //!}

    //colision de la cucaracha con las pisadas
    //direccion de la cucaracha
    //animacion de la cucaracha
    //colision con la comida
    //colision con la alcantarilla
    //score

    addSteps = () => {
        if (this.counter % 150 === 0) {
            let stepsLoop = new steps()
            this.stepsObsArr.push(stepsLoop)
        }
       // if (this.stepsObsArr.length === 0) {      
       // }
    }

    addPoints = () => {
        if (this.counter % 150 === 0) {
            let pointsLoop = new points()
            this.pointsArr.push(pointsLoop)
        }
    }



    gameLoop = () => {
        this.counter = this.counter + 1
        //console.log("ejecutando juego")
        //Limpiar canvas
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
        //acciones de los elementos del juego:
        //this.stepsObs.moveSteps()
        this.stepsObsArr.forEach((eachSteps) => {
            eachSteps.moveSteps()
        })
        this.addSteps()
        this.pointsArr.forEach((eachPoints) => {
            eachPoints.movePoints()
        })
        this.addPoints()
        
        
        //dibujado de los elementos
        //!this.drawBackground()
        this.backgroundMov.drawBackground()
        this.cockroachPlayer.drawCockroach()
        //this.cockroachPlayerBack.drawCockroach()
        this.stepsObsArr.forEach((eachSteps) => {
            eachSteps.drawSteps()
        })
        this.pointsArr.forEach((eachPoints) => {
            eachPoints.drawPoints()
        })
        //recursion
        requestAnimationFrame(this.gameLoop)
    }
}