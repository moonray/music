import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Song = (props) => (
    <tr className="Song">
      <td className="track">{props.song.track}</td>
      <td className="title">{props.song.name}</td>
      <td className="length">{props.song.length}</td>
    </tr>
);

Song.propTypes = {
  song: PropTypes.object.isRequired,
};

export default Song;
