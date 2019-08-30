import React from 'react';
import './App.css';
import DefaultApp from '../src/components/App';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Slides from './components/Slides/Slides';
import Quiz from './components/QuizPage/QuizDashboard';

export default class App extends React.Component<any, any>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DefaultApp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/slides' component={Slides} />
          <Route exact path='/Quiz' component={Quiz} />
          <Redirect from="*" to='/' />
        </Switch>

      </BrowserRouter>

    );
  }
}

