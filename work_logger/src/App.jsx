import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import NewItem from './components/NewItem/NewItem';
import Items from './components/Items/Items';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {
				personal: [],
				work: []
			}
		}
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(newItem) {
		let newItems = this.state.items;
		let type = newItem.select;
		let list = this.state.items[type];
		console.log(list);
		if (list && list[0] !== undefined) {
			newItem.id = list[list.length - 1].id + 1;
		}
		else newItem.id = 0;
		newItems[type].push(newItem);
		this.setState(() => ({items:newItems}))
	}
	render() {
		return (
			<Grid>
				<Row id="header"><h1>Work Logger</h1></Row>
				<Row><NewItem handleSubmit={this.handleSubmit}/></Row>
				<Row>
					<Col md={6}>
						<Items
							type='Work'
							items={this.state.items.personal}
						/>
					</Col>
					<Col md={6}>
						<Items
							type='Personal'
							items={this.state.items.work}
						/>
					</Col>          
				</Row>
			</Grid>
		);
		}
	}

export default App;
