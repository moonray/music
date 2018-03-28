import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetches from '../../fetches';
import testData from '../../testData';
import ITunesAlbumImage from "./ITunesAlbumImage";

jest.mock('../../fetches', () => {
  const testData = require('../../testData');
  return {
    album: jest.fn(() => (testData.album)),
    albums: jest.fn(() => (testData.albums)),
    genres: jest.fn(() => (testData.genres)),
    iTunesCollection: jest.fn(() => (testData.iTunesCollection)),
  }
});

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    artist: testData.album.artist,
    album: testData.album.name,
    size: 200,
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<ITunesAlbumImage {...props} />),
  });
};

describe('<ITunesAlbumImage />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});
