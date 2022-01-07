import React from 'react';
// Import Redux Store
import { Provider } from "react-redux";
import store from '../../store';
// Import Sass
import "../../styles/index.scss";
// Import Components
import Navigation from "../Navigation";

// Fontawesome 5
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown, faHome, faUser, faCog, faEye, faEnvelope, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'; //For brand icons
library.add(faThumbsUp, faThumbsDown, faGithub, faHome, faUser, faCog, faEye, faEnvelope, faChevronLeft, faChevronRight, faFacebook);

const App = () => {
    return (
        <Provider store={store} className="app"  >
            <Navigation />
        </Provider>
    );
};
export default App;