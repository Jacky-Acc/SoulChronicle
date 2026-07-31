import MenuUI from "../ui/MenuUI.js";


export default class MainMenuScene{


    constructor(game){


        this.game = game;


        this.ui = null;


    }





    init(){


        console.log(
            "Main Menu Loaded"
        );



        this.ui =
        new MenuUI(
            this.game
        );


    }





    update(deltaTime){



    }





    render(){



        // 3D模式下不使用Canvas绘制


    }



}