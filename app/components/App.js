import React, {Component} from 'react';
import NavMenu from './NavMenu';
import {Link} from 'react-router';
import Breadcrumbs from 'react-breadcrumbs';
import fetch from 'isomorphic-fetch';
import AuthStatusActionCreators from '../actions/AuthStatusActionCreators';
import serverConfig from '../../server.config';
import {Container} from 'flux/utils';
import AuthStatusStore from '../stores/AuthStatusStore';
import {browserHistory} from 'react-router';

const {url : {authStatus : authStatusUrl}} = serverConfig;

class App extends Component {
	componentDidMount () {
		AuthStatusActionCreators.fetchAuthStatus();
		window.successRedirect = () => {
			browserHistory.push('/');
			AuthStatusActionCreators.fetchAuthStatus();
		}
	}
	render () {
		return (
			<div>
				<div className="uk-grid">
					<div className="uk-width-1-1">

					</div>
				</div>
				<div className="uk-grid">
					<div className="uk-width-small-2-3 uk-container-center">
						<div className="uk-grid">
							<div className="uk-width-1-3">
								<Link to="/">
									<div className="uk-badge uk-text-large uk-text-bold"><i className="uk-icon-file-text"></i> Forms</div>
								</Link>
							</div>
							<div className="uk-width-2-3">
								<NavMenu authStatus={this.state.authStatus} />
							</div>
						</div>
						<div className="uk-grid">
							<div className="uk-width-1-1">
								<Breadcrumbs routes={this.props.routes}
											 params={this.props.params}
											 separator=""
											 setDocumentTitle={true}
											 customClass="uk-breadcrumb"
											 wrapperElement="ul"
											 itemElement="li" />
							</div>
						</div>
						<div className="uk-grid">
							<div className="uk-width-1-1">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

App.getStores = () => [AuthStatusStore];

App.calculateState = (prevState) => ({
	authStatus : AuthStatusStore.getState()
});

export default Container.create(App);