import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetches from '../../fetches';
import testData from '../../testData';
import ITunesAlbumImage from "./ITunesAlbumImage";

jest.mock('../../fetches');

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
