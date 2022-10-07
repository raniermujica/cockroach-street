class background {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/fondo-completo.png";
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
    this.speed = 1.5;
  }

  drawBackground = () => {
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
  };
}
