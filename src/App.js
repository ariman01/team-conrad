import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VisaRewardRegister from './components/visa-reward-register';
import './App.css';

class App extends Component {


  render(){
    return (
        <div className="App">
            <Switch>
                <Route exact path= "/" render={() =>(<VisaRewardRegister/> )}/>
            </Switch>
        </div>
    );
  }
}

export default App;
