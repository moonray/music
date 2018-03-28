import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetches from "../../fetches";
import Placeholder from './placeholder.png';

class ITunesAlbumImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: Placeholder,
    };

    this.fetchedItunesAlbum = this.fetchedItunesAlbum.bind(this);
  }

  fetchedItunesAlbum(data) {
    if (this._isMounted) {
      this.setState({ src: data.results[0].artworkUrl60 });
    }
  }

  componentDidMount() {
    this._isMounted = true;
    fetches.iTunesCollection(this.props.artist, this.props.album, this.fetchedItunesAlbum);
  }

  componentWillReceiveProps(nextProps) {
    // In case out component received empty props when mounted...
    if (this.props.artist !== nextProps.artist || this.props.album !== nextProps.album) {
      fetches.iTunesCollection(nextProps.artist, nextProps.album, this.fetchedItunesAlbum);
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
