import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Song from '../Song';
import ITunesAlbumImage from '../ITunesAlbumImage';

const Album = ({ album }) => (
  <div className="Album">
    <div className="header"><Link to="/">Back to Album List</Link></div>
    <div className="column-left">
      <figure><ITunesAlbumImage artist={album.artist} album={album.name} size={340}/></figure>
    </div>
    <div className="column-right">
      <h1 className="title">{album.name}</h1>
      <h2 className="artist">{album.artist}</h2>
      <ul className="metadata">
        <li className="genre">{album.genre.name}</li>
        <li className="released">{album.released}</li>
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
        {album.songs.map(function (song) {
          return (
            <Song key={song.id} song={song}/>
          );
        })}
        </tbody>
      </table>
    </div>
  </div>
);

Album.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    genre: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        track: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Album;
