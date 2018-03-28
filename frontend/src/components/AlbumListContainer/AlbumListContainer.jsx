import React, { Component } from 'react';
import AlbumList from '../AlbumList';
import fetches from "../../fetches";

class AlbumListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      genres: [],
      sort: { column: 'name', order: 'asc' },
      filter: { genre: false }
    };

    this.fetchedAlbums = this.fetchedAlbums.bind(this);
    this.fetchedGenres = this.fetchedGenres.bind(this);
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    fetches.albums(this.fetchedAlbums);
    fetches.genres(this.fetchedGenres);
  }

  fetchedAlbums(data) {
    if (this._isMounted) {
      this.setState({ albums: data });
    }
  }

  fetchedGenres(data) {
    if (this._isMounted) {
      this.setState({ genres: data });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sort(column, order) {
    if (this.state.sort.column !== column || this.state.sort.order !== order) {
      this.setState({ sort: { column: column, order: order } });
    }
  }

  filter(genreId) {
    if (this.state.filter.genre !== genreId) {
      this.setState({ filter: { genre: genreId } });
    }
  }

  render() {
    const parent = this;

    let albums = [...this.state.albums];
    if (this.state.filter.genre !== false) {
      albums = albums.filter(album => parseInt(album.genre_id, 10) === parseInt(parent.state.filter.genre, 10));
    }
    albums = albums.sort((a, b) => {
      const column = parent.state.sort.column;
      if (typeof a[column] === 'string') {
        return a[column].localeCompare(b[column]) * (parent.state.sort.order === 'asc' ? 1 : -1);
      }
      else {
        return a[column] > b[column] * (parent.state.sort.order === 'asc' ? 1 : -1);
      }
    });

    const sortOptions = [
      { key: 'name__asc', value:'Title (asc)' },
      { key: 'name__desc', value:'Title (desc)' },
      { key: 'released__asc', value:'Year (asc)' },
      { key: 'released__desc', value:'Year (desc)' },
    ];

    return <AlbumList albums={albums} filterOptions={this.state.genres.map(genre => ({ key: genre.id, value: genre.name }))} filter={this.filter} sortOptions={sortOptions} sort={this.sort}/>;
  }
}

export default AlbumListContainer;
