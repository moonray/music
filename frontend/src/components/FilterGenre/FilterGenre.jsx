import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      genres: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this._isMounted = true;
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

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value === '' ? false : event.target.value);
  }

  render() {
    const uniqueId = 'filter-genre-' + new Date().getTime();

    return (
      <div className="FilterGenre">
        <label htmlFor={uniqueId}>Filter by genre</label>&#160;
        <select value={this.state.value} id={uniqueId} onChange={this.handleChange}>
          <option key={-1} value=""> - All - </option>
          {
            this.state.genres.map(function (genre) {
              return (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              );
            })}
          }
        </select>
      </div>
    );
  }
}

FilterGenre.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterGenre;
