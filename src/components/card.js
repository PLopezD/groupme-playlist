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
      picUrl =  `https://img.youtube.com/vi${id}/0.jpg`;
      console.log(picUrl)
    } else {
      picUrl = 'https://lh3.googleusercontent.com/FOBz3oA4IA6F3Kg9KhAHH3S0UX1ID27IDwSJdz46rCa9QFWcJrMmHDRgxVf48pV3tg=w300'
    }
    return picUrl;
  }

  render () {
    let url = this.makeYouTubeUrl(this.props.post.text);
    const d = new Date(this.props.post.created_at).toDateString();
    let subtitle = `${this.props.post.description || this.props.post.text}`
    return (
      <div className='card-container'>
        <a target="_blank" href={this.props.post.text}>
          <Card>
            <CardHeader
              title={this.props.post.name}
              subtitle={subtitle}
              avatar={this.props.post.avatar_url}
            />
            <CardMedia>
              <img src={url} alt="Smiley face" height="350" width="300"/>
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}

// <iframe height="350" width='300' src={url} frameBorder="0" allowFullScreen></iframe>