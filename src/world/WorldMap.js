import Tile from "./Tile.js";



export default class WorldMap {



    constructor(){



        this.tileSize = 64;



        this.map = [

            [
                "grass",
                "grass",
                "grass",
                "tree",
                "grass"
            ],


            [
                "grass",
                "road",
                "road",
                "road",
                "grass"
            ],


            [
                "grass",
                "road",
                "grass",
                "water",
                "water"
            ],


            [
                "tree",
                "grass",
                "grass",
                "grass",
                "grass"
            ],


            [
                "grass",
                "grass",
                "tree",
                "grass",
                "grass"
            ]

        ];



        this.tiles=[];



        this.create();


    }





    create(){



        for(
            let y=0;
            y<this.map.length;
            y++
        ){


            let row=[];



            for(
                let x=0;
                x<this.map[y].length;
                x++
            ){


                row.push(

                    new Tile(
                        this.map[y][x]
                    )

                );


            }


            this.tiles.push(row);


        }



    }







    render(ctx){



        for(
            let y=0;
            y<this.tiles.length;
            y++
        ){


            for(
                let x=0;
                x<this.tiles[y].length;
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