// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import ResetStyle from './components/styled/Reset';
import GlobalStyle from './components/styled/Global';

import App from './components/App';

ReactDOM.render(
    <>
        <ResetStyle />
        <GlobalStyle />
        <App />
    </>
    , document.querySelector('#root')
);

