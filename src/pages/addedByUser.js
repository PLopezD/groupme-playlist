import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import { LocalCard } from '../components/card';
import { GridList } from 'material-ui/GridList';
import { GmeHeader } from '../components/GmeHeader';

require('../styles/main.scss')

export default React.createClass({
    mixins:[ampersandMixin],
   getInitialState: function() {
    return {
      cols: 3
    };
  },
  render (){
    let postHtml;
    const { posts } = this.props;
    console.log(this.props.test)
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
      </section> 
      ) 
  },

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  },
  componentWillMount() {
    const width = window.innerWidth;
    this.setWidth(width);
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
