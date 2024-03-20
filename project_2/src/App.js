import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';  
//If you don't want to use <div> elements in JSX form, you can use this <Fragment> content </Fragment>

function App() {  //A functional component called "App" was made by using Function keyword.

  const name = "mkchoi";
  const undif = undefined;

  return (    //below code is called "JSX (Javascript + XML)"
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            name === 'mkchoi' ?    // if&else clause cannot be used in JSX. Instead, You can use below conditional operator
            (
              <p>Hello {name}!!! </p>
            ) : 
            (
              <p>Hello annoymous!!! </p>
            )
          }

          {
            name === 'mkchoi' && // if clasue example
            <p>glad to be see you again!!!</p>
          }

           {undif || <p> Have a great day ^-^ </p>}
          
          {/* comment can be done with {} .
          Edit <code>src/App.js</code> and save to reload.
          */}


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div style=
          {{
            // * When you apply style in React's DOM, you have to apply with camelCase like below(remove dash) 
            backgroundColor : 'black' ,
            color: 'pink',
            fontSize : '20'
          }}
        >
          {name}
        </div>
      </body>
    </div>
  );
}

export default App;
