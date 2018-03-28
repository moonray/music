import React, { Component } from 'react';
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
  }

  componentDidMount() {
    this._isMounted = true;

    const albumId = this.props.match.params.albumId;

    fetch(process.env.REACT_APP_BACKEND_API_URL + '/album/' + albumId)
      .then(data => data.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ album: data });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return <Album album={this.state.album}/>;
  }
}

export default AlbumContainer;
