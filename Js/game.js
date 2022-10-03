class Game {
    constructor() {
        //Elementos del juego:
        //fondo movimiento
        this.backgroundMov = new background()
        //!this.background = new Image()
        //!this.background.src = "./images/acera-imagen-fondo.jpg"
        //cucaracha
        this.cockroachPlayer = new cockroachFor()
        this.cockroachPlayerBack = new cockroachBack()
        //pisadas
        //comida
        //alcantarillas
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

    gameLoop = () => {
        //console.log("ejecutando juego")
        //Limpiar canvas
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
        //acciones de los elementos del juego
        
        
        
        //dibujado de los elementos
        //!this.drawBackground()
        this.backgroundMov.drawBackground()
        this.cockroachPlayer.drawCockroach()
        this.cockroachPlayerBack.drawCockroach()
        //recursion
        requestAnimationFrame(this.gameLoop)
    }
}