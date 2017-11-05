import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk  from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Dashboard from './components/Dashboard';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/stack' component={ Stack } />
        <Route path='/stack_form' component={ StackForm } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);