import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


//UTIL 
const fetchAllMemorials = () => {
    return axios.get('https://dev.requiemapp.com/public/memorial/random')
}

//ACTIONS
const fetchMemorials = () => dispatch => {
    return fetchAllMemorials().then(memorials => dispatch({ type: 'FETCH_ALL_MEMORIALS', memorials }))
}

//REDUCER
const memorialReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_MEMORIALS':
            return action.memorials
    }
}
let initialState = {}
let store = createStore(memorialReducer, initialState, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
//DISPATCH
// store.dispatch(fetchMemorials())


ReactDOM.render(<Provider store={store}><App fetchMemorials={fetchMemorials} /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
