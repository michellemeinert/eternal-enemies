'use strict';

function main () {
  const mainElement = document.querySelector('main');

  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  }

  function buildSplashScreen() {
  const splashScreen = buildDom(`
  <section>
   <h1>Eternal Enemies</h1>
   <button class="start-button">Start</button>
  </section>
  `)
  const startButton = document.querySelector('.start-button');
  startButton.addEventListener('click', buildGameScreen);

  }

  function buildGameScreen() {
    console.log('game screen');
   const gameScreen = buildDom(`
   <section class="game-container">
    <canvas id="canvas"></canvas>
   </section>
   `)
   const gameContainer = document.querySelector('.game-container');

   const width = gameContainer.offsetWidth; // sets width to parent width
   const height = gameContainer.offsetHeight; // sets height to parent height

   const canvasElement = document.querySelector('canvas');
   canvasElement.setAttribute('width', width);
   canvasElement.setAttribute('height', height);
   
   const game = new Game(canvasElement);
   game.startLoop();
   game.setGameOverCallback(buildGameOverScreen);
   document.addEventListener('keydown', function (){
     console.log(event.keyCode);
     if (event.keyCode === 38){
       game.player.setDirection(-1)
     } else if (event.keyCode === 40) {
       game.player.setDirection(1)
      }
   })
   document.addEventListener('keyup', function (){
    if (event.keyCode === 38 || event.keyCode === 40){
      game.player.setDirection(0);
    } 
   })
   //setTimeout (buildGameOverScreen, 3000); // to test if the screens are connected 

  }

  function buildGameOverScreen() {
   const gameOverScreen = buildDom (`
   <section>
    <h1>Game Over</h1>
    <button class="restart-button">Restart</button>
   </section>
   `)
    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);
  }
  buildSplashScreen();
}

window.addEventListener('load', main); // only executes code once page is loaded  