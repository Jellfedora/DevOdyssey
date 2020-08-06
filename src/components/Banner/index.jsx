import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bio from '../Bio';
import Skills from '../Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BirdToFather from '../../ressources/sounds/bensound-birthofahero.mp3'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideTitle: true,
            showBio: false,
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    choiceSound = (soundChoice) => {
        if (soundChoice === true) {
            let audio = new Audio(BirdToFather)
            audio.play()
        }
        const action = { type: "CHANGE_BACKGROUND", value: '#020202' }
        this.props.dispatch(action)
        const action2 = { type: "CHANGE_TEXT_COLOR", value: '#F8F8F8' }
        this.props.dispatch(action2)
        this.showBio()
    }


    showBio = () => {
        this.setState({ hideTitle: false, showBio: true })
    }


    render() {
        return (
            <div className="banner">
                {this.state.hideTitle &&
                    <div className="banner__content">
                        <div className="banner__content__title">
                            <h2>
                                Julien Lecointe Développeur Web Spécialisation React
                            </h2>
                        </div>
                        <div className="banner__content__audio-choice">
                            <div className="banner__content__audio-choice__text">
                                <p>Voulez vous activer le son avant de passer à la suite ?</p>
                            </div>
                            <div className="banner__content__audio-choice__content">
                                <button className="">
                                    <FontAwesomeIcon icon="thumbs-up" size="2x" onClick={() => this.choiceSound(true)} />
                                </button>
                                <button className="">
                                    <FontAwesomeIcon icon="thumbs-down" size="2x" onClick={() => this.choiceSound(false)} />
                                </button>
                            </div>
                        </div>
                        <div className="banner__content__baseline">
                            <p>
                                " J'adore ces petits moments de calme avant la tempête "
                                </p>
                        </div>
                    </div>
                }

                {this.state.showBio &&
                    <div style={{ display: this.props.bioDisplay }}>
                        <Bio />
                    </div>
                }

                {this.props.hideSkills &&
                    <div style={{ display: this.props.skillsDisplay }}>
                        <Skills />
                    </div>
                }
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
        hideBio: state.home.hideBio,
        bioDisplay: state.home.bioDisplay,
        hideSkills: state.home.hideSkills,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);

