import React from "react";

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lazyLoaded: null,
    }
  }

  componentDidMount() {
    //load video buffer

    //fade out image

    //fade in video
  }

  render() {
    const { posterSrc, posterAlt, videoSrc } = this.props;

    return (
      <React.Fragment>
        <img src={posterSrc} alt={posterSrc} />
        <video loop autoPlay muted>
          { videoSrc.map(video => <source src={video.src} type={video.mediaType} />)}
        </video>
      </React.Fragment>
    )
  }
};

export default BackgroundVideo;