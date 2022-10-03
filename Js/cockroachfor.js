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
        if (this.x < (canvas.width - this.w)) {
            this.x = this.x + this.speed * 1.5
        }  
    }

    backCockroach = () => { 
        if (this.x > 0) {
            this.x = this.x - this.speed * 1.5
        }   
    }
    
    upCockroach = () => {
        if (this.y > 0) {
            this.y = this.y - this.speed * 1.5
        }  
    }

    downCockroach = () => {
        if (this.y < (canvas.height - this.h)) {
            this.y = this.y + this.speed * 1.5
        }
    }
    
}
