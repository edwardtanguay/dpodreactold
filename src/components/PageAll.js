import React, { Component } from 'react';

class PageAll extends Component {
	constructor() {
		super();
		this.state = {
			flashcards: []
		}
	}
	componentDidMount() {
		fetch('./flashcards.json')
			.then(response => response.json())
			.then(result => {
				const f = result.map(item => {
					return item;
				});
				this.setState({
					flashcards: f
				})
			})
	}
	render() {
		const flashcardsHtml = this.state.flashcards.map(item => (
			<div className="mb-2">
				<div className="bg-secondary p-1 text-white font-italic"><span class="text-uppercase font-weight-bold">{item.category}</span>: {item.front}</div>
				<div className="p-1 theCode">{item.back}</div>
			</div>
		));
		return (
			<div>
				<div className="page bg-dark text-white p-3 ml-4">
					<h1>All Flashcards</h1>
				</div>
				<div className="ml-4 mt-2 text-dark">
					{flashcardsHtml}
				</div>
			</div >
		)
	}
}

export default PageAll;