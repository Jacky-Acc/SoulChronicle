import MainMenuScene from "./MainMenuScene.js";


export default class LoadingScene{


    constructor(game){

        this.game = game;

        this.timer = 0;

        this.loaded = false;

    }



    init(){


        console.log(
            "Loading..."
        );


    }




    update(deltaTime){


        this.timer += deltaTime;



        if(this.timer > 1000 && !this.loaded){


            this.loaded = true;



            this.game.sceneManager.changeScene(

                new MainMenuScene(this.game)

            );


        }


    }





    render(){


        // 3D模式不使用2D绘制


    }



}