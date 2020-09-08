import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import { Redirect } from "react-router-dom";
// Img front
import angularjs from '../../ressources/images/icons/angularjs.png';
import bootstrap from '../../ressources/images/icons/bootstrap.png';
import css from '../../ressources/images/icons/css3.png';
import html from '../../ressources/images/icons/html-5.png';
import js from '../../ressources/images/icons/javascript.png';
import mediaQueries from '../../ressources/images/icons/media-queries.png';
import react from '../../ressources/images/icons/react.png';
import redux from '../../ressources/images/icons/redux.png';
import sass from '../../ressources/images/icons/sass.png';

// Img back
import cake from '../../ressources/images/icons/cake.png';
import codeigniter from '../../ressources/images/icons/codeigniter.png';
import node from '../../ressources/images/icons/nodejs.png';
import mysql from '../../ressources/images/icons/mysql.png';
import php from '../../ressources/images/icons/php.png';
import symfony from '../../ressources/images/icons/symfony.png';
import wordpress from '../../ressources/images/icons/wordpress.png';

const relMousePos = {
    _x: 0, _y: 0, x: 0, y: 0,
    updatePos: function (e) {
        const event = (e || window.event) && (e.touches && e.touches[0]) || e;
        this.x = event.clientX - this._x;
        this.y = event.clientY - this._y;
    },
    setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    }
}

class SkillsFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSkillsBack: false
        };
    }
    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Compétences';
        const action1 = { type: "CHANGE_TEXT_COLOR", value: 'white' }
        this.props.dispatch(action1)
        const action2 = { type: "CHANGE_MENU_COLOR", value: 'transparent' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'transparent' }
        this.props.dispatch(action3)

        this.initAnimation();
    }

    initAnimation = () => {
        var container = document.querySelector('#box');

        relMousePos.setOrigin(container);
        container.addEventListener('mousemove', relMousePos.updatePos);
        container.addEventListener('mousemove', this.onMouseMove);
        container.addEventListener('touchmove', function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.onMouseMove(e);
        }, { passive: false });

        this.onMouseMove({ clientX: relMousePos._x, clientY: relMousePos._y + 25 });
    }

    onMouseMove = (e) => {
        var container = document.querySelector('#box');
        const textElem = document.querySelector('#shadow__text');
        const spotElem = document.querySelector('#shadow__spot');

        var width = container.offsetWidth;
        var height = container.offsetHeight;

        relMousePos.setOrigin(container);
        container.addEventListener('mousemove', relMousePos.updatePos);

        relMousePos.updatePos(e);
        var xm = relMousePos.x;
        var ym = relMousePos.y;

        var d = Math.round(Math.sqrt(xm * xm + ym * ym) / 10);
        textElem.style.textShadow = -xm + 'px ' + -ym + 'px ' + (d + 10) + 'px black';
        spotElem.style.backgroundPosition = (xm - (width / 2)) + 'px ' + (ym - (height / 2)) + 'px';
    }

    render() {
        if (this.state.showSkillsBack) {
            return <Redirect to='/skills-other' />;
        }
        return (
            <div id="container">
                <div id="box">
                    <div className="shadow__wall">

                        <div id="shadow__text">
                            <div className="skills__front">
                                <div className="skills__front__title">
                                    <h3>Compétences: Front-end</h3>
                                </div>
                                <div className="skills__front__content">
                                    <div>
                                        <img src={html} alt="Html5" />
                                        <h4>Html5</h4>
                                    </div>
                                    <div>
                                        <img src={css} alt="Css3" />
                                        <h4>Css3</h4>
                                    </div>
                                    <div>
                                        <img src={sass} alt="Sass" />
                                        <h4>Sass</h4>
                                    </div>
                                    <div>
                                        <img src={js} alt="Javascript" />
                                        <h4>Javascript</h4>
                                    </div>
                                    <div>
                                        <img src={react} alt="React-Jsx" />
                                        <h4>React</h4>
                                    </div>
                                    <div>
                                        <img src={redux} alt="Redux" />
                                        <h4>Redux</h4>
                                    </div>
                                    <div>
                                        <img src={angularjs} alt="AngularJs" />
                                        <h4>AngualrJs</h4>
                                    </div>
                                    <div>
                                        <img src={bootstrap} alt="Bootstrap" />
                                        <h4>Bootstrap</h4>
                                    </div>
                                    <div>
                                        <img src={mediaQueries} alt="Responsive-Design" />
                                        <h4>Responsive Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__separator"></div>
                            <div className="skills__back">
                                <div className="skills__back__title">
                                    <h3>Compétences: Back-end</h3>
                                </div>
                                <div className="skills__back__content">
                                    <div>
                                        <img src={cake} alt="Cakephp" />
                                        <h4>Cakephp</h4>
                                    </div>
                                    <div>
                                        <img src={codeigniter} alt="Codeigniter" />
                                        <h4>Codeigniter</h4>
                                    </div>
                                    <div>
                                        <img src={node} alt="NodeJs" />
                                        <h4>NodeJs</h4>
                                    </div>
                                    <div>
                                        <img src={mysql} alt="mysql" />
                                        <h4>mysql</h4>
                                    </div>
                                    <div>
                                        <img src={php} alt="php" />
                                        <h4>php</h4>
                                    </div>
                                    <div>
                                        <img src={symfony} alt="Symfony" />
                                        <h4>Symfony</h4>
                                    </div>
                                    <div>
                                        <img src={wordpress} alt="Wordpress" />
                                        <h4>Wordpress</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shadow__spot"></div>
                </div>
                <div className="skills-other__title">
                    <h3>Compétences: Front-end / Back-end</h3>
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

