import React from 'react'
import localLinks from 'local-links'
import app from 'ampersand-app'


export default React.createClass({
	displayName:'clickHandler',

	onClick (event){
		const pathname = localLinks.getLocalPathname(event)
		if (pathname){
			event.preventDefault()
			app.router.history.navigate(pathname)
			app.trigger('local', {lol:'yeah'})
		}
	},
	render () {
		return (
			<div onClick={this.onClick} {...this.props}>
					{this.props.children}
				</div>
				)
	}

})


