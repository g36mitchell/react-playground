import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App'; */
/*import HelloWorld from './state-drills/HelloWorld'; */
/*import Bomb from './state-drills/Bomb'; */
import RouletteGun from './state-drills/RouletteGun';

/*
ReactDOM.render(
        <App />, 
        document.getElementById('root')
);
*/
/*
ReactDOM.render(
        <HelloWorld />,
        document.getElementById('root')
)
*/
ReactDOM.render(
        <RouletteGun bulletInChamber={8}  />,
        document.getElementById('root')
)

