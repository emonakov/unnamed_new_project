import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './scss/home.scss';

import necklaceImage from '../../assets/images/necklace.png';

const rootEl = document.getElementById('app-entry');

ReactDOM.render(
    <main className="main-page grid-main">
        <img className="main-page__image main-page__image--necklace" src={necklaceImage}></img>
    </main>,
    rootEl
);
