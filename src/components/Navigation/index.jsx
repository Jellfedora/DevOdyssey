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

