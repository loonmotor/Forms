import React, {Component} from 'react';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';
import {Container} from 'flux/utils';
import AuthStatusStore from '../stores/AuthStatusStore';
import AuthStatusActionCreators from '../actions/AuthStatusActionCreators';
import serverConfig from '../../server.config';

const {url : {authStatus : authStatusUrl}} = serverConfig;

class NavMenu extends Component {
	componentDidMount () {
		AuthStatusActionCreators.getAuthStatus(NavMenu.getAuthStatus());
	}
	render () {
		return (
			<ul className="uk-subnav uk-subnav-pill uk-float-right">
			  
			
			    <li data-uk-dropdown="{mode:'click'}">

			        
			        <a href="#">Forms <i className="uk-icon-angle-down"></i> </a>

			        
			        <div className="uk-dropdown uk-dropdown-small">
			            <ul className="uk-nav uk-nav-dropdown">
			                <li><Link to="/forms"><i className="uk-icon-folder-o"></i>&nbsp; My Forms</Link></li>
			                <li><Link to="/create"><i className="uk-icon-plus-square-o"></i>&nbsp; Create a New Form</Link></li>
			            </ul>
			        </div>
			    </li>

			    
			    <li data-uk-dropdown="{mode:'click'}">

			        
			        <a href="#">Account <i className="uk-icon-angle-down"></i> </a>

			        
			        <div className="uk-dropdown uk-dropdown-small">
		            	{this.state.authStatus ?
            				(
            					<ul className="uk-nav uk-nav-dropdown">
	            					<li><a href=""><i className="uk-icon-sign-out"></i>&nbsp; Sign Out</a></li>
            					</ul>
	            			)
		            		:
            				(
            					<ul className="uk-nav uk-nav-dropdown">
	            					<li><a href=""><i className="uk-icon-google-plus-square"></i>&nbsp; Google Sign In</a></li>
		            				<li><a href=""><i className="uk-icon-facebook-official"></i>&nbsp; Facebook Sign In</a></li>
	            				</ul>
	            			)
		            	}
			        </div>
			    </li>
			</ul>
		);
	}
}

NavMenu.getAuthStatus = () => {
	return fetch(authStatusUrl)
				.then(response => response.json());
}

NavMenu.getStores = () => [AuthStatusStore];

NavMenu.calculateState = () => ({
	authStatus : AuthStatusStore.getState()
});

export default Container.create(NavMenu);