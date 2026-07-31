export default class Tile {


    constructor(type){


        this.type = type;


    }



    render(ctx,x,y,size){



        switch(this.type){


            case "grass":

                ctx.fillStyle="#4caf50";

                break;



            case "road":

                ctx.fillStyle="#b89b72";

                break;



            case "water":

                ctx.fillStyle="#2196f3";

                break;



            case "tree":

                ctx.fillStyle="#1b5e20";

                break;



            default:

                ctx.fillStyle="#000";


        }



        ctx.fillRect(

            x,

            y,

            size,

            size

        );


    }


}