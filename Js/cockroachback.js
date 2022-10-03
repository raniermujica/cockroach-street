

class cockroachBack {

    constructor() {
        this.img = new Image()
        this.img.src = "./images/cockroach/Animacion/back.png"
        this.x = cockroachFor.x;
        this.y = cockroachFor.y;
        this.w = 60;
        this.h = 60;
        this.speed = 25;

    }

    drawCockroach = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    backCockroach = () => {
        this.x = this.x - this.speed
    }
}