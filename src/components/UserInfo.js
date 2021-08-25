import React, { Component } from 'react';

export default class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { users: [] };
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({ users: json });
			});
	}
	render() {
		return (
			<div>
				<h1>User info</h1> <br />
				{this.state.users.map(user => (
					<div key={user.name}>
						Name: {user.name} Email: {user.email}
						<br />
						<br />
					</div>
				))}
			</div>
		);
	}
}
