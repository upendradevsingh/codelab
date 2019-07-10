import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider/index';
// ReactDOM.render(<div>Hello ReactDom</div>, document.body); 

ReactDOM.render(<Provider {...window.__PRELOADED_STATE__} />, document.getElementById('content')); 