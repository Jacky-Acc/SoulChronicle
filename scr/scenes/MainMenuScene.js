export default class MainMenuScene {


    constructor(game){


        this.game = game;


    }



    init(){


        console.log(
            "Main Menu Loaded"
        );


    }



    update(deltaTime){



    }



    render(ctx){


        ctx.fillStyle="#111";


        ctx.fillRect(

            0,
            0,
            this.game.canvas.width,
            this.game.canvas.height

        );



        ctx.fillStyle="white";


        ctx.font="50px Arial";


        ctx.fillText(

            "SOULCHRONICLE",

            80,
            120

        );



        ctx.font="25px Arial";


        ctx.fillText(

            "START GAME",

            100,
            220

        );


    }


}