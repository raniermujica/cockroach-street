class car {

    constructor() {
        this.img = new Image()
        this.img.src = "./images/car-array.png"
        this.x = -190;
        let randomCars = Math.random() * (canvas.height - 1000)
        let randomCarsFinal = Math.floor(randomCars)
        this.y = randomCarsFinal;
        this.w = 220;
        this.h = 170;
        this.speed = 5;
    }

    drawCars = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveCars = () => {
        this.x = this.x + this.speed
    }
}