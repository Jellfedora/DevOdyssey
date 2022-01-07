import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFirstStep: false,
            showButtonFirstStep: false,
            durationStepOne: 8000,
            showSkills: false,
            delay: false
        };
    }

    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Développeur Web Front-end - Présentation';
        const action = { type: "CHANGE_BACKGROUND", value: '#020202' }
        this.props.dispatch(action)
        const action2 = { type: "CHANGE_TEXT_COLOR", value: '#F8F8F8' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'transparent' }
        this.props.dispatch(action3)

        // On affiche la premiére partie
        this.startFirstStep()
    }

    componentWillUnmount() {
        this.setState({ showFirstStep: false })
    }

    startFirstStep = () => {
        // setTimeout(() => {
        this.setState({ showFirstStep: true })
        // }, 2000);
        setTimeout(() => {
            this.setState({ showButtonFirstStep: true })
        }, 10000);
    }

    showSkills = () => {
        // Rediriger vers la seconde partie
        this.setState({ showFirstStep: false, showButtonFirstStep: false, durationStepOne: 1000, delay: true })

        // Rediriger vers la page skills
        setTimeout(() => {
            this.setState({ showSkills: true })
        }, 3000);
    }

    render() {
        if (this.state.showSkills) {
            return <Redirect to='/skills' />;
        }
        return (
            <div className="bio">
                <div className="bio__title"><h2>Présentation</h2></div>
                <div className="bio__box">
                    <div className="bio__box__content">
                        {this.props.isSmallScreen
                            ? <Zoom className="bio__box__content__text" top cascade when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 1000 : 200}>
                                {/* Step One */}
                                <div className="bio__text">
                                    <p>Hello, moi c'est Julien.</p>
                                    <p>Je suis un concepteur / développeur web français spécialisé sur la librairie React Js et résidant à Toulouse .</p>

                                    <p>J'ai obtenu le diplôme de Concepteur Développeur d'applications d'un niveau II en mars 2020 que j'ai préparé avec l'école O'Clock</p>

                                    <p>et en alternance avec l'entreprise E-wi Télécom .</p>
                                    <p>Je m'applique à créer des applications Web immersives et centrées sur l'expérience utilisateur.</p>
                                </div>
                            </Zoom>
                            : <div className="bio__box__content__text">
                                {/* Step One */}
                                <Flip left opposite cascade collapse when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 1000 : 200} className="bio__text">
                                    <p>Hello, moi c'est Julien.</p>
                                </Flip>
                                <Flip left opposite cascade collapse when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 900 : 500} className="bio__text">
                                    <p>Je suis un concepteur / développeur web français spécialisé sur la librairie React Js et résidant à Toulouse .</p>
                                </Flip>
                                <Flip left opposite cascade collapse when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 800 : 1000} className="bio__text">
                                    <p>J'ai obtenu le diplôme de Concepteur Développeur d'applications d'un niveau II en mars 2020 que j'ai préparé avec l'école O'Clock</p>
                                </Flip>
                                <Flip left opposite cascade collapse when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 700 : 1500} className="bio__text">
                                    <p>et en alternance avec l'entreprise E-wi Télécom .</p>
                                </Flip>
                                <Flip left opposite cascade collapse when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 600 : 2000} className="bio__text">
                                    <p>Je m'applique à créer des applications Web immersives et centrées sur l'expérience utilisateur . . .</p>
                                </Flip>
                            </div>
                        }

                        <Zoom when={this.state.showFirstStep} unmountOnExit duration={this.state.durationStepOne} delay={this.state.delay ? 500 : 6000}>
                            <div className="bio__next ">
                                <button className="bio__next__button" onClick={() => this.showSkills()}>
                                    <div className="round slowBlink">
                                        <div id="cta">
                                            <span className="arrow primera next "></span>
                                            <span className="arrow segunda next "></span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div >
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
        isSmallScreen: state.home.isSmallScreen
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bio);

