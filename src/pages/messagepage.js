import React from 'react'
import ClickHandler from '../components/clickHandler.js'

export default React.createClass({
	displayName: 'MessagePage',
	render (){
		return (
			<div>	
				<h1>{this.props.title}</h1>
				<p>{this.props.body}</p>
			</div>
		)	
	}
})



