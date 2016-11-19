import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import { LocalCard } from '../components/card';
import { GridList } from 'material-ui/GridList';
import { GmeHeader } from '../components/GmeHeader';
import { GmeBottom } from '../components/GmeBottom';

export default React.createClass({
  mixins:[ampersandMixin],
   getInitialState: function() {
    return {
      cols: 3,
      offset:0,
      fetch:true
    };
  },
	render (){
		let postHtml;
		const {posts} = this.props;
		if (posts) {
			postHtml = posts.map((post)=>{
				return (
						 <LocalCard class='test' post={post} key={post.id} />
					)
				})
		}else{
      postHtml = <div>Fuck all, something's broke</div>;
		}

		return (
      <section> 
        <GmeHeader /> 
          <div className='container'> 
            <GridList 
                cellHeight={450}
                cols={this.state.cols}
                padding={10}
              >
                { postHtml }
            </GridList>
          </div>
          <GmeBottom fetch={this.state.fetch}/>
      </section> 
			)	
	},
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
      window.addEventListener("scroll", this.fetchMore);
  },
  componentWillMount() {
    const width = window.innerWidth;
    this.setWidth(width);
  },
  fetchMore() {
    if (window.scrollY - 4500 > window.innerHeight) {
      console.log(this)
    }
  },
  updateDimensions(e) {
    const width = e.target.innerWidth;
    this.setWidth(width);
  },
  setWidth(width) {
   if (width < 500) {
      this.setState({cols:1})
    } else if (width < 750) {
      this.setState({cols:2})
    } else {
      this.setState({cols:3})
    } 
  }
})
