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
		'*fourOhFour' : 'fourOhFour'
	},

	home () {
		this.renderPage(<PublicPage posts={app.me.posts}  fetchMoreData={app.me.fetchData} />);
	},
	// user (userId) {
	// 	app.fetch()
	// 	this.renderPage(<PublicPage  posts={app.me.posts}/>);
	// },
	fourOhFour(){
		this.renderPage(<MessagePage title="Not Found" body="get out of here turd"/>)
	}
})

