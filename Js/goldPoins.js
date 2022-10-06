class goldPoints {
    
    constructor() {
        this.img = new Image()
        this.img.src = "./images/gold-points.png"
        this.x = canvas.width;
        let randomGoldPoints = Math.random() * (canvas.height - 90)
        let randomGoldPointsFinal = Math.floor(randomGoldPoints)
        this.y = randomGoldPointsFinal + 200;
        this.w = 40;
        this.h = 30;
        this.speed = 5;
    }

    drawGoldPoints = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveGoldPoints = () => {
        this.x = this.x - this.speed
    }
}