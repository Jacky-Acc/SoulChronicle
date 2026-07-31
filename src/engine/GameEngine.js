import SceneManager from "../managers/SceneManager.js";


export default class GameEngine{


    constructor(canvas){


        this.canvas = canvas;


        this.running = false;


        this.lastTime = 0;


        this.sceneManager =
        new SceneManager(this);


    }



    start(){


        this.running = true;


        requestAnimationFrame(
            this.loop.bind(this)
        );


    }





    loop(timestamp){


        if(!this.running)
            return;



        const deltaTime =
        timestamp - this.lastTime;



        this.lastTime = timestamp;



        this.update(deltaTime);


        this.render();



        requestAnimationFrame(
            this.loop.bind(this)
        );


    }





    update(deltaTime){


        this.sceneManager.update(
            deltaTime
        );


    }





    render(){


        this.sceneManager.render();


    }


}