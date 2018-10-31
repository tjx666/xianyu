//  .__                               .__    ________ ________ ________
//  |  | ___.__._______   ____ _____  |  |  /  _____//  _____//  _____/
//  |  |<   |  |\_  __ \_/ __ \__  \ |  | /   __  \/   __  \/   __  \ 
//  |  |_\___  | |  | \/\  ___/ / __ \|  |_\  |__\  \  |__\  \  |__\  \
//  |____/ ____| |__|    \___  >____  /____/\_____  /\_____  /\_____  /
//       \/                  \/     \/            \/       \/       \/ 

/*
 * @Author: lyreal666 
 * @Date: 2018-10-27 09:54:15 
 * @Last Modified by: lyreal666
 * @Last Modified time: 2018-10-27 09:56:04
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = configureStore(initialStore);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();