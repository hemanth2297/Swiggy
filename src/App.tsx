import React from 'react';
import './App.css';
// import DefaultApp from '../src/components/App';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Slides from './components/Slides/Slides';
import Quiz from './components/QuizPage/QuizDashboard';
import Register from './components/RegisterPage/Register';
import Success from './components/RegisterPage/Sucess';

export default class App extends React.Component<any, any>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/slides' component={Slides} />
          <Route exact path='/Quiz' component={Quiz} />
          <Redirect from="*" to='/' />
        </Switch>

      </BrowserRouter>

    );
  }
}

