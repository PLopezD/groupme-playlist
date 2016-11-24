import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import MessagePage from './pages/MessagePage.js'
import PublicPage from './pages/public.js'
import app from 'ampersand-app'

require('./styles/main.scss')

export default Router.extend({
	renderPage(page) { 
		let MuiPage = (<MuiThemeProvider>{page}</MuiThemeProvider>)
		ReactDOM.render(MuiPage, document.body);
	},
	routes: {
		'' : 'home',
		'user/:user': 'user',
		'likey/:user': 'likey',
		'*fourOhFour' : 'fourOhFour'
	},
	home () {
		app.me.fetchData()
		this.renderPage(<PublicPage posts={app.me.posts}/>);
	},
	user (userId) {
		app.me.fetchData({user_id:userId});
		this.renderPage(<PublicPage user={userId} likey={true} posts={app.me.posts}/>);
	},
	likey (userId) {
		app.me.fetchData({favorited_by:userId});
		this.renderPage(<PublicPage user={userId} posts={app.me.posts}/>);
	},
	fourOhFour() {
		this.renderPage(<MessagePage title="Not Found" body="get out of here turd"/>)
	}
})