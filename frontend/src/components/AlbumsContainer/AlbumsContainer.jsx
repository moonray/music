import React, { Component } from 'react';
import Albums from '../Albums';

class AlbumsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      sort: { column: 'name', direction: 'asc' },
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
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sort(column, direction) {
    if (this.state.sort.column !== column || this.state.sort.direction !== direction) {
      this.setState({ sort: { column: column, direction: direction } });
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
        return a[column].localeCompare(b[column]) * (parent.state.sort.direction === 'asc' ? 1 : -1);
      }
      else {
        return a[column] > b[column] * (parent.state.sort.direction === 'asc' ? 1 : -1);
      }
    });

    return <Albums albums={albums} sort={this.sort} filter={this.filter} />;
  }
}

export default AlbumsContainer;
