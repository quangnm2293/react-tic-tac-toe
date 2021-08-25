import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<BrowserRouter>
			<div className='header'>
				<NavLink className='header-item' to='/' exact={true} activeClassName='active'>
					Home
				</NavLink>
				<NavLink className='header-item' to='/about' activeClassName='active'>
					About
				</NavLink>
				<NavLink className='header-item' to='/product' activeClassName='active'>
					Product
				</NavLink>
			</div>
			<div>
				<Switch>
					<Route path='/about'>
						<AboutPage />
					</Route>
					<Route path='/product/:id'>
						<ProductPage />
					</Route>
					<Route path='/product'>
						<ProductPage />
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
