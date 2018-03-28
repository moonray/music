import React, { Component } from 'react';
import AlbumList from '../AlbumList';

class AlbumListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      genres: [],
      sort: { column: 'name', order: 'asc' },
      filter: { genre: false }
    };

    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    fetch(process.env.REACT_APP_BACKEND_API_URL + '/albums')
      .then(data => data.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ albums: data });
        }
      });
    fetch(process.env.REACT_APP_BACKEND_API_URL + '/genres')
      .then(data => data.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ genres: data });
        }
      });
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

    return <AlbumList albums={albums} filterOptions={this.state.genres.map(genre => ({ key: genre.id, value: genre.name }))} filter={this.filter} sort={this.sort}/>;
  }
}

export default AlbumListContainer;
