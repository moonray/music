import React from 'react';
import PropTypes from "prop-types";
import AlbumTeaser from '../AlbumTeaser';
import FilterGenre from "../FilterGenre";
import Sort from "../Sort";

const AlbumList = ({ albums, filterOptions, filter, sort }) => (
  <div className="Albums">
    <h1>Albums</h1>
    <div className="actions">
      <FilterGenre options={filterOptions} onChange={filter}/>
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

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

export default AlbumList;
