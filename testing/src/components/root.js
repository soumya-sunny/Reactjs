import React from 'react';
import ReactDOM from 'react-dom';
import reducers from 'reducers';
import { createStore,applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

const store = createStore(reducers, {})


const root= ({children,initialState={}}) => {
    const store=createStore(reducers, initialState,applyMiddleware(reduxPromise));
    return (<Provider store={store}>
        <React.StrictMode>
            {children}
        </React.StrictMode>
    </Provider>)
}

export default root;