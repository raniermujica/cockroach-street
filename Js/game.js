class Game {
  constructor() {
    //Elementos del juego:
    //fondo movimiento
    this.backgroundMov = new background();
    //!this.background = new Image()
    //!this.background.src = "./images/acera-imagen-fondo.jpg"
    //cucaracha
    this.cockroachPlayer = new cockroachFor();
    //this.lifeImage = new lifeCockroach();

    //pisadas
    //this.stepsObs = new steps()
    this.stepsObsArr = [];
    this.pointsArr = [];
    //this.sewerArr = [];
    //comida

    //alcantarillas
    this.counter = 0;

    this.score = 0;

    this.isGameOn = true;

    this.lives = 3;

    this.foodPointsOn = true;
  }
  //metodos o acciones del juego:
  //dibujar fondo
  //!drawBackground = () => {
  //!   ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
  //!}

  //colision de la cucaracha con las pisadas
  cockroachStepsCollision = () => {
    this.stepsObsArr.forEach((eachSteps, indexI, newElement) => {
      if (
        this.cockroachPlayer.x < eachSteps.x + (eachSteps.w - 10) &&
        this.cockroachPlayer.x - 10 + (this.cockroachPlayer.w - 10) >
          eachSteps.x &&
        this.cockroachPlayer.y + 15 < eachSteps.y + (eachSteps.h - 10) &&
        this.cockroachPlayer.h - 15 + this.cockroachPlayer.y > eachSteps.y
      ) {
        // ¡colisión detectada!
        // console.log("elementos colisionan")
        //this.gameOver()
        this.lives--;
        this.cockroachPlayer.drawHalfLife()
        this.foodPointsOn = false 
      }
    });
  };

  //colision de la cucaracha con la comida
  cockroachFoodCollision = () => {
    this.pointsArr.forEach((eachPoints, indexI) => {
      if (
        this.cockroachPlayer.x < eachPoints.x + eachPoints.w &&
        this.cockroachPlayer.x + this.cockroachPlayer.w > eachPoints.x &&
        this.cockroachPlayer.y < eachPoints.y + eachPoints.h &&
        this.cockroachPlayer.h + this.cockroachPlayer.y > eachPoints.y
      ) {
        // ¡colisión detectada!
        //this.foodScore()
        //console.log( this.pointsArr.indexOf(eachPoints) )
        if (this.foodPointsOn === true) {
          this.pointsArr.splice(indexI, 1);
          this.score++;
        } 
      }
    });
    //this.pointsArr.splice(indexFood, 1)
  };

  gameOver = () => {
    //detener el juego
    this.isGameOn = false;
    //ocultar el canva
    canvas.style.display = "none";
    //mostrar pantalla gameover
    gameOverScreen.style.display = "flex";
  };
  //animacion de la cucaracha
  //colision con la comida
  //colision con la alcantarilla
  //score
  /*addSewer = () => {
    let randomSewer = Math.random() * (canvas.height - 90);
    let randomSewerFinal = Math.floor(randomSewer);

    if (this.counter % 360 === 0) {
      let sewerLoop = new sewer(randomSewerFinal);
      this.sewerArr.push(sewerLoop);
    }
  }
  */

  addSteps = () => {
    let randomSteps = Math.random() * (canvas.height - 90);
    let randomStepsFinal = Math.floor(randomSteps);

    if (this.counter % 90 === 0) {
      let stepsLoop = new steps(randomStepsFinal);
      this.stepsObsArr.push(stepsLoop);
    }
  };

  addPoints = () => {
    if (this.counter % 60 === 0) {
      let pointsLoop = new points();
      this.pointsArr.push(pointsLoop);
    }
  };

  stepsEraser = () => {
    if (this.stepsObsArr.length !== 0 && this.stepsObsArr[0].x < -120) {
      this.stepsObsArr.shift();
    }
  };

  foodEraser = () => {
    if (this.pointsArr.length !== 0 && this.pointsArr[0].x < -40) {
      this.pointsArr.shift();
    }
  };

  drawLives = () => {
    ctx.font = "40px Arial";
    let livesStr = `Lives: ${this.lives}`;
    ctx.fillText(livesStr, 100, 50);
  };

  drawScore = () => {
    ctx.font = "40px Arial";
    let scoreStr = `Score: ${this.score}`;
    ctx.fillText(scoreStr, 450, 50);
  };

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
    /*this.sewerArr.forEach((eachSewer) => {
      eachSewer.moveSewer()
    })
    */
    this.addSteps();
    this.stepsEraser();
    this.foodEraser();
    this.pointsArr.forEach((eachPoints) => {
      eachPoints.movePoints();
    });
    this.addPoints();
    //this.addSewer()

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
    this.drawLives();
    this.drawScore();
    /*this.sewerArr.forEach((eachSewer) => {
      eachSewer.drawSewer();
    });
    */

    //recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
