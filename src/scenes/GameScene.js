import Player from "../entities/Player.js";

import WorldMap from "../world/WorldMap.js";

import Camera from "../engine/Camera.js";



export default class GameScene {



    constructor(game){


        this.game = game;


        this.player = null;


        this.world = null;


        this.camera = null;


    }





    init(){



        console.log(
            "Camera System Loaded"
        );



        this.world =
        new WorldMap();



        this.player =
        new Player(

            300,

            300

        );



        this.camera =
        new Camera(

            this.game

        );


    }







    update(deltaTime){



        this.player.update();



        this.camera.follow(

            this.player

        );



    }







    render(ctx){



        ctx.clearRect(

            0,

            0,

            this.game.canvas.width,

            this.game.canvas.height

        );



        // 开启摄像机

        this.camera.apply(ctx);



        this.world.render(ctx);



        this.player.render(ctx);



        // 恢复画布

        this.camera.reset(ctx);



    }




}