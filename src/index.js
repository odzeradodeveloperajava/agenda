import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import isServerUp from 'functions/isServerUp/isServerUp';
import { setAppHeight } from 'redux/reducers';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//check if backend server is responding
isServerUp()
//check app height for determine height of current month 
const resizeObserver = new ResizeObserver(x =>  store.dispatch(setAppHeight(x[0].target.clientHeight)))
resizeObserver.observe(document.body)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
