import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import Albums from './Albums';

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
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: (() => {
      // @todo Can't use {} for all responses; some child component responses are [].
      fetch.mockResponse(JSON.stringify(albums));
      return mount(<StaticRouter location={location} context={context}><Albums {...props}/></StaticRouter>).dive();
    })(),
  });
};

describe('<Albums />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing at /', () => {
    setup({}, '/album/2');
  });
});
