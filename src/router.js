import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import MessagePage from './pages/messagepage.js'
import PublicPage from './pages/public.js'
import Layout from './layout.js'
import config from './config'
import app from 'ampersand-app'

export default Router.extend({
	
	renderPage(page, opts = {layout:true}){
		if (opts.layout){
			page = (
				<Layout>
				{page}
				</Layout>
				)
		}
		React.render(page, document.body)
	},

	routes:{
		'' : 'home',
		'*fourOhFour' : 'fourOhFour'
	},

	home () {
		this.renderPage(<PublicPage posts={app.me.posts} />);
	},
	fourOhFour(){
		this.renderPage(<MessagePage title="Not Found" body='sorry nothing here'/>)
	}

})
