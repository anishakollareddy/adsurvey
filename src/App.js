import React, { Component } from 'react';
import * as Survey from 'survey-react'
import logo from './logo.svg';
import './App.css';

const sendDataToServer = (survey) => {
  // var resultAsString = JSON.stringify(survey.data);
  survey.sendResult('53686cf7-ae4d-4339-a535-dd33507b0f16'); // unique id tied to survey created on surveyjs.io
  // alert(resultAsString); //send Ajax request to your web server.
}

// function sendDataToServer(survey) {
//     survey.sendResult('53686cf7-ae4d-4339-a535-dd33507b0f16');
// }

class App extends Component {
  render() {
    Survey.Survey.cssType = "bootstrap";
    const model = new Survey.Model({surveyId: '0320a725-4523-4536-bf21-91febbfd2eca'}); // surveyId is pulled from online survey created on surveyjs.io. The model is imported.

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Survey.Survey model={model} onComplete={sendDataToServer}/>
      </div>
    );
  }
}

export default App;
