import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';


export const GmeBottom = (props) => (
  <section role='banner' style={{
    fontFamily:'Roboto, sans-serif',
    paddingBottom:'20px'
  }}>

    {props.fetch ? <aside>Wait one second asshole...<LinearProgress mode="indeterminate" /> </aside>  : <span>?</span>}
  </section>
)

