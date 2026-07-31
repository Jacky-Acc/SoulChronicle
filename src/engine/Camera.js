export default class Camera{


    constructor(game){


        this.game = game;


        this.x = 0;


        this.y = 0;


    }





    follow(target){


        this.x =
        target.x -
        this.game.canvas.width / 2;



        this.y =
        target.y -
        this.game.canvas.height / 2;



        if(this.x < 0)
            this.x = 0;


        if(this.y < 0)
            this.y = 0;



    }





    apply(ctx){


        ctx.translate(

            -this.x,

            -this.y

        );


    }





    reset(ctx){


        ctx.setTransform(

            1,
            0,
            0,
            1,
            0,
            0

        );


    }



}