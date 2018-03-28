const album = {
  "id": 2,
  "created_at": "2018-03-26 16:17:44",
  "updated_at": "2018-03-26 16:17:44",
  "name": "Oceanic",
  "artist": "Vangelis",
  "released": 1996,
  "genre_id": 2,
  "genre": { "id": 2, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Electronic" },
  "songs": [{
    "id": 10,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 1,
    "name": "Bon Voyage",
    "artist": "Vangelis",
    "length": "2:33",
    "album_id": 2
  }, {
    "id": 11,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 2,
    "name": "Sirens' Whispering",
    "artist": "Vangelis",
    "length": "7:59",
    "album_id": 2
  }, {
    "id": 12,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 3,
    "name": "Dreams of Surf",
    "artist": "Vangelis",
    "length": "2:43",
    "album_id": 2
  }, {
    "id": 13,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 4,
    "name": "Spanish Harbour",
    "artist": "Vangelis",
    "length": "6:42",
    "album_id": 2
  }, {
    "id": 14,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 5,
    "name": "Islands of the Orient",
    "artist": "Vangelis",
    "length": "7:24",
    "album_id": 2
  }, {
    "id": 15,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 6,
    "name": "Fields of Coral",
    "artist": "Vangelis",
    "length": "7:44",
    "album_id": 2
  }, {
    "id": 16,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 7,
    "name": "Aquatic Dance",
    "artist": "Vangelis",
    "length": "3:44",
    "album_id": 2
  }, {
    "id": 17,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 8,
    "name": "Memories of Blue",
    "artist": "Vangelis",
    "length": "5:40",
    "album_id": 2
  }, {
    "id": 18,
    "created_at": "2018-03-26 16:17:44",
    "updated_at": "2018-03-26 16:17:44",
    "track": 9,
    "name": "Songs of the Seas",
    "artist": "Vangelis",
    "length": "6:12",
    "album_id": 2
  }]
};

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

const genres = [
  { "id": 1, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Dance" },
  { "id": 2, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Electronic" },
  { "id": 3, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Rock" },
];

const song = {
  "id": 18,
  "created_at": "2018-03-26 16:17:44",
  "updated_at": "2018-03-26 16:17:44",
  "track": 9,
  "name": "Songs of the Seas",
  "artist": "Vangelis",
  "length": "6:12",
  "album_id": 2
};

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

export default {
  album,
  albums,
  genres,
  song,
  iTunesCollection,
}
