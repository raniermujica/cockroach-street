class points {
    
    constructor() {
        this.img = new Image()
        this.img.src = "./images/shit-obstacle.png"
        this.x = canvas.width;
        let randomPoints = Math.random() * (canvas.height - 250)
        let randomPointsFinal = Math.floor(randomPoints)
        this.y = randomPointsFinal + 200;
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