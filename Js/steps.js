class steps {

    constructor() {
        this.img = new Image()
        this.img.src = "./images/shoes-steps.png"
        this.x = canvas.width;
        let randomSteps = Math.random() * (canvas.height - 300)
        let randomStepsFinal = Math.floor(randomSteps)
        this.y = randomStepsFinal + 200;
        this.w = 150;
        this.h = 110;
        this.speed = 8;
    }

    drawSteps = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveSteps = () => {
        this.x = this.x - this.speed
    }
}