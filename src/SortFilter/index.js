import React from 'react';
import PropTypes from 'prop-types';
import Core from './Core';

import './index.css';

// const classnames = require('classnames');
// export default class SortFilter extends Component {
export default function SortFilter(props) {
  const {
    defaultSort, taxonomies, children, itemSelector
  } = props;
  return (
    <div className="container">
      <Core
        defaultSort={defaultSort}
        taxonomies={taxonomies}
        itemSelector={itemSelector}
        // option to pass more params for the buttons or use defautl
      >
        {children}
      </Core>
    </div>
  );
}

SortFilter.propTypes = {
  defaultSort: PropTypes.string,
  // taxonomies: PropTypes.arrayOf(PropTypes.object).isRequired,
  taxonomies: PropTypes.objectOf(PropTypes.object).isRequired,
  itemSelector: PropTypes.string.isRequired,
  // children: PropTypes.element.isRequired
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired
};

SortFilter.defaultProps = {
  defaultSort: ''
};
