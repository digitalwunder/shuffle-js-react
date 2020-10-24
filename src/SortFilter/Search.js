import React from 'react';
import PropTypes from 'prop-types';

// import './index.css';

// const classnames = require('classnames');

export default function Search(props) {
  const { onKeyUp } = props;
  return (
    <div className="col-md-12 margin--5tb">
      <div className="filters-group">
        {/* <label htmlFor="filters-search-input2" className="filter-label padding--5lr">Search</label>
        <input onKeyUp={this.props.onKeyUp} className="textfield filter__search js-shuffle-search2" type="search" id="filters-search-input2" /> */}
        <label htmlFor="filters-search-input2" className="filter-label padding--5lr">
          Search
          <input onKeyUp={onKeyUp} className="textfield filter__search js-shuffle-search2" type="search" id="filters-search-input2" />
        </label>
      </div>
    </div>
  );
}

Search.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};
