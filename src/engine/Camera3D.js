import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


export default class Camera3D{


    constructor(){


        this.camera =
        new THREE.PerspectiveCamera(

            75,

            window.innerWidth /
            window.innerHeight,

            0.1,

            1000

        );



        this.camera.position.set(

            0,

            5,

            10

        );


    }



}