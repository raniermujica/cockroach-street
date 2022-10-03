class cockroachFor {

    constructor() {
        this.img = new Image()
        this.img.src = "./images/cockroach/Animacion/principal.png"
        this.x = 40;
        this.y = 233;
        this.w = 60;
        this.h = 60;
        this.speed = 35;

    }

    drawCockroach = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    forwardCockroach = () => {  
        this.x = this.x + this.speed * 1.5
    }

    backCockroach = () => { 
        this.x = this.x - this.speed * 1.5
    }
    
    upCockroach = () => {
        this.y = this.y - this.speed * 1.5
    }

    downCockroach = () => {
        this.y = this.y + this.speed * 1.5
    }
    
}
