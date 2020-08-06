import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link
} from "react-router-dom";
import { Spring } from 'react-burgers';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    showMenu = () => {
        this.setState({ showMenu: true })
    }

    render() {
        return (
            <div className="header">
                <h1 style={{ color: this.props.textColor }} className="header__title">J L</h1>
                <Spring
                    className="header__menu-icon"
                    active={this.state.showMenu}
                    color={this.props.textColor}
                    width={25}
                    lineSpacing={7}
                    lineHeight={2}
                    onClick={this.showMenu}
                />
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
        textColor: state.home.textColor,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

