import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import { LocalCard } from '../components/card';
import { GridList } from 'material-ui/GridList';
import GmeHeader from '../components/GmeHeader';
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
	render () {
		let postHtml;
		const { posts } = this.props;
		if (posts) {
			postHtml = posts.map((post,i)=>{
				return (
						 <LocalCard class='test' post={post} key={i} />
					)
				})
		} else {
      postHtml = <div>Fuck all, something's broke</div>;
		};
    
		return (
      <section> 
        <GmeHeader {...this.props} /> 
          <div className='container'> 
            <GridList 
                cellHeight={450}
                cols={this.state.cols}
                padding={10}
              >
                { postHtml }
            </GridList>
          </div>
          <GmeBottom fetch={this.props.posts.length === 0 }/>
      </section> 
			)	
	},
  componentDidMount() {
    this.scrollTimer = null;
    window.addEventListener("resize", this.updateDimensions);
    // commented out cause fuck pagination
    // window.addEventListener("scroll", this.scrollCheck);
  },
  componentWillMount() {
    const width = window.innerWidth;
    this.setWidth(width);
  },
  scrollCheck() {
   if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);   // clear any previous pending timer
    }
    this.scrollTimer = setTimeout(() => {
      if (window.scrollY - 1500 > window.innerHeight) {
       this.fetchMore();
      }
    }, 500); 
    
  },
  fetchMore() {
    console.log('in fetch more')
    this.setState({offset:this.state.offset + 1})
    this.props.user.fetchData({offset:this.state.offset})
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
