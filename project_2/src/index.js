import React from 'react';  
/* (Helper) This helps to import React Module, which is from node_modules directory.
 Also it is different from "import" function in javascript, which just import remote javascript files. It support importing projects and modules.
 */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // What is ReactDOM.render? - this code render a component on its page as it recalls react-dom module.
    //Below (React.StrictMode) prohibit react's legacy function, such as ref, componentWillMount.
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
