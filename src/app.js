import Router from './router'
import app from 'ampersand-app'
import User from './models/user.js'
import PostCollection from './models/post-collection.js'

require('./styles/main.styl')


window.app = app;

app.extend({
	init () {
		this.me = new User();
		this.me.fetchInitialData();
		this.router = new Router();
		this.router.history.start();
	}
})

app.init()


