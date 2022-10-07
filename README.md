<h1>Cockroach Street</h1>

<h2>Descripción</h2>

<p>Cockroach-street es un juego en donde el jugador debe mover, de manera libre dentro de todo el canva, una cucaracha que se pasea en busca de comida entre una multitud de personas que aparecen desde la parte derecha de la pantalla y se mueven hacia el costado izquierdo de manera horizontal. El juego termina cuando la cucaracha es pisada, de manera reiterada hasta agotar su vida, por las personas que caminan por la calle. El objetivo del juego es recolectar la mayor cantidad de comida para la cucaracha y evitar morir en el intento.</p>

<h2>MVP (DOM - LONA)</h2>

- El juego tiene una cucaracha como protagonista.
- La cucaracha se mueve libremente dentro del canva usando las teclas de flechas del teclado.
- Las pisadas de las personas aparecen aleatoriamente desde la parte izquierda de la pantalla.
- La comida de la cucaracha aparece de manera aleatoria desde la parte izquierda de la pantalla.
- Coger la comida acumula puntos.
- Irán apareciendo bonus en forma de comida dorada que incrementan en 1 la vida de la cucaracha.

<h2>Reserva</h2>

- Mostrar el marcador final en la pantalla Game Over.
- Pausar las funciones de la cucaracha durante 2 segundos cada vez que es pisada.

<h1>Estructura de datos</h1>

<h2>Main.js</h2>

- startGame()
- music.play()

<h2>game.js</h2>

- Class Game {}
- addSteps()
- addFood()
- addGoldFood()
- cockroachStepCollision()
- foodCollision()
- goldFoodCollision()
- drawElements()
- drawScore()
- drawHealth()
- drawCars()
- gameLoop()
- gameOver()
- stepsEraser()
- foodEraser()
- goldFoodEraser()
- carsEraser()
- requestAnimationFrame()

<h2>cockroach.js</h2>

- Class cockroach{}
- drawCockroach()
- forwardCockroach()
- backCockroach()
- upCockroach()
- downCockroach()
- drawHalfLife()

<h2>background.js</h2>

- Class background{}
- drawBackground()

<h2>steps.js</h2>

- Class steps{}
- drawSteps()
- moveSteps()

<h2>points.js</h2>

- Class points{}
- drawPoints()
- movePoints()

<h2>goldPoints.js</h2>

- Class goldPoints{}
- drawGoldPoints()
- moveGoldPoints()

<h2>cars.js</h2>

- Class cars{}
- drawCars()
- moveCars()

<h1>Estados y transiciones</h1>

- Splash Screen
- Game Screen (canvas)
- Game Over Screen

<h1>Tareas</h1>

- Main - Construir el DOM
- Main - Construir las diferentes pantallas
- Main - addEventListener
- Game - Construir Canvas
- Game - Bucle de inicio
- Game - Borrar el Canvas
- Game - Actualizar el Canvas
- Cockroach - Dibujar cockroach
- Cockroach - Mover cockroach
- Steps - Dibujar steps
- Steps - Mover Steps
- Food - Dibujar food
- Food - Mover food
- GoldFood - Dibujar goldFood
- GoldFood - Mover goldFood
- Game - Comprobar colisión
- Game - Game Over

<h1>Links</h1>

<h2>Git</h2>
Repositorie <A HREF="https://github.com/raniermujica/cockroach-street"> Repositorio del juego </A>

Slides: Link a la presentación del juego <A HREF="https://www.canva.com/design/DAFOV8B-yCs/rkREwERHn7p7TgxNDwpt-A/view?utm_content=DAFOV8B-yCs&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent#1"> Slice </A>




