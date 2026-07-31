import MainMenuScene from "./MainMenuScene.js";


export default class LoadingScene{


    constructor(game){

        this.game = game;

        this.progress = 0;

        this.finished = false;

    }



    init(){


        console.log(
            "Loading Start"
        );


    }



    update(deltaTime){


        if(this.progress < 100){


            this.progress +=
            deltaTime * 0.05;


        }
        else{


            if(!this.finished){


                this.finished = true;


                setTimeout(()=>{


                    this.game.sceneManager.changeScene(

                        new MainMenuScene(this.game)

                    );


                },500);


            }


        }


    }



    render(ctx){


        ctx.fillStyle="#050505";


        ctx.fillRect(

            0,
            0,
            this.game.canvas.width,
            this.game.canvas.height

        );



        ctx.fillStyle="white";


        ctx.font="60px Arial";


        ctx.fillText(

            "SOULCHRONICLE",

            80,
            200

        );



        ctx.font="25px Arial";


        ctx.fillText(

            "Loading... "
            + Math.floor(this.progress)
            +"%",

            100,
            280

        );


    }



}