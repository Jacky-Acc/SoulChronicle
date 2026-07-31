export default class SceneManager {


    constructor(game){


        this.game = game;


        this.currentScene = null;


    }



    changeScene(scene){


        if(this.currentScene){


            this.currentScene.destroy?.();


        }


        this.currentScene = scene;


        this.currentScene.init?.();


    }



    update(deltaTime){


        if(this.currentScene){


            this.currentScene.update(deltaTime);


        }


    }



   render(){


    if(this.currentScene){


        this.currentScene.render();


    }


}



}