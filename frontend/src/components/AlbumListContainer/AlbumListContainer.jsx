import React, { Component } from 'react';
import AlbumList from '../AlbumList';
import { rootOperations } from "../../duck";

class AlbumListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
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
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sort(column, order) {
    if (this.state.sort.column !== column || this.state.sort.order !== order) {
      dispatch(rootOperations.sort(column, order));
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

    return <AlbumList albums={albums} sort={this.sort} filter={this.filter} />;
  }
}

export default AlbumListContainer;
