import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


export default class Renderer3D{


    constructor(canvas){


        this.renderer =
        new THREE.WebGLRenderer({

            canvas: canvas,

            antialias:true

        });


        this.renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );


        this.renderer.shadowMap.enabled=true;


    }



    render(scene,camera){


        this.renderer.render(

            scene,

            camera

        );


    }


}