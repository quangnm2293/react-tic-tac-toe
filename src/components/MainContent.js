import React from 'react';
import Link from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function MainContent() {
	return (
		<ThemeContextConsumer>
			{context => (
				<div className={`main ${context.theme}`}>
					<h1>Products</h1>
					<a href='/'>Back to home</a>
				</div>
			)}
		</ThemeContextConsumer>
	);
}
