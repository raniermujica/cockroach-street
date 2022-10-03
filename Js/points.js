class points {
    
    constructor() {
        this.img = new Image()
        this.img.src = "./images/shit-obstacle.png"
        this.x = canvas.width;
        let randomSteps = Math.random() * (canvas.height - 90)
        let randomStepsFinal = Math.floor(randomSteps)
        this.y = randomStepsFinal;
        this.w = 40;
        this.h = 30;
        this.speed = 5;
    }

    drawPoints = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    movePoints = () => {
        this.x = this.x - this.speed
    }
}