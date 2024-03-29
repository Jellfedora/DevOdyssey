import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Développeur Web Front-end - Contact';
        const action = { type: "CHANGE_BACKGROUND", value: 'white' }
        this.props.dispatch(action)
        const action2 = { type: "CHANGE_TEXT_COLOR", value: 'black' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'white' }
        this.props.dispatch(action3)
        const action4 = { type: "CHANGE_HEADER_POSITION", value: 'absolute' }
        this.props.dispatch(action4)

    }

    componentWillUnmount() {
        const action = { type: "CHANGE_HEADER_POSITION", value: 'fixed' }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div className="contact">
                <Slide left className="contact__text">
                    <p>
                        Envie de m'adopter dans votre entreprise ? <br /> Intéréssé par mon travail ? <br /> Une remarque ou une question sur ce site ou mon parcours ? <br /> Vous pouvez me contacter par téléphone, courriel ou encore discord !
                    </p>
                </Slide>
                <a className="contact__item" href="tel:0750475870" title="Mon numéro de téléphone">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="26" height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="black"><path d="M57.33333,17.18881c0.72787,0 0.72787,0 1.42774,0.72786c0.72786,0.72787 2.88347,2.85547 2.88347,4.3112c0,1.42773 0,5.01106 0.69987,7.86653c1.42774,3.58333 2.88347,12.9056 5.01107,17.91667c2.1556,5.01107 2.88346,7.89453 0.72786,10.75c-2.1556,3.58333 -15.76107,17.2168 -15.76107,17.2168c0,0 3.58333,7.16667 7.86654,11.44987c3.58333,5.01107 9.32226,12.17774 16.48893,17.91667c7.16667,6.4668 15.06119,12.17774 22.92774,15.76107c7.89453,-7.86654 14.33333,-14.33333 16.48893,-15.76107c2.1556,-1.42774 2.1556,-2.1556 5.73893,-0.69987c3.58333,1.42773 8.5944,3.58333 14.33333,4.2832c5.01107,0.72786 10.75,1.42774 14.33333,2.1556c3.58333,0.72787 3.58333,0.72787 4.3112,2.1556c1.42773,1.42774 2.1276,3.58333 2.1276,4.28321c0,0.72786 0,2.88346 0,10.05012c0,7.16667 0,17.18881 0,19.3444c0,2.1556 0,2.1556 -0.69988,3.58333c-0.72786,1.42774 -1.42773,5.01107 -1.42773,5.01107c0,0.72786 -3.58333,2.1556 -5.73894,2.1556c-2.1556,0 -10.05012,0 -15.06119,-0.72786c-5.01107,-0.69988 -18.61653,-3.58333 -23.6556,-5.71094c-5.01107,-1.45573 -21.5,-7.16667 -41.54427,-22.22787c-18.64453,-14.33333 -32.25,-33.67774 -40.14453,-49.4388c-7.89453,-15.78906 -12.17774,-32.97787 -12.9056,-41.57227c-1.42774,-8.5944 -1.42774,-12.17773 -1.42774,-14.33333c0.72787,-2.1556 2.85547,-4.31119 4.3112,-5.01106c1.42773,-0.72787 3.58333,-1.45573 5.71094,-1.45573c2.1556,0 7.89453,0 15.78906,0c7.86653,0 17.1888,0 17.1888,0z"></path></g></g></svg>
                    <span >07 50 47 58 70</span>
                </a>
                <a className="contact__item" href="mailto:julienlecointe@live.fr" title="Mon adresse e-mail">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="26" height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="black"><path d="M100.57452,113.36599h-0.62019c-4.75481,13.35997 -13.35997,20.02704 -25.86719,20.02704c-9.38041,0 -16.92608,-3.48858 -22.66286,-10.49159c-5.76262,-6.97716 -8.63101,-16.66767 -8.63101,-29.04567c0,-15.99579 3.97957,-29.01983 11.93871,-39.07212c7.93329,-10.02644 17.52043,-15.03966 28.70973,-15.03966c10.12981,0 16.48678,4.08293 19.07092,12.27463h0.41346l1.00781,-10.38822h22.92127c-3.04928,29.79507 -4.59976,49.2536 -4.59976,58.42728c0,9.79387 2.58413,14.67788 7.7524,14.67788c5.45253,0 9.92308,-3.72115 13.46334,-11.11178c3.51442,-7.41647 5.29747,-17.10697 5.29747,-29.04567c0,-16.35758 -5.0649,-29.76923 -15.19471,-40.23498c-10.12981,-10.4399 -24.23918,-15.68569 -42.37981,-15.68569c-19.43269,0 -35.58353,6.97716 -48.45252,20.93149c-12.86899,13.95433 -19.30349,30.95794 -19.30349,51.03666c0,19.43269 5.6851,34.73077 17.05529,45.92007c11.39603,11.1893 27.08173,16.79688 47.13462,16.79688c15.29808,0 29.27824,-2.9976 41.99219,-9.01863v20.02704c-11.6286,5.09074 -26.5649,7.64904 -44.83474,7.64904c-25.09194,0 -45.48077,-7.39062 -61.19231,-22.17187c-15.73738,-14.8071 -23.59315,-34.67909 -23.59315,-59.64183c0,-25.45373 8.39844,-46.82452 25.16947,-64.16406c16.77103,-17.33954 38.3744,-26.02224 64.8101,-26.02224c24.44591,0 44.24038,6.71875 59.35757,20.18209c15.11719,13.46335 22.66286,31.21635 22.66286,53.23317c0,18.11479 -4.6256,32.63762 -13.85096,43.59435c-9.2512,10.93089 -20.69892,16.40926 -34.34315,16.40926c-6.71875,0 -12.19712,-1.86058 -16.40926,-5.55589c-4.21214,-3.72115 -6.48618,-8.55349 -6.82212,-14.49699zM87.00781,57.98798c-6.09856,0 -11.08594,3.59195 -14.91046,10.75c-3.85037,7.1839 -5.76262,15.47897 -5.76262,24.91106c0,6.71875 1.31791,11.93871 3.92788,15.6857c2.60997,3.74699 5.96935,5.60757 10.12981,5.60757c6.38281,0 11.42187,-3.51442 15.09135,-10.59495c3.64363,-7.05469 5.47837,-16.48678 5.47837,-28.29628c0,-5.60757 -1.26622,-10.0006 -3.82452,-13.23077c-2.53246,-3.20433 -5.91767,-4.83233 -10.12981,-4.83233z"></path></g></g></svg>
                    <span>julienlecointe@live.fr</span>
                </a>
                <div className="contact__item">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="26" height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="black"><path d="M143.19,37.04719c-13.69281,-11.01875 -35.35406,-12.88656 -36.28125,-12.95375c-1.43781,-0.12094 -2.80844,0.68531 -3.39969,2.01563c-0.05375,0.08062 -0.52406,1.16906 -1.04813,2.86219c9.05688,1.53188 20.18313,4.60906 30.24781,10.8575c1.6125,0.99438 2.10969,3.1175 1.11531,4.73c-0.65844,1.06156 -1.77375,1.63938 -2.92938,1.63938c-0.61812,0 -1.24969,-0.17469 -1.81406,-0.52406c-17.3075,-10.73656 -38.915,-11.27406 -43.08063,-11.27406c-4.16562,0 -25.78656,0.5375 -43.08062,11.27406c-1.6125,1.00781 -3.73563,0.51062 -4.73,-1.10188c-1.00781,-1.62594 -0.51063,-3.73562 1.10187,-4.74344c10.06469,-6.235 21.19094,-9.32562 30.24781,-10.84406c-0.52406,-1.70656 -0.99438,-2.78156 -1.03469,-2.87562c-0.60469,-1.33031 -1.96188,-2.16344 -3.41313,-2.01563c-0.92719,0.06719 -22.58844,1.935 -36.46937,13.10156c-7.24281,6.70531 -21.74188,45.88906 -21.74188,79.765c0,0.60469 0.16125,1.1825 0.45688,1.70656c9.9975,17.57625 37.28906,22.17187 43.51062,22.37344c0.02688,0 0.06719,0 0.1075,0c1.10188,0 2.13656,-0.52406 2.78156,-1.41094l6.28875,-8.65375c-16.97156,-4.38063 -25.63875,-11.825 -26.13594,-12.26844c-1.42438,-1.24969 -1.55875,-3.42656 -0.29563,-4.85094c1.24969,-1.42437 3.42656,-1.55875 4.85094,-0.30906c0.20156,0.18812 16.16531,13.73312 47.55531,13.73312c31.44375,0 47.4075,-13.59875 47.56875,-13.73312c1.42438,-1.23625 3.58781,-1.11531 4.85094,0.3225c1.24969,1.42437 1.11531,3.58781 -0.30906,4.8375c-0.49719,0.44344 -9.16438,7.88781 -26.13594,12.26844l6.28875,8.65375c0.645,0.88687 1.67969,1.41094 2.78156,1.41094c0.04031,0 0.08063,0 0.1075,0c6.22156,-0.20156 33.51313,-4.79719 43.51063,-22.37344c0.29562,-0.52406 0.45687,-1.10188 0.45687,-1.70656c0,-33.87594 -14.49906,-73.05969 -21.93,-79.91281zM63.64,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76zM108.36,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76z"></path></g></g></svg>
                    <span>Jellfedora#9817</span>
                </div>

                <div className="contact__separator"></div>
                <Slide right className="contact__text">
                    <p>
                        Ainsi que sur les réseaux.
                    </p>
                </Slide>
                <a className="contact__item" href="https://www.linkedin.com/in/julien-lecointe/" style={{ cursor: 'pointer' }} title="Mon profil LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="26" height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="black"><path d="M156.23893,0h-140.47786c-8.5944,0 -15.76107,7.16667 -15.76107,15.76107v140.47786c0,8.5944 7.16667,15.76107 15.76107,15.76107h140.47786c8.5944,0 15.76107,-7.16667 15.76107,-15.76107v-140.47786c0,-8.5944 -7.16667,-15.76107 -15.76107,-15.76107zM50.16667,143.33333h-28.66667v-78.83333h28.66667zM35.83333,55.17774c-8.5944,0 -14.33333,-5.73893 -14.33333,-12.9056c0,-7.86654 5.73893,-13.60547 14.33333,-13.60547c8.5944,0 14.33333,5.73893 14.33333,12.9056c0,7.86654 -5.73893,13.60547 -14.33333,13.60547zM150.5,143.33333h-28.66667v-43c0,-11.47786 -7.89453,-14.33333 -10.02213,-14.33333c-2.1556,0 -11.47787,1.42774 -11.47787,14.33333c0,1.42774 0,43 0,43h-28.66667v-78.83333h28.66667v11.47787c4.3112,-6.4668 11.47787,-11.47787 25.08333,-11.47787c13.60547,0 25.08333,10.75 25.08333,35.83333z"></path></g></g></svg>
                    <span>Linkedin</span>
                </a>
                <a className="contact__item" href="https://twitter.com/Jellfedora7" style={{ cursor: 'pointer' }} title="Ma page Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="26" height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><defs><linearGradient x1="37.05525" y1="29.78467" x2="146.19283" y2="138.92225" gradientUnits="userSpaceOnUse" id="color-1_5MQ0gPAYYx7a_gr1"><stop offset="0" stopColor="#dfbe8d"></stop><stop offset="1" stopColor="#dfbe8d"></stop></linearGradient></defs><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="black"><path d="M165.20958,39.48833c-5.55775,2.46175 -11.53475,4.10292 -17.84142,4.8805c6.41058,-3.8055 11.34483,-9.87567 13.65967,-17.0495c-5.9985,3.51525 -12.64558,6.09883 -19.7155,7.4605c-5.64733,-5.98417 -13.70267,-9.6965 -22.62517,-9.6965c-17.13908,0 -31.03525,13.77075 -31.03525,30.75217c0,2.40442 0.28308,4.74433 0.80983,7.01617c-25.78567,-1.29358 -48.65808,-13.55217 -63.95892,-32.15683c-2.6875,4.54725 -4.19967,9.8685 -4.19967,15.48717c0,10.67475 5.46458,20.07383 13.79942,25.61008c-5.08833,-0.15408 -9.87567,-1.5695 -14.06817,-3.84133c0,0.09317 0,0.22933 0,0.36192c0,14.91742 10.69983,27.34083 24.88267,30.16808c-2.59075,0.7095 -5.332,1.10367 -8.15567,1.10367c-2.00308,0 -3.956,-0.22575 -5.848,-0.56617c3.94883,12.1905 15.40475,21.10225 28.97842,21.36742c-10.621,8.2345 -23.99758,13.16517 -38.54233,13.16517c-2.51192,0 -4.97008,-0.14333 -7.39958,-0.43717c13.74925,8.70392 30.06417,13.803 47.5795,13.803c57.07175,0 88.29692,-46.86642 88.29692,-87.5265c0,-1.333 -0.043,-2.65883 -0.10392,-3.97033c6.09167,-4.30358 11.34125,-9.72875 15.48717,-15.9315"></path></g></g></svg>
                    <span>Twitter</span>
                </a>
                <div className="contact__separator"></div>
                <Slide right className="contact__text">
                    <p>
                        Et pourquoi pas me rejoindre sur le groupe Three.js France, que j'ai créé et que j'administre sur Facebook.
                    </p>
                </Slide>
                <a className="contact__item" href="https://www.facebook.com/groups/809464879808362/?ref=share" style={{ cursor: 'pointer' }} title="Mon profil LinkedIn">
                    <span className="contact__item__facebook">
                        <FontAwesomeIcon icon={['fab', 'facebook']} color="black" />
                    </span>
                    <span>Three.js France</span>
                </a>
                <div className="contact__separator"></div>
                <Slide left className="contact__text">
                    <p>
                        Pour finir, retrouvez mes travaux sur Github grâce au lien ci-dessous!
                    </p>
                </Slide>
                <a className="contact__item" style={{ color: '#dfbe8d', paddingBottom: '10em', cursor: 'pointer' }} href="https://github.com/Jellfedora" title="Ma page Github">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16 navigation__right__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    <span>Github</span>
                </a>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
const mapStateToProps = (state) => {
    return {
        menuIsShow: state.home.showMenu
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);

