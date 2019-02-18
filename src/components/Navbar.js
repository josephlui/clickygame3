import React from 'react';



function Navbar (props){

    var result =  (props.status === null) ? 
    'Click an image to begin!' : (props.status === true) ? 'Your guessed Correctly' : 'Game Over'

        return (
        <ul className="nav">
        <li className="nav-item">
          Clicky Game
        </li>
        <li className="nav-item">
        {result}
        </li>
        <li className="nav-item">Score {props.gameScore} | Top Score {props.overallScore}
        </li>
      </ul>
    )
}


export default Navbar;