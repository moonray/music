import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlbumTeaser from './AlbumTeaser';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const album = {
    "id": 1,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "name": "A Kind of Magic",
    "artist": "Queen",
    "released": 1986,
    "genre_id": 3,
    "genre": { "id": 3, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Rock" },
    "songs": [{
      "id": 1,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 1,
      "name": "One Vision",
      "artist": "Queen",
      "length": "5:10",
      "album_id": 1
    }, {
      "id": 2,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 2,
      "name": "A Kind of Magic",
      "artist": "Queen",
      "length": "4:24",
      "album_id": 1
    }, {
      "id": 3,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 3,
      "name": "One Year of Love",
      "artist": "Queen",
      "length": "4:26",
      "album_id": 1
    }, {
      "id": 4,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 4,
      "name": "Pain Is So Close to Pleasure",
      "artist": "Queen",
      "length": "4:21",
      "album_id": 1
    }, {
      "id": 5,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 5,
      "name": "Friends Will Be Friends",
      "artist": "Queen",
      "length": "4:07",
      "album_id": 1
    }, {
      "id": 6,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 6,
      "name": "Who Wants to Live Forever",
      "artist": "Queen",
      "length": "5:15",
      "album_id": 1
    }, {
      "id": 7,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 7,
      "name": "Gimme the Prize (Kurgan's Theme)",
      "artist": "Queen",
      "length": "4:34",
      "album_id": 1
    }, {
      "id": 8,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 8,
      "name": "Don't Lose Your Head",
      "artist": "Queen",
      "length": "4:38",
      "album_id": 1
    }, {
      "id": 9,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 9,
      "name": "Princes of the Universe",
      "artist": "Queen",
      "length": "3:32",
      "album_id": 1
    }]
  };
  const props = {
    album: album,
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: shallow(<AlbumTeaser {...props}/>),
  });
};

describe('<AlbumTeaser />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});
