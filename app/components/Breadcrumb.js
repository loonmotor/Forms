import React, {Component} from 'react';

class Breadcrumb extends Component {
	render () {
		return (
			<ul className="uk-breadcrumb">
			    <li><a href="">Home</a></li>
			    <li><a href="">Blog</a></li>
			    <li className="uk-active"><span>Article</span></li>
			</ul>
		);
	}
}

export default Breadcrumb;