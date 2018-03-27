import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Song from './Song';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const song = {
    "id": 18,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 9,
    "name": "Songs of the Seas",
    "artist": "Vangelis",
    "length": "6:12",
    "album_id": 2
  };
  const props = {
    song: song,
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: shallow(
      <table>
        <tbody>
          <Song {...props}/>
        </tbody>
      </table>
    ).find('Song'),
  });
};

describe('<Song />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});
