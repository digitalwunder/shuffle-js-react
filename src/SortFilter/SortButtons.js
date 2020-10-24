import React from 'react';
import PropTypes from 'prop-types';
import {
  jsUcfirst
} from '../Utils/index';

// import './index.css';

// const classnames = require('classnames');

// export default class SortButtons extends Component {
export default function SortButtons(props) {
  // let taxonomiesArray = this.props.taxonomies;
  const {
    taxonomies: taxonomiesArray, titleButton, onClickByName, onClickAll, sortAllText, allTrue
  } = props;
  return (
    <div id="sjsr-sort-button" className="col-md-12 procedure-main margin--5tb">
      <div className="procedure-main__label flex padding--5lr">Sort by Procedures</div>
      {titleButton ? <div>{titleButton}</div> : null }
      {taxonomiesArray.map((taxonomy, index) => <button key={index} type="button" className="btn btn-outline-secondary btn-sm margin--5" onClick={onClickByName}>{jsUcfirst(taxonomy)}</button>)}
      {allTrue ? <button type="button" className="btn btn-outline-secondary btn-sm margin--5" onClick={onClickAll}>{sortAllText}</button> : null }
    </div>
  );
}

SortButtons.propTypes = {
  taxonomies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickByName: PropTypes.func,
  onClickAll: PropTypes.func,
  allTrue: PropTypes.bool,
  sortAllText: PropTypes.string,
  titleButton: PropTypes.string
};

// Specifies the default values for props:
SortButtons.defaultProps = {
  onClickByName: (event) => {
    event.preventDefault();
    event.stopPropagation();
  },
  onClickAll: (event) => {
    event.preventDefault();
    event.stopPropagation();
  },
  allTrue: true,
  sortAllText: 'All',
  titleButton: null
};
