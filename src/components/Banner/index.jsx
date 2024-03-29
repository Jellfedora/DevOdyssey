import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BellNextRoute from '../../ressources/sounds/Bell-Next_Route.mp3';
import { Redirect } from "react-router-dom";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBio: false
        };
    }

    componentDidMount() {
        const action = { type: "CHANGE_BACKGROUND", value: 'white' }
        this.props.dispatch(action)
        const action2 = { type: "CHANGE_TEXT_COLOR", value: 'black' }
        this.props.dispatch(action2)
        const action3 = { type: "CHANGE_HEADER_COLOR", value: 'transparent' }
        this.props.dispatch(action3)
        // Title
        document.title = 'DevOdyssey - Développeur Web Front-end - Accueil';
    }

    choiceSound = (soundChoice) => {
        if (soundChoice === true) {
            let audio = new Audio(BellNextRoute)
            audio.play()
        }
        const action = { type: "SHOW_SELECT_SOUND", value: false }
        this.props.dispatch(action)
        this.showBio()
    }

    showBio = () => {
        this.setState({ showBio: true })
    }

    render() {
        if (this.state.showBio) {
            return <Redirect to='/bio' />;
        }
        return (
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__content__title">
                        <h1>
                            DevOdyssey
                        </h1>
                    </div>
                    {this.props.showSelectSound &&
                        <div className="banner__content__audio-choice">
                            <div className="banner__content__audio-choice__text">
                                <p>Etes vous d'accord pour activer le son ?</p>
                            </div>
                            <div className="banner__content__audio-choice__content">
                                <button>
                                    <FontAwesomeIcon icon="thumbs-up" size="2x" onClick={() => this.choiceSound(true)} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon="thumbs-down" size="2x" onClick={() => this.choiceSound(false)} />
                                </button>
                            </div>
                        </div>
                    }

                    <div className="banner__content__baseline">
                        <p>
                            " J'adore ces petits moments de calme avant la tempête "
                        </p>
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
        showSelectSound: state.home.showSelectSound,
        menuIsShow: state.home.showMenu,
        isSmallScreen: state.home.isSmallScreen
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);

