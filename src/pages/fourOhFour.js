import React from 'react'

export default React.createClass({
	displayName: 'fourOhFour',
	render (){
		return (
			<div>	
				<h1>{this.props.title}</h1>
				<p>{this.props.body}</p>
			</div>
		)	
	}
})

