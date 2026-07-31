import Player from "../entities/Player.js";



export default class GameScene{


    constructor(game){


        this.game = game;


        this.player = null;


    }





    init(){


        console.log(
            "World Loaded"
        );



        this.player =
        new Player(
            400,
            300
        );


    }





    update(deltaTime){


        this.player.update();


    }





    render(ctx){



        // 背景

        ctx.fillStyle="#3a7d44";


        ctx.fillRect(

            0,

            0,

            this.game.canvas.width,

            this.game.canvas.height

        );



        // 地面装饰

        ctx.fillStyle="#2d5f34";


        for(
            let x=0;
            x<this.game.canvas.width;
            x+=64
        ){


            for(
                let y=0;
                y<this.game.canvas.height;
                y+=64
            ){


                ctx.fillRect(
                    x,
                    y,
                    2,
                    2
                );


            }


        }



        this.player.render(ctx);



    }



}