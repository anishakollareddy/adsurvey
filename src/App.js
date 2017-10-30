import React, { Component } from 'react';
import * as Survey from 'survey-react'
import logo from './logo.svg';
import './App.css';

const sendDataToServer = (survey) => {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
}

class App extends Component {
  json = { title: "Tell us, what technologies do you use?", pages: [
    { name:"page1", questions: [
        { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
        { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
     ]},
    { name: "page2", questions: [
      { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
      { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
    { name: "page3",questions: [
      { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
   ]
  };

  render() {
    Survey.Survey.cssType = "bootstrap";
    const model = new Survey.Model(this.json);

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
