import Player from "../entities/Player.js";

import WorldMap from "../world/WorldMap.js";



export default class GameScene {



    constructor(game){


        this.game = game;


        this.player = null;


        this.world = null;


    }





    init(){


        console.log(
            "World Map Loaded"
        );



        this.world =
        new WorldMap();



        this.player =
        new Player(

            150,

            150

        );


    }







    update(deltaTime){


        this.player.update();


    }






    render(ctx){



        ctx.clearRect(

            0,

            0,

            this.game.canvas.width,

            this.game.canvas.height

        );



        this.world.render(ctx);



        this.player.render(ctx);



    }





}