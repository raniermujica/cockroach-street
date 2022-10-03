class steps {

    constructor(yParam) {
        this.img = new Image()
        this.img.src = "./images/pasos-obstaculos.png"
        this.x = canvas.width;
        
        this.y = yParam;
        this.w = 120;
        this.h = 90;
        this.speed = 5;
    }

    drawSteps = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveSteps = () => {
        this.x = this.x - this.speed
    }
}