import React from 'react';
import PropTypes from "prop-types";
import AlbumTeaser from '../AlbumTeaser';
import FilterGenre from "../FilterGenre";
import Sort from "../Sort";

const Albums = ({ albums, sort, filter }) => (
  <div className="Albums">
    <h1>Albums</h1>
    <div className="actions">
      <FilterGenre onChange={filter}/>
      <Sort onChange={sort}/>
    </div>
    <ul className="albumsList">
      {albums.map(function (album) {
        return (
          <li key={album.id}>
            <AlbumTeaser album={album}/>
          </li>
        );
      })}
    </ul>
  </div>
);

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Albums;
