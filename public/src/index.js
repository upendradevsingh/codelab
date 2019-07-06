import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<div>Hello ReactDom</div>, document.body); 



ReactDOM.render(<div>
    {window.__PRELOADED_STATE__.map(item => <img src={item.Images} />)}
</div>, document.body); 