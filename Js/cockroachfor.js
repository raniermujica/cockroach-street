class cockroachFor {

    constructor() {
        this.img = new Image()
        this.img.src = "./images/cockroach/Animacion/principal.png"
        this.x = 40;
        this.y = 233;
        this.w = 60;
        this.h = 60;
        this.speed = 25;

    }

    drawCockroach = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    forwardCockroach = () => {
        if (this.x < this.w) {
        this.x = this.x + this.speed
    }
    }

    backCockroach = () => {
        if (this.x > 0) {
        this.x = this.x - this.speed
    }
    }

    upCockroach = () => {
        if (this.y > 0) {
        this.y = this.y - this.speed
    }
    }

    downCockroach = () => {
        if (this.y < this.h) {
        this.y = this.y + this.speed
    }
    }
}