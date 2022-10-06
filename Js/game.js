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
    this.carsArr = [];
    this.goldPointsArr = [];
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

  

  internCounter = () => {
    this.counter++;
  }

  //colision de la cucaracha con las pisadas
  cockroachStepsCollision = () => {



    this.stepsObsArr.forEach((eachSteps, indexI) => {
      if (
        this.cockroachPlayer.x < eachSteps.x + (eachSteps.w - 10) &&
        this.cockroachPlayer.x - 10 + (this.cockroachPlayer.w - 10) >
          eachSteps.x &&
        this.cockroachPlayer.y + 15 < eachSteps.y + (eachSteps.h - 10) &&
        this.cockroachPlayer.h - 15 + this.cockroachPlayer.y > eachSteps.y
      ) {
        
        if (this.lives !== 1) {
          let musicCrush = new Audio("./sounds/crushed-sound.wav");
          musicCrush.play();
        }
           

          this.foodPointsOn = true
        
        let timerInter = setInterval(() => {
          this.internCounter()
        }, 1000);
        console.log(timerInter)

        if (this.timerInter === 30) {
          this.foodPointsOn = true
        }
        


        this.cockroachPlayer.drawHalfLife();
        
        this.lives--;
        this.stepsObsArr.splice(indexI, 1);
        if (this.lives === 0) {
          let musicDead = new Audio("./sounds/dead-sound.wav");
            musicDead.play();
          this.isGameOn = false
          let timerId = setTimeout(() => {
            this.gameOver()
          }, 2000);
        }
     
        
        // setTimeout(() => {
        //   this.gameOver()
        // }, 2000)
      }
    });
  };

  //COLISION CUCARACHA CON PUNTOS DORADOS
  cockroachGoldFoodCollision = () => {
    this.goldPointsArr.forEach((eachGoldPoints, indexI) => {
      if (
        this.cockroachPlayer.x < eachGoldPoints.x + eachGoldPoints.w &&
        this.cockroachPlayer.x + this.cockroachPlayer.w > eachGoldPoints.x &&
        this.cockroachPlayer.y < eachGoldPoints.y + eachGoldPoints.h &&
        this.cockroachPlayer.h + this.cockroachPlayer.y > eachGoldPoints.y
      ) {
        
        this.goldPointsArr.splice(indexI, 1)

        if (this.lives < 3) {
          let musicGoldPoints = new Audio("./sounds/goldpoints-sound.wav");
           musicGoldPoints.play();
          
          this.lives++;
        }
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

        let musicPoints = new Audio("./sounds/goldpoints-add.wav");
        musicPoints.play();
        musicPoints.playbackRate = 2;

         
        
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

    newMusic.paused();

    
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

    if (this.counter % 30 === 0) {
      let stepsLoop = new steps(randomStepsFinal);
      this.stepsObsArr.push(stepsLoop);
    }
  };

  addPoints = () => {
    if (this.counter % 40 === 0) {
      let pointsLoop = new points();
      this.pointsArr.push(pointsLoop);
    }
  };

  addGoldPoints = () => {
    if (this.counter % 600 === 0) {
      let goldPointsLoop = new goldPoints();
      this.goldPointsArr.push(goldPointsLoop);
    }
  };

  addCars = () => {
    if (this.counter % 360 === 0) {
      let carsLoop = new car();
      this.carsArr.push(carsLoop);
    }
  };

  stepsEraser = () => {
    if (this.stepsObsArr.length !== 0 && this.stepsObsArr[0].x < -120) {
      this.stepsObsArr.shift();
    }
  };

  goldFoodEraser = () => {
    if (this.goldPointsArr.length !== 0 && this.goldPointsArr[0].x < -50) {
      this.goldPointsArr.shift();
    }
  };

  foodEraser = () => {
    if (this.pointsArr.length !== 0 && this.pointsArr[0].x < -40) {
      this.pointsArr.shift();
    }
  };

  carsEraser = () => {
    if (this.carsArr.length !== 0 && this.carsArr[0].x > canvas.width) {
      this.carsArr.shift();
    }
  };



  drawLives = () => {
    ctx.font = "40px Verdana";
    ctx.strokeStyle = "#FF914D";
    ctx.lineWidth = 2;
    let livesStr = `Lives: ${this.lives}`;
    ctx.strokeText(livesStr, 100, 100);
  };

  drawScore = () => {
    ctx.font = "40px Verdana";
    ctx.strokeStyle = "#FF914D";
    ctx.lineWidth = 2;
    let scoreStr = `Score: ${this.score}`;
    ctx.strokeText(scoreStr, 430, 100);
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
    this.carsEraser();
    this.pointsArr.forEach((eachPoints) => {
      eachPoints.movePoints();
    });

    this.carsArr.forEach((eachCars) => {
      eachCars.moveCars();
    });

    this.goldPointsArr.forEach((eachGoldPoints) => {
      eachGoldPoints.moveGoldPoints();
    });

    this.addPoints();
    this.addCars();
    this.addGoldPoints();
    //this.addSewer()

    this.cockroachStepsCollision();
    this.cockroachFoodCollision();
    this.cockroachGoldFoodCollision();

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
    this.carsArr.forEach((eachCars) => {
      eachCars.drawCars();
    });
    this.goldPointsArr.forEach((eachGoldPoints) => {
      eachGoldPoints.drawGoldPoints();
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
