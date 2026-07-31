export default class GameScene{


    constructor(game){

        this.game = game;

    }



    init(){


        console.log(
            "Game Started"
        );


    }



    update(deltaTime){



    }



    render(ctx){


        ctx.fillStyle="#1b1b1b";


        ctx.fillRect(

            0,
            0,
            this.game.canvas.width,
            this.game.canvas.height

        );



        ctx.fillStyle="white";


        ctx.font="40px Arial";


        ctx.fillText(

            "Welcome to SoulChronicle",

            80,
            120

        );


    }



}