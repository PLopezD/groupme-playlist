import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export class LocalCard extends Component {
  constructor() {
    super();
  }
  makeYouTubeUrl(url) {
    if (!url) { return 'somethings wrong in the url'}
    let picUrl;
    if (url.indexOf('youtu.be/') != -1) {
      const lastSlash = url.lastIndexOf('/');
      const id = url.substring(lastSlash, url.length);
      picUrl =  `https://img.youtube.com/vi${id}/0.jpg`;``
    } else {
      picUrl = 'https://img.youtube.com/vi/fuckall/0.jpg'
    }
    return picUrl;
  }

  render () {
    let url = this.makeYouTubeUrl(this.props.post.text);
    const d = new Date(this.props.post.created_at).toDateString();
    let subtitle = `${this.props.post.description || this.props.post.text}`

    return (
      <div className='card-container'>
          <Card>
            <a href={`/user/${this.props.post.user_id}`}>
              <CardHeader
                title={this.props.post.name}
                subtitle={subtitle}
                avatar={this.props.post.avatar_url}
              />  
            </a>
            <a target="_blank" href={this.props.post.text}>
              <CardMedia>
                <img src={url} alt="we're fucked mate" height="350" width="300"/>
              </CardMedia>
            </a>  
          </Card>
      </div>
    )
  }
}

// <iframe height="350" width='300' src={url} frameBorder="0" allowFullScreen></iframe>