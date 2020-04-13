import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import App from 'components/App';
import reducers from 'reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store= createStore(reducers,{})
ReactDOM.render(<Root>
    <App />
  </Root>,
  document.getElementById('root')
);
