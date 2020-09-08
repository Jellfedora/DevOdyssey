import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SkillsFront from "../SkillsFront";
import SkillsBack from "../SkillsBack";
import Header from '../Header';
import Particles from '../Particles';
import Banner from '../Banner';
import Contact from '../Contact';
import Bio from '../Bio';
import Credits from '../Credits';
import Portfolio from '../Portfolio';


class Navigation extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.resize)

        // Detect screen size
        if (window.innerWidth < 768) {
            console.log('ici')
            const action = { type: "TOGGLE_DEVICE_SIZE_VALUE", value: true }
            this.props.dispatch(action)
        }
    }

    resize = () => {
        if (window.innerWidth > 768) {
            const action = { type: "TOGGLE_DEVICE_SIZE_VALUE", value: true }
            this.props.dispatch(action)
        } else {
            const action = { type: "TOGGLE_DEVICE_SIZE_VALUE", value: false }
            this.props.dispatch(action)
        }
    }


    render() {
        return (
            <div className="home" style={{ backgroundColor: this.props.bgColor }}>
                <Router>
                    <Switch>
                        <Route path="/skills-other">
                            <SkillsBack />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route path="/credits">
                            <Credits />
                        </Route>
                        <Route path="/bio">
                            <Bio />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/skills">
                            <SkillsFront />
                        </Route>
                        <Route path="/">
                            <Banner />
                        </Route>
                    </Switch>
                    <Header />
                    <Particles />
                </Router>
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
        bgColor: state.home.bgColor
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

