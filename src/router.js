import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import fourOhFour from './pages/fourOhFour.js'
import PublicPage from './pages/public.js'
import app from 'ampersand-app'

export default Router.extend({
	renderPage(page, opts = {layout:true}){
		let MuiPage = (<MuiThemeProvider>{page}</MuiThemeProvider>)
		ReactDOM.render(MuiPage, document.body);
	},

	routes:{
		'' : 'home',
		'*fourOhFour' : 'fourOhFour'
	},

	home () {
		this.renderPage(<PublicPage posts={app.me.posts} />);
	},
	fourOhFour(){
		this.renderPage(<fourOhFour title="Not Found" body='sorry nothing here'/>)
	}

})
