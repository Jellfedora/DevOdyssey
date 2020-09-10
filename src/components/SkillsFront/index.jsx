import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import { Redirect } from "react-router-dom";
// Three js ressources
import * as THREE from "three";
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

        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        // -----------------------------------------------------------------
        // CAMERA

        var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 20, 30);


        // -----------------------------------------------------------------
        // SCENE

        var scene = new THREE.Scene();
        scene.background = new THREE.Color("black");

        // -----------------------------------------------------------------
        // TOOLS

        // OrbitControls
        const controls = new OrbitControls(camera, canvas);
        controls.update();

        // -----------------------------------------------------------------
        // LIGHT

        var light = new THREE.AmbientLight('white'); // soft white light
        scene.add(light);

        //----------------------------------------------------------------- 
        // FUNCTION

        var skillsNameArray = [
            "Html5",
            "Css3",
            "Sass",
            "Bootstrap",
            "Javascript",
            "ReactJs",
            "Redux",
            "NodeJs",
            "Symfony",
            "AngularJs",
            "Cakephp",
            "Codeigniter",
            "Three.js",
            "mysql",
            "php",
            "Wordpress",
            "Git",
            "Gitlab",
            "Github",
            "Linux",
            "Windows",
            "React Native"
        ];


        //----------------------------------------------------------------- 
        // Sphere

        var radius = 5;
        var widthSegments = 5;
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

        //----------------------------------------------------------------- 
        // INIT
        function init() {

            const colorSkill = new THREE.MeshPhongMaterial({ color: 'white' });

            // Pour chaque élément du tableau on crée un mesh
            for (let index = 0; index < skillsNameArray.length; index++) {

                let skillName = skillsNameArray[index];
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

        };

        scene.add(sphere);

        //----------------------------------------------------------------- 
        // ANIMATE

        var animate = function () {
            requestAnimationFrame(animate);

            // Sphere Animation
            sphere.rotation.y += 0.003;
            sphere.rotation.x += 0.003;


            // Sphere Children LookAt Camera position
            if (sphere) {

                for (let index = 0; index < sphere.children.length; index++) {
                    sphere.children[index].lookAt(camera.position)
                }
            }

            renderer.render(scene, camera);
        }

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

