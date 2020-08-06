import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRevealText from "react-reveal-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFirstStep: false,
            firstStepDisplay: 'initial',
            showButtonFirstStep: false,
            showSecondStep: false,
            secondStepDisplay: 'none',
            showButtonSecondStep: false,
            showThirdStep: false,
            thirdStepDisplay: 'none',
            showButtonThirdStep: false,
        };
    }

    componentDidMount() {
        this.playGoodSong()
    }

    componentDidUpdate() {
    }

    playGoodSong = () => {
        setTimeout(() => {
            this.setState({ showFirstStep: true })
        }, 2000);
        setTimeout(() => {
            this.setState({ showButtonFirstStep: true })
        }, 5000);
    }

    showSecondStep = () => {
        this.setState({ showFirstStep: false, showButtonFirstStep: false })
        setTimeout(() => {
            this.setState({ firstStepDisplay: 'none', secondStepDisplay: 'initial' })
            setTimeout(() => {
                this.setState({ showSecondStep: true })
                setTimeout(() => {
                    this.setState({ showButtonSecondStep: true })
                }, 5000);
            }, 1000);
        }, 2500);
    }

    showThirdStep = () => {
        this.setState({ showSecondStep: false, showButtonSecondStep: false })
        setTimeout(() => {
            this.setState({ secondStepDisplay: 'none', thirdStepDisplay: 'initial' })
            setTimeout(() => {
                this.setState({ showThirdStep: true })
                setTimeout(() => {
                    this.setState({ showButtonThirdStep: true })
                }, 5000);
            }, 1000);
        }, 2500);
    }

    hideBio = () => {
        this.setState({ showThirdStep: false, showButtonThirdStep: false })
        const action = { type: "CHANGE_BACKGROUND", value: "#F8F8F8" }
        this.props.dispatch(action)
        const action2 = { type: "CHANGE_TEXT_COLOR", value: "#020202" }
        this.props.dispatch(action2)
        const action3 = { type: "HIDE_BIO" }
        this.props.dispatch(action3)
    }



    render() {
        return (
            <div className="bio">
                <div style={{ display: this.state.firstStepDisplay }} >
                    <ReactRevealText className="bio__text" show={this.state.showFirstStep}>
                        Bonjour Vous !
                    </ReactRevealText>
                    <ReactRevealText className="bio__text" show={this.state.showFirstStep}>
                        Je suis un développeur web francais spécialisé sur la librairie React Js et vivant actuellement prés de la Rochelle.
                    </ReactRevealText>
                    <ReactRevealText className="bio__text" show={this.state.showFirstStep}>
                        J'ai obtenu mon diplôme de Concepteur développeur d'applications d'un niveau II en mars 2020.
                    </ReactRevealText>
                    <ReactRevealText className="bio__text" show={this.state.showFirstStep}>
                        Ce diplôme je l'ai préparé avec l'école O'clock, labélisée Grande Ecole du Numérique chez qui j'ai réalisé deux formations.
                    </ReactRevealText>
                    {this.state.showButtonFirstStep &&
                        <div className="bio__next ">
                            <button className="bio__next__button" onClick={() => this.showSecondStep()}>
                                <div class="round slowBlink">
                                    <div id="cta">
                                        <span class="arrow primera next "></span>
                                        <span class="arrow segunda next "></span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    }
                </div>

                <div style={{ display: this.state.secondStepDisplay }}>
                    <ul>
                        <li>
                            <ReactRevealText className="bio__text" show={this.state.showSecondStep}>
                                Une premiére formation de développeur Web & Web Mobile dune durée de six mois, où j'ai acquis les bonnes pratiques pour devenir développeur web et où j'ai aussi éffectué un mois de spécialisation Wordpress pour prendre en main et personnaliser ce CMS.
                            </ReactRevealText>
                        </li>
                        <li>
                            <ReactRevealText className="bio__text" show={this.state.showSecondStep}>
                                Et ensuite la formation de Concepteur Développeur d'applications d'une durée de un an en contrat de professionalisation avec l'entreprise Ewi Télécom spécialisé dans les infrastructure Wi-Fi pour les professionnels du tourisme.
                            </ReactRevealText>
                        </li>
                    </ul>
                    {this.state.showButtonSecondStep &&
                        <div className="bio__next">
                            <button className="bio__next__button" onClick={() => this.showThirdStep()}>
                                <div class="round slowBlink">
                                    <div id="cta">
                                        <span class="arrow primera next "></span>
                                        <span class="arrow segunda next "></span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    }
                </div>

                <div style={{ display: this.state.thirdStepDisplay }}>
                    <ReactRevealText className="bio__text" show={this.state.showThirdStep}>
                        C'est dans cette entreprise que j'ai réellement mis en application toutes les notions apprises en formation que ce soit du développement d'applications Web ou Native ou de la gestion de projet.
                    </ReactRevealText>
                    {this.state.showButtonThirdStep &&
                        <div className="bio__next">
                            <button className="bio__next__button" onClick={() => this.hideBio()}>
                                <div class="round slowBlink">
                                    <div id="cta">
                                        <span class="arrow primera next "></span>
                                        <span class="arrow segunda next "></span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    }
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
    console.log(state);
    return {
        // isStart: state.home.isStart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);

