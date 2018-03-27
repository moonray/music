import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ITunesAlbumImage from "./ITunesAlbumImage";

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const iTunesCollection = {
    "resultCount": 1,
    "results": [
      {
        "wrapperType": "collection",
        "collectionType": "Album",
        "artistId": 78328,
        "collectionId": 208024277,
        "amgArtistId": 112251,
        "artistName": "Vangelis",
        "collectionName": "Oceanic",
        "collectionCensoredName": "Oceanic",
        "artistViewUrl": "https://itunes.apple.com/us/artist/vangelis/78328?uo=4",
        "collectionViewUrl": "https://itunes.apple.com/us/album/oceanic/208024277?uo=4",
        "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music/v4/e1/27/51/e12751f8-7f1b-8771-57db-2297e94cf226/source/60x60bb.jpg",
        "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Music/v4/e1/27/51/e12751f8-7f1b-8771-57db-2297e94cf226/source/100x100bb.jpg",
        "collectionPrice": 8.99,
        "collectionExplicitness": "notExplicit",
        "trackCount": 9,
        "copyright": "℗ 1996 Warner Music UK Ltd",
        "country": "USA",
        "currency": "USD",
        "releaseDate": "1996-10-28T08:00:00Z",
        "primaryGenreName": "Electronic"
      }]
  };
  const props = {
    artist: 'Vangelis',
    album: 'Oceanic',
    size: 200,
    ...propOverrides,
  };
  return ({
    props,
    wrapper: (() => {
      fetch.mockResponse(JSON.stringify(iTunesCollection));
      return shallow(<ITunesAlbumImage {...props} />);
    })(),
  });
};

describe('<ITunesAlbumImage />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('shallow renders without crashing', () => {
    setup({});
  });
});
