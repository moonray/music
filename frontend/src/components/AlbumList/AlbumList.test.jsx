import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlbumList from './AlbumList';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location) => {
  const albums = [{
    "id": 1,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "name": "A Kind of Magic",
    "artist": "Queen",
    "released": 1986,
    "genre_id": 3,
    "genre": { "id": 3, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Rock" }
  }, {
    "id": 2,
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
    }
  }, {
    "id": 3,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "name": "We Are All We Need",
    "artist": "Above & Beyond",
    "released": 2015,
    "genre_id": 1,
    "genre": { "id": 1, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Dance" }
  }];
  const props = {
    albums: albums,
    filterOptions: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }],
    filter: jest.fn(),
    sort: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<AlbumList {...props}/>),
  });
};

describe('<AlbumList />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
  it('shallow renders without crashing with no albums', () => {
    setup({ albums: [] });
  });
});
