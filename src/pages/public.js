import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import { LocalCard } from '../components/card';
import { GridList } from 'material-ui/GridList';
import { GmeHeader } from '../components/GmeHeader';

require('../styles/main.scss')

export default React.createClass({
	mixins:[ampersandMixin],

	render (){
		let postHtml;
		const {posts} = this.props;
		if (posts) {
			postHtml = posts.map((post)=>{
				return (
						 <LocalCard post={post} key={post.id} />
					)
				})
		}else{
			postHtml = <div>Fuck all</div>;
		}

		return (
      <section> 
        <GmeHeader /> 
          <div style={styles.root}> 
            <GridList 
                cellHeight={450}
                cols={3}
                padding={10}
              >
                { postHtml }
            </GridList>
          </div>
      </section> 
			)	
	}
})

const styles = {
	gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}