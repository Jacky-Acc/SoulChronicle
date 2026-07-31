export default class Button {


    constructor(
        text,
        x,
        y,
        width,
        height,
        callback
    ){


        this.text = text;


        this.x = x;

        this.y = y;


        this.width = width;

        this.height = height;


        this.callback = callback;


        this.hover = false;


        this.clicked = false;



        window.addEventListener(
            "mousemove",
            (event)=>{


                this.hover =
                event.clientX > this.x &&
                event.clientX < this.x + this.width &&
                event.clientY > this.y &&
                event.clientY < this.y + this.height;


            }
        );



        window.addEventListener(
            "click",
            ()=>{


                if(this.hover){


                    this.callback();


                }


            }
        );


    }



    render(ctx){



        ctx.fillStyle =
        this.hover
        ? "#d4af37"
        : "#333";



        ctx.fillRect(

            this.x,
            this.y,
            this.width,
            this.height

        );



        ctx.fillStyle = "white";


        ctx.font="28px Arial";


        ctx.textAlign="center";


        ctx.fillText(

            this.text,

            this.x + this.width / 2,

            this.y + 45

        );


        ctx.textAlign="left";


    }


}