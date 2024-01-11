import React, { Component } from "react";
import "../Components/QuizComponent.css";

export class QuizComponent extends Component {
  render() {
    return (
        <div className="mainContainer">
            <div className="mainBox">
                <div className='heading'>
                    <h1>Questions:</h1>
                </div>
                <div className='Numbers'>
                    <h4>1 of 15</h4>
                </div>
                <div className='Questions'>
                    <p>Which is the only mamal that can jump?</p>
                </div>
                <div className='chooseBox'>
                      <div className="choose"><h2>Dog</h2></div>
                      <div className="choose"><h2>Elephant</h2></div>
                      <div className="choose"><h2>Goat</h2></div>
                      <div className="choose"><h2>Lion</h2></div>
                </div>
                <div className="buttonq">
                        <button className="bluee">Previous</button>
                        <button className="greenn">Next</button>
                        <button className="redd">Quit</button>
                </div>
            </div>
        </div>
    );
  }
}

export default QuizComponent;
