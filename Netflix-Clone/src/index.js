import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import promise from 'redux-promise';

import App from './containers/App';
import MovieView from './components/MovieView';
// Import main sass file to apply global styles
import './static/sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
import { createBrowserHistory } from "history";
//import history from "history";
const history = createBrowserHistory();

// TODO
// - fix styling issue
// - implemented debouncing
// - implement carousel
// - fix modal backdrop bug
// - add routing and 404 page

// TODO ANGEL PROVIDE THE SUBDOMAIN TO THE APP
const app = (
	<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/view/:videoId" exact={true} component={MovieView} />
	
					<Route path="/404" component={App} />
				</Switch>
	</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('app'));
//		<BrowserRouter>
			//<Router history={history}>
