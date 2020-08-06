import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Header from '../Header';
import Banner from '../Banner';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "red"
        };
    }

    clic = (status) => {
        const action = { type: "CLICK", value: status }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div className="home" style={{ backgroundColor: this.props.bgColor }}>
                <Header />
                <Banner />
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
    console.log(state);
    return {
        bgColor: state.home.bgColor,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

