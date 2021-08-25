import React, { useState } from 'react';

export default function NewCounter() {
	const [count, setCount] = useState(Date);
	const [previousClicks, setPreviousClicks] = useState(0);
	const inputChange = e => {
		setPreviousClicks(Number(e.target.value));
	};

	setInterval(() => {
		setCount(new Date().toLocaleString());
	}, 100);

	return (
		<div>
			<lable>
				Previous clicks:
				<input type='text' value={previousClicks} onChange={inputChange} />
			</lable>
			<p> {count} </p>
			<button>Click me</button>
		</div>
	);
}
