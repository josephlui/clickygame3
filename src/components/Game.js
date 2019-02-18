import React from 'react';
import Navbar from "./Navbar"
import Header from "./Header"
import RenderImage from "./RenderImageList"
import bird1 from '../images/bird1.jpeg';
import elmo1 from '../images/elmo1.jpg';
import elmo2 from '../images/elmo2.jpg';
import ernie1 from '../images/ernie1.jpeg';
import ernie2 from '../images/ernie2.jpeg';
import grover1 from '../images/grover1.jpeg';
import grover2 from '../images/grover2.jpeg';
import grover3 from '../images/grover3.jpg';
import oscar1 from '../images/oscar1.jpeg';
import oscar2 from '../images/oscar2.jpg';
import team2 from '../images/team2.jpeg';
var _ = require('lodash');

class Game extends React.Component {

    state = {
       imageList: [bird1,elmo1,elmo2,ernie1,ernie2,grover1,grover2,grover3,oscar1,oscar2,team2],
       sortOrder: [0,1,2,3,4,5,6,7,8,9,10],
       randomizeListIndex: [],
       overallScore: 0,
       gameScore: 0,
       resultList: [],
       status: null
    }

    componentDidMount() {
      this.randomize();
    }

    handleClick = (e)=> {
    
        const indexClicked = e.target.attributes.getNamedItem("data").value
        const index = this.state.resultList.indexOf(indexClicked);
        if (index > -1) {
            this.setState(state => { 
                return {
                    gameScore: 0,
                    resultList: [],
                    status: false
                }  
            });
        } else {
            this.setState(state => { 
                        return {
                            overallScore: Math.max( state.gameScore + 1,state.overallScore),
                            gameScore: state.gameScore + 1,
                            status: true,
                            resultList: [...state.resultList, indexClicked]
                        }  
            });
            this.randomize();
        }
    }

    randomize = () => {
        const randomListIndex = _.sampleSize(this.state.sortOrder, this.state.imageList.length);
        this.setState({randomizeListIndex: randomListIndex});
    }

    render(){
        return (
            <div>
            <Navbar status={this.state.status} overallScore={this.state.overallScore} gameScore={this.state.gameScore}/>
            <Header />
            <RenderImage imageList={this.state.imageList} listIndex={this.state.randomizeListIndex} handleClick={this.handleClick}/>
            </div>

        );    
    }
}

export default Game;