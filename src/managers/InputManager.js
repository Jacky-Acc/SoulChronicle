export default class InputManager{


    constructor(){


        this.keys = {};



        window.addEventListener(
            "keydown",
            (event)=>{


                this.keys[event.key]=true;


            }
        );



        window.addEventListener(
            "keyup",
            (event)=>{


                this.keys[event.key]=false;


            }
        );


    }



    isPressed(key){


        return this.keys[key];


    }



}