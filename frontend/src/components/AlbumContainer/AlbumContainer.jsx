import React, { Component } from 'react';
import fetches from '../../fetches';
import Album from '../Album';

class AlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        id: -1,
        name: '',
        artist: '',
        genre: { id: -1, name: '' },
        released: -1,
        songs: [],
      },
    };

    this.fetchedAlbum = this.fetchedAlbum.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    fetches.album(this.props.match.params.albumId, this.fetchedAlbum);
  }

  fetchedAlbum(data) {
    if (this._isMounted) {
      this.setState({ album: data });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return <Album album={this.state.album}/>;
  }
}

export default AlbumContainer;
