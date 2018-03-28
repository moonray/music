import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../testData';
import AlbumTeaser from './AlbumTeaser';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    album: testData.album,
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
