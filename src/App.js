import React, { Component } from 'react';
import * as Survey from 'survey-react'
import './App.css';
import Title from './Title';
import "survey-react/survey.css";


const sendDataToServer = (survey) => {
  // var resultAsString = JSON.stringify(survey.data);
  survey.sendResult('63376b27-fb10-486c-8434-f98223fcda09'); // unique id tied to survey created on surveyjs.io
  // alert(resultAsString); //send Ajax request to your web server.
}

// function sendDataToServer(survey) {
//     survey.sendResult('53686cf7-ae4d-4339-a535-dd33507b0f16');
// }





class App extends Component {
  render() {
    // Survey.Survey.cssType = "bootstrap";
    // // Survey.Survey.StylesManager.applyTheme("modern");

    // const model = new Survey.Model({surveyId: 'cde59f7b-13cf-43d2-ac21-77d7330465e6'}); // surveyId is pulled from online survey created on surveyjs.io. The model is imported.
    
    // Survey.StylesManager.applyTheme("modern");
    var surveyJSON = { surveyId: 'cde59f7b-13cf-43d2-ac21-77d7330465e6', surveyPostId: '63376b27-fb10-486c-8434-f98223fcda09'}


    return (
      <div className="App">
        <Title />
        <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
      </div>
    );
  }
}

export default App;
