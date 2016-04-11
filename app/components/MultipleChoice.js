import React, {Component} from 'react';

class MultipleChoice extends Component {
	render () {
		const {questionId} = this.props;		
		return (
			<div>
				<input type="text" placeholder="" className="uk-width-1-1" />
				<input type="text" placeholder="" className="uk-width-1-1" />
				<input type="text" placeholder="" className="uk-width-1-1" />
			</div>
		);
	}
}

export default MultipleChoice;