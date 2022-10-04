class life {
    
    constructor() {
        this.img = new Image()
        this.img.src = "./images/shit-obstacle.png"
        this.x = 0;
        this.y = 0;
        this.w = 80;
        this.h = 60;
    }

    drawLife = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}