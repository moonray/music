import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
            this.props.options.map(option => (<option key={option.key} value={option.key}>{option.value}</option>))}
          }
        </select>
      </div>
    );
  }
}

FilterGenre.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterGenre;
