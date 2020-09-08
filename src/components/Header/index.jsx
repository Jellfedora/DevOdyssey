import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link,
    withRouter
} from "react-router-dom";
import { Spring } from 'react-burgers';
import Zoom from 'react-reveal/Zoom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeMenu: false,
            showHome: false,
            showBio: false,
            showSkills: false,
            showPortfolio: false,
            showContact: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        if (this.props.menuIsShow && (window.pageYOffset = !0)) {
            this.showMenu();
        }
    }

    showMenu = () => {
        if (this.props.menuIsShow) {
            const action = { type: "SHOW_MENU", value: false }
            this.props.dispatch(action)
        } else {
            const action = { type: "SHOW_MENU", value: true }
            this.props.dispatch(action)
        }
    }

    showItem = (item) => {
        this.setState({ [item]: true })
    }

    hideItem = (item) => {
        this.setState({ [item]: false })
    }

    render() {
        return (
            <div className="header" style={{ backgroundColor: this.props.headerColor }}>
                <div className="header__title"><Link to="/"><h1 style={{ color: this.props.textColor }} >J L</h1></Link></div>

                {this.props.truc

                }
                <div className="header__separator"></div>
                <div className="header__menu-icon" >
                    <Spring
                        className="header__menu-icon__icon"
                        active={this.props.menuIsShow}
                        color={this.props.textColor}
                        width={25}
                        lineSpacing={7}
                        lineHeight={2}
                        onClick={this.showMenu}
                    />

                </div>
                <Zoom right when={this.props.menuIsShow} >
                    <div className="header__menu" style={{ backgroundColor: this.props.headerColor }}>
                        <ul className="header__menu__list">
                            <li><Link to="/" style={{ color: this.props.textColor }} onClick={() => this.showMenu()} onMouseEnter={() => this.showItem('showHome')} onMouseLeave={() => this.hideItem('showHome')}>{this.state.showHome ? 'Accueil' : <FontAwesomeIcon icon="home" />}</Link></li>
                            <li><Link to="/bio" style={{ color: this.props.textColor }} onClick={() => this.showMenu()} onMouseEnter={() => this.showItem('showBio')} onMouseLeave={() => this.hideItem('showBio')}>{this.state.showBio ? 'Présentation' : <FontAwesomeIcon icon="user" />}</Link></li>
                            <li><Link to="/skills" style={{ color: this.props.textColor }} onClick={() => this.showMenu()} onMouseEnter={() => this.showItem('showSkills')} onMouseLeave={() => this.hideItem('showSkills')}>{this.state.showSkills ? 'Compétences' : <FontAwesomeIcon icon="cog" />}</Link></li>
                            <li><Link to="/portfolio" style={{ color: this.props.textColor }} onClick={() => this.showMenu()} onMouseEnter={() => this.showItem('showPortfolio')} onMouseLeave={() => this.hideItem('showPortfolio')}>{this.state.showPortfolio ? 'Portfolio' : <FontAwesomeIcon icon="eye" />}</Link></li>
                            <li><Link to="/contact" style={{ color: this.props.textColor }} onClick={() => this.showMenu()} onMouseEnter={() => this.showItem('showContact')} onMouseLeave={() => this.hideItem('showContact')}>{this.state.showContact ? 'Contact' : <FontAwesomeIcon icon="envelope" />}</Link></li>
                        </ul>
                    </div>
                </Zoom>
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
        textColor: state.home.textColor,
        menuIsShow: state.home.showMenu,
        headerColor: state.home.headerColor
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

