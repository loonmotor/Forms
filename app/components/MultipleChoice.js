import React, {Component} from 'react';

class MultipleChoice extends Component {
	render () {
		const {questionId} = this.props;		
		return (
			<div className="uk-grid uk-grid-large">
		        <div className="uk-width-1-1"><input type="text" placeholder="" className="uk-width-1-1" /></div>
		        <div className="uk-width-1-1"><input type="text" placeholder="" className="uk-width-1-1" /></div>
		        <div className="uk-width-1-1"><input type="text" placeholder="" className="uk-width-1-1" /></div>
			</div>
		);
	}
}

export default MultipleChoice;