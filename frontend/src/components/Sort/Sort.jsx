import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'name__asc',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    const key = event.target.value.split('__');
    this.props.onChange(key[0], key[1]);
  }

  render() {
    const uniqueId = 'sort-' + new Date().getTime();

    return (
      <div className="Sort">
        <label htmlFor={uniqueId}>Sort by</label>&#160;
        <select value={this.state.value} id={uniqueId} onChange={this.handleChange}>
          {
            this.props.options.map((option) => (<option key={option.key} value={option.key}>{option.value}</option>))}
          }
        </select>
      </div>
    );
  }
}

Sort.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sort;
