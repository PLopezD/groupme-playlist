import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export class LocalCard extends Component {
  constructor() {
    super();
  }
  makeYouTubeUrl(url) {
    let iframeUrl;
    if (url.indexOf('youtu.be/') != -1) {
      const lastSlash = url.lastIndexOf('/');
      const id = url.substring(lastSlash, url.length);
      iframeUrl =  `https://www.youtube.com/embed${id}`;
    } else {
      iframeUrl = url.replace("watch?v=", "v/");
    }
    return iframeUrl;
  }

  render () {
    let url = this.makeYouTubeUrl(this.props.post.text);
    return (
      <div className='card-container'>
        <a target="_blank" href={this.props.post.text}>
          <Card>
            <CardHeader
              title={this.props.post.name}
              subtitle={this.props.post.description || this.props.post.text}
              avatar={this.props.post.avatar_url}
            />
            <CardMedia>
              <iframe height="350" width='300' src={url} frameBorder="0" allowFullScreen></iframe>
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}
