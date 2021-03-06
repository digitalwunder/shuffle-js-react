import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  jsUcfirst
} from '../Utils/index';

export default class SortButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Show All'
    };
  }

  UNSAFE_componentWillMount() {
    /**
     * Kick off the network request and update the state once it returns.
     */
    // const { sortAllText } = this.props;
    // console.log(sortAllText);
    // this._loadProps()
    //   .then(() => {
    //     this.setState({
    //       activeItem: sortAllText
    //     });
    //   });
  }

  onClickByName = (e, name) => {
    const { onClickByName } = this.props;

    onClickByName(e);
    this.setState({ activeItem: name });
  }

  onClickAll = (e, name) => {
    const { onClickAll } = this.props;

    onClickAll(e);
    this.setState({ activeItem: name });
  }

  render() {
    const {
      taxonomies: taxonomiesArray, titleButton, sortAllText, allTrue
    } = this.props;
    const { activeItem } = this.state;
    return (
      <div id="sjsr-sort-button" className="col-md-12 procedure-main">
        <p className="filter-content">Filter Content by #</p>
        {titleButton ? <div>{titleButton}</div> : null }
        {allTrue ? <button type="button" className={`btn btn-outline-secondary ${activeItem === sortAllText ? 'active' : ''}`} onClick={(e) => this.onClickAll(e, sortAllText)}>{sortAllText}</button> : null }
        {taxonomiesArray.map((taxonomy, index) => <button key={index} type="button" className={`btn btn-outline-secondary ${activeItem === jsUcfirst(taxonomy) ? 'active' : ''}`} onClick={(e) => this.onClickByName(e, jsUcfirst(taxonomy))}>{jsUcfirst(taxonomy)}</button>)}
      </div>
    );
  }
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
  sortAllText: 'Show All',
  titleButton: null
};
