import 'library/stylesheets/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './antd.less';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

//inside your starter code, do this

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
