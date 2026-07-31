import Button from "../ui/Button.js";

import Text from "../ui/Text.js";

import GameScene from "./GameScene.js";



export default class MainMenuScene{


    constructor(game){


        this.game=game;


        this.buttons=[];


    }



    init(){


        console.log(
            "Main Menu Loaded"
        );



        this.title =
        new Text(
            "SOULCHRONICLE",
            100,
            150,
            60
        );



        this.buttons=[


            new Button(

                "开始冒险",

                120,

                250,

                300,

                60,

                ()=>{


                    this.game.sceneManager.changeScene(

                        new GameScene(this.game)

                    );


                }

            ),



            new Button(

                "继续旅程",

                120,

                330,

                300,

                60,

                ()=>{

                    console.log(
                        "Continue"
                    );

                }

            ),



            new Button(

                "游戏设置",

                120,

                410,

                300,

                60,

                ()=>{

                    console.log(
                        "Settings"
                    );

                }

            )


        ];


    }




    update(deltaTime){



    }





    render(ctx){


        ctx.fillStyle="#050505";


        ctx.fillRect(

            0,

            0,

            this.game.canvas.width,

            this.game.canvas.height

        );



        this.title.render(ctx);



        this.buttons.forEach(

            button=>{

                button.render(ctx);

            }

        );


    }



}