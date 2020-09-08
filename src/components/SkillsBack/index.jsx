import React, { Component } from 'react';
// Three js ressources
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import commandLine from '../../ressources/threejs/images/42.png';
import lidows from '../../ressources/threejs/images/lidows.png';
import git from '../../ressources/threejs/images/git.png';
import threejs from '../../ressources/threejs/images/threejs.jpg';
import fontCavea from '../../ressources/threejs/fonts/Caveat_Regular.json';

class SkillsOther extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPortfolio: false
        };
    }

    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Compétences - Autres';
        const action1 = { type: "CHANGE_TEXT_COLOR", value: 'white' }
        this.props.dispatch(action1)
        const action2 = { type: "CHANGE_MENU_COLOR", value: 'transparent' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'transparent' }
        this.props.dispatch(action3)

        function main() {
            const canvas = document.querySelector('#canvas');
            const renderer = new THREE.WebGLRenderer({ canvas });

            const fov = 45;
            const aspect = 2;
            const near = 0.1;
            const far = 100;
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 10, 20);

            const controls = new OrbitControls(camera, canvas);
            controls.target.set(0, 5, 0);
            controls.update();
            controls.autoRotate = true;


            const loader = new THREE.TextureLoader();
            const scene = new THREE.Scene();
            scene.background = new THREE.Color('black');

            //Cube
            {
                const cubeSize = 4;
                const cubeHeight = 8;
                const cubedepth = 4;
                const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeHeight, cubedepth);
                const cubeMat = new THREE.MeshBasicMaterial({ color: 'white' });
                const mesh = new THREE.Mesh(cubeGeo, cubeMat);
                mesh.position.set(cubeSize - 4, cubeSize, 0);
                scene.add(mesh);
            }

            //Image 1
            const firstImageSize = 0.1;
            const firstImageHeight = 2;
            const firstImagedepth = 2;
            const firstImageGeo = new THREE.BoxBufferGeometry(firstImageSize, firstImageHeight, firstImagedepth);
            // const firstImageMat = new THREE.MeshPhongMaterial({ color: 'red' });
            const firstImageMat = new THREE.MeshBasicMaterial({ map: loader.load(lidows) });
            const firstImageMesh = new THREE.Mesh(firstImageGeo, firstImageMat);
            firstImageMesh.position.set(2, 5, 0);
            scene.add(firstImageMesh);

            // Text Image 1
            function imageOne() {
                var firstImageText = new THREE.FontLoader();
                var font = firstImageText.parse(fontCavea);

                var geometry = new THREE.TextGeometry('Linux & Windows', {
                    font: font,
                    size: 0.4,
                    height: 1,
                    curveSegments: 0.5,
                });


                const colorImage = new THREE.MeshPhongMaterial({ color: 'white' });
                const firstTextImage = new THREE.Mesh(geometry, colorImage);
                firstTextImage.position.set(1.1, 1.5, 1.6);
                firstTextImage.rotateZ(0.05)
                firstTextImage.rotateY(1.55)
                scene.add(firstTextImage);
            }
            imageOne();

            //Image 2
            const secondImageSize = 2;
            const secondImageHeight = 2;
            const secondImagedepth = 0.1;
            const secondImageGeo = new THREE.BoxBufferGeometry(secondImageSize, secondImageHeight, secondImagedepth);
            // const secondImageMat = new THREE.MeshPhongMaterial({ color: 'green' });
            const secondImageMat = new THREE.MeshBasicMaterial({ map: loader.load(git) });
            const secondImageMesh = new THREE.Mesh(secondImageGeo, secondImageMat);
            secondImageMesh.position.set(0, 5, 2);
            scene.add(secondImageMesh);

            // Text Image 2
            function imageTwo() {
                var twoImageText = new THREE.FontLoader();
                var font = twoImageText.parse(fontCavea);

                var geometry = new THREE.TextGeometry('git github gitlab', {
                    font: font,
                    size: 0.4,
                    height: 1,
                    curveSegments: 0.5,
                });


                const colorImage = new THREE.MeshPhongMaterial({ color: 'white' });
                const secondTextImage = new THREE.Mesh(geometry, colorImage);
                secondTextImage.position.set(-1.5, 3, 1.2);
                secondTextImage.rotateZ(50)
                scene.add(secondTextImage);
            }
            imageTwo();

            //Image 3
            const thirdImageSize = 2;
            const thirdImageHeight = 2;
            const thirdImagedepth = 0.1;
            const thirdImageGeo = new THREE.BoxBufferGeometry(thirdImageSize, thirdImageHeight, thirdImagedepth);
            const thirdImageMat = new THREE.MeshBasicMaterial({ map: loader.load(threejs) });
            const thirdImageMesh = new THREE.Mesh(thirdImageGeo, thirdImageMat);
            thirdImageMesh.position.set(-2, 5, 0);
            thirdImageMesh.rotateY(1.55)
            scene.add(thirdImageMesh);

            // Text Image 3
            function imageThree() {
                var threeImageText = new THREE.FontLoader();
                var font = threeImageText.parse(fontCavea);

                var geometry = new THREE.TextGeometry('Three Js "Work on progress"', {
                    font: font,
                    size: 0.5,
                    height: 1,
                    curveSegments: 0.5,
                });


                const colorImage = new THREE.MeshPhongMaterial({ color: 'white' });
                const thirdTextImage = new THREE.Mesh(geometry, colorImage);
                thirdTextImage.position.set(-1.8, 7.5, 1.2);
                thirdTextImage.rotateY(4.7)
                thirdTextImage.rotateZ(4.7)
                scene.add(thirdTextImage);
            }
            imageThree();

            //Image 4
            const fourthImageSize = 2;
            const fourthImageHeight = 2;
            const fourthImagedepth = 0.1;
            const fourthImageGeo = new THREE.BoxBufferGeometry(fourthImageSize, fourthImageHeight, fourthImagedepth);
            const fourthImageMat = new THREE.MeshBasicMaterial({ map: loader.load(commandLine) });
            const fourthImageMesh = new THREE.Mesh(fourthImageGeo, fourthImageMat);
            fourthImageMesh.position.set(0, 5, -2);
            // fourthImageMesh.rotateY(0.5)
            scene.add(fourthImageMesh);

            // Text Image 4
            function imageFour() {
                var fourthImageText = new THREE.FontLoader();
                var font = fourthImageText.parse(fontCavea);

                var geometry = new THREE.TextGeometry('Administation systéme', {
                    font: font,
                    size: 0.3,
                    height: 1,
                    curveSegments: 0.5,
                });


                const colorImage = new THREE.MeshPhongMaterial({ color: 'white' });
                const fourthTextImage = new THREE.Mesh(geometry, colorImage);
                fourthTextImage.position.set(1.6, 1.5, -1.3);
                fourthTextImage.rotateY(3.15);
                scene.add(fourthTextImage);
            }
            imageFour();


            // Animations
            function animate() {

                requestAnimationFrame(animate);

                // required if controls.enableDamping or controls.autoRotate are set to true
                controls.update();

                renderer.render(scene, camera);

            }
            animate()

            // Renderer
            function resizeRendererToDisplaySize(renderer) {
                const canvas = renderer.domElement;
                const width = canvas.clientWidth;
                const height = canvas.clientHeight;
                const needResize = canvas.width !== width || canvas.height !== height;
                if (needResize) {
                    renderer.setSize(width, height, false);
                }
                return needResize;
            }

            function render() {

                if (resizeRendererToDisplaySize(renderer)) {
                    const canvas = renderer.domElement;
                    camera.aspect = canvas.clientWidth / canvas.clientHeight;
                    camera.updateProjectionMatrix();
                }

                renderer.render(scene, camera);

                requestAnimationFrame(render);
            }


            requestAnimationFrame(render);
        }

        main();
    }

    render() {
        if (this.state.showPortfolio) {
            return <Redirect to='/portfolio' />;
        }
        return (
            <div className="skills-other">
                <canvas id="canvas" style={{ height: '100vh', width: '100vw' }} ></canvas>
                <div className="skills-other__title">
                    <h3>Compétences: Autres</h3>
                </div>
                <Zoom unmountOnExit duration={1000} delay={500}>
                    <div className="skills__next ">
                        <div className="skills__next__button" onClick={() => this.setState({ showPortfolio: true })}>
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
export default connect()(SkillsOther);

