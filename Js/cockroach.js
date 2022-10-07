class cockroach {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/cockroach/Animacion/principal.png";

    this.x = 40;
    this.y = 400;
    this.w = 60;
    this.h = 60;
    this.speed = 35;
  }

  drawCockroach = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  forwardCockroach = () => {
    if (this.x <= canvas.width - this.w) {
      this.x = this.x + this.speed * 1.5;
      this.img.src = "./images/cockroach/Animacion/principal.png";
      let forwardSound = new Audio("./sounds/cockroach-walk.wav");
      forwardSound.volume = 0.2;
      forwardSound.play();
      forwardSound.playbackRate = 2;
    }
  };

  backCockroach = () => {
    if (this.x > 0) {
      this.x = this.x - this.speed * 1.5;
      this.img.src = "./images/cockroach/Animacion/back.png";
      let backSound = new Audio("./sounds/cockroach-walk.wav");
      forwardSound.volume = 0.2;
      backSound.play();
      backSound.playbackRate = 2;
    }
  };

  upCockroach = () => {
    if (this.y > 200) {
      this.y = this.y - this.speed * 1.5;
      this.img.src = "./images/cockroach/Animacion/up.png";
      let upSound = new Audio("./sounds/cockroach-walk.wav");
      forwardSound.volume = 0.2;
      upSound.play();
      upSound.playbackRate = 2;
    }
  };

  downCockroach = () => {
    if (this.y < canvas.height - this.h) {
      this.y = this.y + this.speed * 1.5;
      this.img.src = "./images/cockroach/Animacion/down.png";
      let downSound = new Audio("./sounds/cockroach-walk.wav");
      forwardSound.volume = 0.2;
      downSound.play();
      downSound.playbackRate = 2;
    }
  };

  drawHalfLife = () => {
    this.img.src = "./images/cockroach/crushed-cockroach.png";
  };
}
