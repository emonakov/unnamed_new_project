import React from 'react';
import ReactDOM from 'react-dom';

import './scss/home.scss';

const rootEl = document.getElementById('app-entry');

ReactDOM.render(
    <main className="grid-main">
        <header className="main-page-header">
            <div className="main-page-header__title">
                <h1>Hello world!</h1>
            </div>
        </header>
    </main>,
    rootEl
);
