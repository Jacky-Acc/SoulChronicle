import GameEngine 
from "./src/engine/GameEngine.js";


import LoadingScene 
from "./src/scenes/LoadingScene.js";



const canvas =
document.getElementById(
    "gameCanvas"
);



function resizeCanvas(){


    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;


}



window.addEventListener(
    "resize",
    resizeCanvas
);



resizeCanvas();



const game =
new GameEngine(canvas);



game.sceneManager.changeScene(

    new LoadingScene(game)

);



game.start();