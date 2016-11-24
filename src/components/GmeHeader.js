import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export const GmeHeader = (props) => (
  <header role='banner' className='banner'>
    <AppBar
      title={props.user ? props.user.name : "GMe Playlist 3.0"}
      iconClassNameLeft='no-icon'
      iconElementRight={!props.user ? '' : <FlatButton label="You likey" href={`/likey/${props.user.user_id}`} />}
      />
  </header>
)

// <a href={`/user/${this.props.post.user_id}`}>