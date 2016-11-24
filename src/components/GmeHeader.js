import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


export default React.createClass({
  displayName: 'GmeHeader',
  render() {
    let user;
    if (this.props.user) {
      user = this.findUser(this.props.user);
    }
    return (
      <header role='banner' className='banner'>
        <AppBar
          title={this.props.user ? user.name : "GMe Playlist 3.0"}
          iconElementLeft={<IconButton href={`/`}><ActionHome /></IconButton>}
          iconElementRight={!this.props.likey ? undefined : <FlatButton label="You likey" href={`/likey/${user.user_id}`} />}
          />
      </header>
     )
  },
  findUser(userId){
     let user = { "name" : "Who the fuck are you?", "user_id" : "24" };
     const userArray = [
        { "name" : "Josh Manley", "user_id" : "7723187" },
        { "name" : "Haricot Verts", "user_id" : "9381265" },
        { "name" : "Megan Considine", "user_id" : "3627005" },
        { "name" : "Kenny H", "user_id" : "940820" },
        { "name" : "Alex Grabko", "user_id" : "12556176" },
        { "name" : "Summertime Kinness", "user_id" : "940820" },
        { "name" : "Pablo Lopez", "user_id" : "6569568" }
     ];  

     for (var i = userArray.length - 1; i >= 0; i--) {
       if (userId === userArray[i].user_id) {
         return user = userArray[i];
       }
     };
     return user;
  }
})
