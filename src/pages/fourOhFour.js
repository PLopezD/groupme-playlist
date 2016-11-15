import React from 'react'

export default React.createClass({
	displayName: 'fourOhFour',
	render () {
		return (
			<div>	
			        <GmeHeader /> 
			        
        <h1>{this.props.title}</h1>
				<h2>Not here bro</h2>
				<p>{this.props.body}</p>
			</div>
		)	
	}
})

