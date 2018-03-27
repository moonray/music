import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import Album from './Album';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location, albumId = 2) => {
  const album = {
    "id": albumId,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "name": "Oceanic",
    "artist": "Vangelis",
    "released": 1996,
    "genre_id": 2,
    "genre": {
      "id": 2,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "name": "Electronic"
    },
    "songs": [{
      "id": 10,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 1,
      "name": "Bon Voyage",
      "artist": "Vangelis",
      "length": "2:33",
      "album_id": 2
    }, {
      "id": 11,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 2,
      "name": "Sirens' Whispering",
      "artist": "Vangelis",
      "length": "7:59",
      "album_id": 2
    }, {
      "id": 12,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 3,
      "name": "Dreams of Surf",
      "artist": "Vangelis",
      "length": "2:43",
      "album_id": 2
    }, {
      "id": 13,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 4,
      "name": "Spanish Harbour",
      "artist": "Vangelis",
      "length": "6:42",
      "album_id": 2
    }, {
      "id": 14,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 5,
      "name": "Islands of the Orient",
      "artist": "Vangelis",
      "length": "7:24",
      "album_id": 2
    }, {
      "id": 15,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 6,
      "name": "Fields of Coral",
      "artist": "Vangelis",
      "length": "7:44",
      "album_id": 2
    }, {
      "id": 16,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 7,
      "name": "Aquatic Dance",
      "artist": "Vangelis",
      "length": "3:44",
      "album_id": 2
    }, {
      "id": 17,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 8,
      "name": "Memories of Blue",
      "artist": "Vangelis",
      "length": "5:40",
      "album_id": 2
    }, {
      "id": 18,
      "created_at": "2018-03-26 16:17:44",
      "updated_at": "2018-03-26 16:17:44",
      "track": 9,
      "name": "Songs of the Seas",
      "artist": "Vangelis",
      "length": "6:12",
      "album_id": 2
    }]
  };
  const props = {
    album: album,
    match: {
      params: {albumId: albumId},
    },
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: (() => {
      // @todo Can't use {} for all responses; some child component responses are [].
      fetch.mockResponse(JSON.stringify(album));
      return mount(<StaticRouter location={location} context={context}><Album {...props}/></StaticRouter>).dive();
    })(),
  });
};

describe('<Album />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing at /album/2', () => {
    setup({}, '/album/2', 2);
  });
});
