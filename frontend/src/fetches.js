import util from 'util';

const fetchSomething = (url, callback) => {
  fetch(url)
    .then(data => data.json())
    .then(data => callback(data));
};

const fetchAlbum = (id, callback) => {
  fetchSomething(process.env.REACT_APP_BACKEND_API_URL + '/album/' + id, callback);
};

const fetchAlbums = (callback) => {
  fetchSomething(process.env.REACT_APP_BACKEND_API_URL + '/albums', callback);
};

const fetchGenres = (callback) => {
  fetchSomething(process.env.REACT_APP_BACKEND_API_URL + '/genres', callback);
};

const fetchITunesCollection = (artist, album, callback) => {
  if (artist && album) {
    const url = util.format('https://itunes.apple.com/search?term=%s+%s&entity=album&limit=1', encodeURIComponent(artist), encodeURIComponent(album));
    fetchSomething(url, callback);
  }
};

export default {
  album: fetchAlbum,
  albums: fetchAlbums,
  genres: fetchGenres,
  iTunesCollection: fetchITunesCollection,
}
