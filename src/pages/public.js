import React from 'react'
import ClickHandler from '../components/clickHandler.js'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
	mixins:[ampersandMixin],

	render (){
		let postHtml;
		const {posts} = this.props;
		if (posts){
			postHtml = posts.map((post)=>{
				return(<div>
					<div className="link">	
					<a target="_blank" href={post.text}>{post.text}
						<div key={post.id}><span className="octicon octicon-post"></span>   </div>
						<div>{post.description}</div>
					</a>
					</div>
					<img src={post.avatar_url}></img>		
					</div>
					)
			}
			)

		}else{
			postHtml = <li>Fuck all</li>;
		}
		return (
			<ClickHandler className='container'>
			<header role='banner'>
			<h1>GMe Playlist 1.0</h1>
			</header>
			<div>
			<h2>Beats</h2>
			<ul>	
			{postHtml}
			</ul>
			</div>
			</ClickHandler>
			)	
	}
})



