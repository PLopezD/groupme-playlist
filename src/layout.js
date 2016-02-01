import React from 'react'
import localLinks from 'local-links'
import ampersandMixin from 'ampersand-react-mixin'
import ClickHandler from './components/clickHandler.js'

export default React.createClass({
	mixins:[ampersandMixin],
	render (){
		return (
			<ClickHandler>
				<nav className='top-nav top-nav-light cf' role='navigation'>
				</nav>
				<div className='container'>
					{this.props.children}
				</div>
			</ClickHandler>
			)	
	}
})



