import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Song from '../Song';
import ITunesAlbumImage from '../ITunesAlbumImage';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        name: '',
        artist: '',
        genre: { name: '' },
        released: '',
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
    return (
      <div className="Album">
        <div className="header"><Link to="/">Back to Album List</Link></div>
        <div className="column-left">
          <figure><ITunesAlbumImage artist={this.state.album.artist} album={this.state.album.name} size={340}/></figure>
        </div>
        <div className="column-right">
          <h1 className="title">{this.state.album.name}</h1>
          <h2 className="artist">{this.state.album.artist}</h2>
          <ul className="metadata">
            <li className="genre">{this.state.album.genre.name}</li>
            <li className="released">{this.state.album.released}</li>
          </ul>
          <table className="songsList">
            <thead>
            <tr>
              <th className="track">&#160;</th>
              <th className="title">Title</th>
              <th className="length">Time</th>
            </tr>
            </thead>
            <tbody>
            {this.state.album.songs.map(function (song) {
              return (
                <Song key={song.id} song={song}/>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Album;
