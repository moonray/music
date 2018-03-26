import React, { Component } from 'react';
import util from 'util';
import PropTypes from 'prop-types';
import Placeholder from './placeholder.png';

const API = 'https://itunes.apple.com/search?term=%s+%s&entity=album&limit=1';

class ITunesAlbumImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: Placeholder,
    };
  }

  fetchSrc(props) {
    // Make sure we have valid artist and album.
    if (props.artist && props.album) {
      const api = util.format(API, encodeURIComponent(props.artist), encodeURIComponent(props.album));

      fetch(api)
        .then(data => data.json())
        .then(data => {
          if (this._isMounted) {
            this.setState({ src: data.results[0].artworkUrl60 });
          }
        });
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchSrc(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // In case out component received empty props when mounted...
    if (this.props.artist !== nextProps.artist || this.props.album !== nextProps.album) {
      this.fetchSrc(nextProps);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <img src={this.state.src.replace('60x60', this.props.size + 'x' + this.props.size)} alt='' style={{
          alignSelf: 'center',
          height: this.props.size + 'px',
          width: this.props.size + 'px',
        }}/>
      </div>
    );
  }
}

ITunesAlbumImage.propTypes = {
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    30,
    40,
    60,
    80,
    100,
    110,
    130,
    150,
    160,
    170,
    190,
    200,
    220,
    230,
    240,
    250,
    340,
    400,
    440,
    450,
    460,
    480,
    600,
    1200,
    1400,
  ]).isRequired,
};

export default ITunesAlbumImage;
