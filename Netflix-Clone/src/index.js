import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';


import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


import rootReducer from './reducers/index'

import App_container from './containers/App_container';
import MovieView_container from './containers/MovieView_container';
// Import main sass file to apply global styles
import './static/sass/style.scss';

import { createBrowserHistory } from "history";
//import history from "history";
const history = createBrowserHistory();


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)


const app = (
	<Provider store={store}>
		<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App_container} />
					<Route path="/view/:videoId" exact={true} component={MovieView_container} />
	
				</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('app'));
//		<BrowserRouter>
			//<Router history={history}>
