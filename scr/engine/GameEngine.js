export default class GameEngine{


    constructor(canvas){


        this.canvas = canvas;

        this.ctx = canvas.getContext("2d");


        this.running = false;


        this.lastTime = 0;


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


        // 游戏逻辑更新


    }



    render(){


        this.ctx.fillStyle="#111";


        this.ctx.fillRect(

            0,
            0,
            this.canvas.width,
            this.canvas.height

        );


        this.ctx.fillStyle="#fff";

        this.ctx.font="40px Arial";


        this.ctx.fillText(

            "SOULCHRONICLE",

            50,
            80

        );


    }



}