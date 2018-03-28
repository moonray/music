import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import fetches from '../../fetches';
import AlbumContainer from './AlbumContainer';

jest.mock('../../fetches');

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location, albumId = 2) => {
  const props = {
    match: {
      params: {albumId: albumId},
    },
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: shallow(<StaticRouter location={location} context={context}><AlbumContainer {...props}/></StaticRouter>).dive(),
  });
};

describe('<AlbumContainer />', () => {
  it('shallow renders without crashing at /album/2', () => {
    setup({}, '/album/2', 2);
  });
});
