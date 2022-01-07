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

                Track: Bells — Next Route [Audio Library Release]
                Music provided by Audio Library Plus
                Watch: https://youtu.be/ySHvCIfonKs
                Free Download / Stream: https://alplus.io/bells
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

