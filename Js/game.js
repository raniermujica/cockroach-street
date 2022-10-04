class Game {
  constructor() {
    //Elementos del juego:
    //fondo movimiento
    this.backgroundMov = new background();
    //!this.background = new Image()
    //!this.background.src = "./images/acera-imagen-fondo.jpg"
    //cucaracha
    this.cockroachPlayer = new cockroachFor();

    //pisadas
    //this.stepsObs = new steps()
    this.stepsObsArr = [];
    this.pointsArr = [];
    //comida
    //alcantarillas
    this.counter = 0;

    this.isGameOn = true

  }
  //metodos o acciones del juego:
  //dibujar fondo
  //!drawBackground = () => {
  //!   ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
  //!}

  //colision de la cucaracha con las pisadas
  cockroachStepsCollision = () => {
    this.stepsObsArr.forEach((eachSteps) => {
        if (this.cockroachPlayer.x < eachSteps.x + eachSteps.w &&
            this.cockroachPlayer.x + this.cockroachPlayer.w - 10 > eachSteps.x &&
            this.cockroachPlayer.y < eachSteps.y + eachSteps.h &&
            this.cockroachPlayer.h - 15 + this.cockroachPlayer.y > eachSteps.y) {
            // ¡colisión detectada!
           // console.log("elementos colisionan") 
           this.gameOver()
        } 
    })
  };

  //colision de la cucaracha con la comida
  cockroachFoodCollision =() => {
    this.pointsArr.forEach((eachPoints) => {
        if (this.cockroachPlayer.x < eachPoints.x + eachPoints.w &&
            this.cockroachPlayer.x + this.cockroachPlayer.w > eachPoints.x &&
            this.cockroachPlayer.y < eachPoints.y + eachPoints.h &&
            this.cockroachPlayer.h + this.cockroachPlayer.y > eachPoints.y) {
            // ¡colisión detectada!
            this.foodScore() 
        } 
    })
  }

  gameOver = () => {
    //detener el juego
    this.isGameOn = false; 
    //ocultar el canva
    canvas.style.display = "none"
    //mostrar pantalla gameover
    gameOverScreen.style.display = "block"
  }
  //animacion de la cucaracha
  //colision con la comida
  //colision con la alcantarilla
  //score
  stepsEraser = () => {
    if (this.stepsObsArr.length !== 0 && this.stepsObsArr[0].x < -120) {
        this.stepsObsArr.shift()
    }
  }

  addSteps = () => {
    let randomSteps = Math.random() * (canvas.height - 90);
    let randomStepsFinal = Math.floor(randomSteps);

    if (this.counter % 150 === 0) {
      let stepsLoop = new steps(randomStepsFinal);
      this.stepsObsArr.push(stepsLoop);
    }
  };

  addPoints = () => {
    if (this.counter % 90 === 0) {
      let pointsLoop = new points();
      this.pointsArr.push(pointsLoop);
    }
  };

  foodScore = () => {
        this.pointsArr.shift()
  }

  foodEraser = () => {
    if (this.pointsArr.length !== 0 && this.pointsArr[0].x < -40) {
        this.pointsArr.shift()
    }
  }

  gameLoop = () => {
    this.counter = this.counter + 1;
    //console.log("ejecutando juego")
    //Limpiar canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    //acciones de los elementos del juego:
    //this.stepsObs.moveSteps()
    this.stepsObsArr.forEach((eachSteps) => {
      eachSteps.moveSteps();
    });
    this.addSteps();
    this.stepsEraser();
    this.foodEraser();
    this.pointsArr.forEach((eachPoints) => {
      eachPoints.movePoints();
    });
    this.addPoints();

    this.cockroachStepsCollision();
    this.cockroachFoodCollision();

    //dibujado de los elementos
    //!this.drawBackground()
    this.backgroundMov.drawBackground();
    this.cockroachPlayer.drawCockroach();
    //this.cockroachPlayerBack.drawCockroach()
    this.stepsObsArr.forEach((eachSteps) => {
      eachSteps.drawSteps();
    });
    this.pointsArr.forEach((eachPoints) => {
      eachPoints.drawPoints();
    });
    //recursion
    if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
    };
    }
    
}
