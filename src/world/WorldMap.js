import Tile from "./Tile.js";


export default class WorldMap {


    constructor(){


        this.tileSize = 64;


        this.width = 100;

        this.height = 100;


        this.tiles = [];


        this.generate();


    }




    generate(){


        for(
            let y = 0;
            y < this.height;
            y++
        ){


            let row=[];



            for(
                let x = 0;
                x < this.width;
                x++
            ){


                let type =
                this.createTerrain();



                row.push(
                    new Tile(type)
                );


            }


            this.tiles.push(row);


        }



    }





    createTerrain(){


        let random =
        Math.random();



        if(random < 0.1){


            return "water";


        }


        if(random < 0.25){


            return "tree";


        }


        if(random < 0.35){


            return "road";


        }


        return "grass";


    }






    render(ctx){



        for(
            let y=0;
            y<this.height;
            y++
        ){



            for(
                let x=0;
                x<this.width;
                x++
            ){


                this.tiles[y][x].render(

                    ctx,

                    x*this.tileSize,

                    y*this.tileSize,

                    this.tileSize

                );


            }


        }



    }



}