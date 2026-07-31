export default class Text{


    constructor(
        text,
        x,
        y,
        size
    ){


        this.text=text;


        this.x=x;


        this.y=y;


        this.size=size;


    }



    render(ctx){


        ctx.fillStyle="white";


        ctx.font=
        `${this.size}px Arial`;



        ctx.fillText(

            this.text,

            this.x,

            this.y

        );


    }


}