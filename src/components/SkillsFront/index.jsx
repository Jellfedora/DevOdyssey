import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import { Redirect } from "react-router-dom";
// Three js ressources
import * as THREE from "three";
import TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import fontOrkney from '../../ressources/threejs/fonts/Orkney_Regular.json';

class SkillsFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSkillsBack: false
        };
    }
    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Développeur Web Front-end - Compétences';
        const action1 = { type: "CHANGE_TEXT_COLOR", value: 'white' }
        this.props.dispatch(action1)
        const action2 = { type: "CHANGE_MENU_COLOR", value: 'transparent' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'transparent' }
        this.props.dispatch(action3)

        this.initAnimation();
    }

    initAnimation = () => {
        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({ canvas });
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height, false);

        if (window.innerWidth > 800) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.shadowMap.needsUpdate = true;
        };

        this.mount.appendChild(renderer.domElement);


        // -----------------------------------------------------------------
        // CAMERA
        var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);
        if (window.innerWidth < 1024) {
            camera.position.set(0, 0, 50);
        } else {
            camera.position.set(0, 0, 35);
        }


        // -----------------------------------------------------------------
        // SCENE
        var scene = new THREE.Scene();
        scene.background = new THREE.Color("black");

        // -----------------------------------------------------------------
        // TOOLS

        // OrbitControls
        const controls = new OrbitControls(camera, canvas);
        controls.update();
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        // -----------------------------------------------------------------
        // LIGHT
        var light = new THREE.AmbientLight('white'); // soft white light
        scene.add(light);

        //----------------------------------------------------------------- 
        // FUNCTIONS
        var skillsArray = [
            {
                name: 'Html5'
            },
            {
                name: 'Css3'
            },
            {
                name: 'Sass'
            },
            {
                name: 'Bootstrap'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'ReactJs'
            },
            {
                name: 'Redux'
            },
            {
                name: 'NodeJs'
            },
            {
                name: 'Symfony'
            },
            {
                name: 'AngularJs'
            },
            {
                name: 'Cakephp'
            },
            {
                name: 'Codeigniter'
            },
            {
                name: 'Three.js'
            },
            {
                name: 'mysql'
            },
            {
                name: 'php'
            },
            {
                name: 'Wordpress'
            },
            {
                name: 'Git'
            },
            {
                name: 'Gitlab'
            },
            {
                name: 'Github'
            },
            {
                name: 'Linux'
            },
            {
                name: 'Windows'
            },
            {
                name: 'React Native'
            },
            {
                name: 'Electron'
            },
            {
                name: 'Agile'
            },
            {
                name: 'Merise'
            },
        ];

        // Sphere
        var radius = 5;
        var widthSegments = 6;
        var heightSegments = 5;
        var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

        // Transparent color
        var material = new THREE.MeshPhongMaterial({
            color: 'white',
            opacity: 0,
            transparent: true,
        });
        var sphere = new THREE.Mesh(geometry, material);
        var sphereVerticesArray = geometry.vertices;
        var sphereIsAnimate = true;

        // Plane
        var planeGeometry = new THREE.PlaneGeometry(7, 4, 4, 4);
        var plane = new THREE.Mesh(planeGeometry, material);
        var planeVerticesArray = plane.geometry.vertices;
        scene.add(plane);

        // Create Text Elements
        function createTextElements() {
            const colorSkill = new THREE.MeshPhongMaterial({ color: 'white' });

            // Pour chaque élément du tableau on crée un mesh
            for (let index = 0; index < skillsArray.length; index++) {

                let skillName = skillsArray[index].name;
                var skill = new THREE.FontLoader();
                var font = skill.parse(fontOrkney);
                var geometry = new THREE.TextGeometry(skillName, {
                    font: font,
                    size: 0.2,
                    height: 0.1,
                    curveSegments: 0.01,
                });
                const colorImage = new THREE.MeshPhongMaterial({ color: 'white' });
                const skillMesh = new THREE.Mesh(geometry, colorImage);
                skillMesh.position.set(sphereVerticesArray[index].x, sphereVerticesArray[index].y, sphereVerticesArray[index].z);
                sphere.add(skillMesh)
            }
        }

        // Sphere vertices alignement
        function alignTextOnSphereVertices() {

            // SI position différente on rapproche lelement dans animate par tranche de 0.1
            for (let index = 0; index < skillsArray.length; index++) {

                var tween = new TWEEN.Tween(sphere.children[index].position)
                    .to({ y: sphereVerticesArray[index].y, x: sphereVerticesArray[index].x, z: sphereVerticesArray[index].z }, 1000)
                    // .delay(500)
                    // .onComplete(function () {
                    // sphere.children[index].position
                    // })
                    .start();
            }

        }

        // // Sphere vertices alignement
        function alignText() {
            // On réinitialise la position de la caméra
            controls.reset()
            // On réinitialise la rotation de la sphere
            sphere.rotation.y = 0;
            sphere.rotation.x = 0;

            // On aligne les elements l'un en dessous l'autre
            for (let index = 0; index < skillsArray.length; index++) {
                // Changer la position
                var tween = new TWEEN.Tween(sphere.children[index].position)
                    .to({ x: planeVerticesArray[index].x, y: planeVerticesArray[index].y, z: planeVerticesArray[index].z }, 1000)
                    // .delay(500)
                    .onComplete(function () {
                        // sphere.children[index].position
                    })
                    .start();
            }
        }

        // Change Text Position onclick
        function changeGeometry() {
            // On stop ou relance la rotation de la sphere
            if (sphereIsAnimate) {
                alignText();
                sphereIsAnimate = false;
            } else {
                alignTextOnSphereVertices();
                sphereIsAnimate = true;
            }
        }

        //----------------------------------------------------------------- 
        // INIT
        function init() {
            createTextElements();
        };

        scene.add(sphere);

        //----------------------------------------------------------------- 
        // ANIMATE
        var animate = function (time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);

            // Sphere Animation
            if (sphereIsAnimate) {
                sphere.rotation.y += 0.01;
                sphere.rotation.x += 0.01;
            }


            // Sphere Children LookAt Camera position
            if (sphere) {
                for (let index = 0; index < sphere.children.length; index++) {
                    sphere.children[index].lookAt(camera.position)
                }
            }

            renderer.render(scene, camera);
        }

        //----------------------------------------------------------------- 
        // RESIZE
        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        //----------------------------------------------------------------- 
        // LISTENER
        document.getElementById("c").addEventListener("click", changeGeometry);
        document.getElementById("c").addEventListener("touchend", changeGeometry);
        window.addEventListener('resize', onWindowResize, false);

        //----------------------------------------------------------------- 
        // START FUNCTIONS
        init();
        animate();
    }

    render() {
        if (this.state.showSkillsBack) {
            return <Redirect to='/portfolio' />;
        }
        return (
            <div className="skills" ref={ref => (this.mount = ref)} >
                <canvas id="c" style={{ height: '100vh', width: '100vw' }} ></canvas>
                <div className="skills__title">
                    <h2>Compétences</h2>
                </div>
                <Zoom unmountOnExit duration={1000} delay={500}>
                    <div className="skills__next ">
                        <div className="skills__next__button" onClick={() => this.setState({ showSkillsBack: true })}>
                            <div className="round slowBlink">
                                <div id="cta">
                                    <span className="arrow primera next "></span>
                                    <span className="arrow segunda next "></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        );
    }
}
export default connect()(SkillsFront);

