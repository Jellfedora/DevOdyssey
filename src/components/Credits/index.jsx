import React, { Component } from 'react';
import { connect } from 'react-redux';
class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // Title
        document.title = 'DevOdyssey - Crédits';
    }

    render() {
        return (
            <div className="credits">
                Musique

                Titre:  All The Regrets
                Auteur: Loik Brédolèse
                Source: https://soundcloud.com/blurturtle
                Licence: https://creativecommons.org/licenses/by/4.0/deed.fr
                Téléchargement (5MB): https://auboutdufil.com/?id=532
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
        // hideBio: state.home.hideBio,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Credits);

