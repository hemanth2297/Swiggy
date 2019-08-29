import React from 'react';
import './App.css';
import DefaultApp from '../src/components/App';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginPage/Login';


export default class App extends React.Component<any, any>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DefaultApp} />
          <Route exact path='/login' component={Login} />
          <Redirect from="*" to='/' />
        </Switch>

      </BrowserRouter>

    );
  }
}

