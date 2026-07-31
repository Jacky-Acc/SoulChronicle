console.log("SOULCHRONICLE MAIN VERSION 003");


import GameEngine from "./src/engine/GameEngine.js";
import LoadingScene from "./src/scenes/LoadingScene.js";


const canvas = document.getElementById("gameCanvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const game = new GameEngine(canvas);


game.sceneManager.changeScene(
    new LoadingScene(game)
);


game.start();