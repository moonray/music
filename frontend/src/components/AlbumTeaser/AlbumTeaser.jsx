import React from 'react';
import { Link } from 'react-router-dom';
import ITunesAlbumImage from '../ITunesAlbumImage';
import PropTypes from 'prop-types';

const AlbumTeaser = (props) => (
  <div className="AlbumTeaser">
    <figure><Link to={`/album/${props.album.id}`}><ITunesAlbumImage artist={props.album.artist} album={props.album.name} size={130} /></Link></figure>
    <h1 className="title"><Link to={`/album/${props.album.id}`}>{props.album.name}</Link></h1>
    <h2 className="artist">{props.album.artist}</h2>
    <ul className="metadata">
      <li className="genre">{props.album.genre.name}</li>
      <li className="released">{props.album.released}</li>
    </ul>
  </div>
);

AlbumTeaser.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumTeaser;
