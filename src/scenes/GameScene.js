import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


import Renderer3D from "../engine/Renderer3D.js";

import Camera3D from "../engine/Camera3D.js";



export default class GameScene{


    constructor(game){


        this.game=game;


        this.scene=null;


        this.renderer=null;


        this.camera=null;


    }





    init(){


        console.log(
            "3D WORLD LOADED"
        );



        this.scene =
        new THREE.Scene();



        this.scene.background =
        new THREE.Color(
            0x87ceeb
        );



        // 光源

        const light =
        new THREE.DirectionalLight(

            0xffffff,

            1

        );


        light.position.set(
            5,
            10,
            5
        );


        this.scene.add(light);



        // 地面

        const geometry =
        new THREE.PlaneGeometry(

            50,

            50

        );



        const material =
        new THREE.MeshStandardMaterial({

            color:0x228B22

        });



        const ground =
        new THREE.Mesh(

            geometry,

            material

        );



        ground.rotation.x =
        -Math.PI/2;



        this.scene.add(
            ground
        );



        this.renderer =
        new Renderer3D(

            this.game.canvas

        );



        this.camera =
        new Camera3D();



        this.scene.add(
            this.camera.camera
        );


    }





    update(){



    }





    render(){


        this.renderer.render(

            this.scene,

            this.camera.camera

        );


    }



}