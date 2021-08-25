import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import About from '../pages/AboutPage';

export default function Navbar() {
	return (
		<ThemeContextConsumer>
			{context => {
				return (
					<BrowserRouter>
						<div className={`navbar ${context.theme}`}>
							<div className='navbar-btn'>
								<div>
									<Link to='/'>React Context App</Link>
								</div>
								<div>
									<Link to='/Productpage'>Product</Link>
								</div>
								<div>
									<Link to='/About'>About</Link>
								</div>
								<div>
									<Switch>
										<Route path='/Product'>
											<ProductPage />
										</Route>
										<Route path='/About'>
											<About />
										</Route>
									</Switch>
								</div>
							</div>

							<button onClick={context.toggleTheme}>Toggle Theme</button>
						</div>
					</BrowserRouter>
				);
			}}
		</ThemeContextConsumer>
	);
}
