import React, {Component} from 'react';
import {Link} from 'react-router';
import AuthStatusActionCreators from '../actions/AuthStatusActionCreators';

class NavMenu extends Component {
	handleSignOut (event) {
		AuthStatusActionCreators.signOut();
		event.preventDefault();
	}
	render () {
		return (
			<ul className="uk-subnav uk-subnav-pill uk-float-right">
			  
			{this.props.authStatus ?
			    (
				    <li data-uk-dropdown="{mode:'click'}">

				        
				        <a href="#">Forms <i className="uk-icon-angle-down"></i> </a>

				        
				        <div className="uk-dropdown uk-dropdown-small">
				            <ul className="uk-nav uk-nav-dropdown">
				                <li><Link to="/forms"><i className="uk-icon-folder-o"></i>&nbsp; My Forms</Link></li>
				                <li><Link to="/create"><i className="uk-icon-plus-square-o"></i>&nbsp; Create a New Form</Link></li>
				            </ul>
				        </div>
				    </li>
				)
				:
				''
			}

			    
			    
			</ul>
		);
	}
}

export default NavMenu;