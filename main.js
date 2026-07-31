import GameEngine 
from "./src/engine/GameEngine.js";


import MainMenuScene 
from "./src/scenes/MainMenuScene.js";



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



// 创建游戏引擎

const game =
new GameEngine(canvas);



// 进入主菜单

game.sceneManager.changeScene(

    new MainMenuScene(game)

);



// 启动游戏

game.start();