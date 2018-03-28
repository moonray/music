import testData from '../testData';

const fetchAlbum = (id, callback) => {
  callback(testData.album);
};

const fetchAlbums = (callback) => {
  callback(testData.albums);
};

const fetchGenres = (callback) => {
  callback(testData.genres);
};

const fetchITunesCollection = (artist, album, callback) => {
  callback(testData.iTunesCollection);
};

export default {
  album: fetchAlbum,
  albums: fetchAlbums,
  genres: fetchGenres,
  iTunesCollection: fetchITunesCollection,
}
