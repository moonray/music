import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import AlbumListContainer from './AlbumListContainer';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
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
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: (() => {
      fetch.mockResponseOnce(JSON.stringify(albums));
      return shallow(<AlbumListContainer {...props}/>);
    })(),
  });
};

describe('<AlbumListContainer />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('shallow renders without crashing', () => {
    setup({});
  });

  it('changes state on sort', () => {
    const { props, wrapper } = setup({});

    const column = 'randomColumnName';
    const direction = 'desc';

    wrapper.instance().sort(column, direction);
    expect(wrapper.instance().state.sort.column).toEqual(column);
    expect(wrapper.instance().state.sort.direction).toEqual(direction);
  });

  it('changes state on filter', () => {
    const { props, wrapper } = setup({});

    const genreId = 9;

    wrapper.instance().filter(genreId);
    expect(wrapper.instance().state.filter.genre).toEqual(genreId);
  });
});
