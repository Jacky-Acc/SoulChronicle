import InputManager from "../managers/InputManager.js";


export default class Player{


    constructor(x,y){


        this.x = x;

        this.y = y;


        this.size = 32;


        this.speed = 3;


        this.input = new InputManager();


    }



    update(){


        if(this.input.isPressed("w")
        || this.input.isPressed("ArrowUp")){


            this.y -= this.speed;


        }



        if(this.input.isPressed("s")
        || this.input.isPressed("ArrowDown")){


            this.y += this.speed;


        }



        if(this.input.isPressed("a")
        || this.input.isPressed("ArrowLeft")){


            this.x -= this.speed;


        }



        if(this.input.isPressed("d")
        || this.input.isPressed("ArrowRight")){


            this.x += this.speed;


        }


    }





    render(ctx){


        ctx.fillStyle = "#4da6ff";


        ctx.fillRect(

            this.x,

            this.y,

            this.size,

            this.size

        );



        ctx.fillStyle="white";


        ctx.font="14px Arial";


        ctx.fillText(

            "Soul",

            this.x,

            this.y - 5

        );


    }


}