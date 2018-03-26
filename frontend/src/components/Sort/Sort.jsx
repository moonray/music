import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'name__asc',
      columns: [
        { key: 'name__asc', value:'Title (asc)' },
        { key: 'name__desc', value:'Title (desc)' },
        { key: 'released__asc', value:'Year (asc)' },
        { key: 'released__desc', value:'Year (desc)' },
      ],
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
            this.state.columns.map(function (column) {
              return (
                <option key={column.key} value={column.key}>{column.value}</option>
              );
            })}
          }
        </select>
      </div>
    );
  }
}

Sort.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Sort;
