import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Provider} from 'react-redux'
import {HashRouter,BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'


export const store = createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <HashRouter>
                    <App />
                </HashRouter>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
