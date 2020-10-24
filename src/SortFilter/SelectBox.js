import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

// import './index.css';

// const classnames = require('classnames');

export default class SelectBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  /**
   * Sets procedures to array for rendering before component is mounted
   */
  UNSAFE_componentWillMount() {
    const options = this.setProceduresOptions();
    this.setState({
      options
    });
  }

  /**
   * Performs onChange event for every options selected inside the
   * select html element
   */
  componentDidMount() {
    $('.select-box select').on('change', this.changeFunc);
  }

  /**
   * Performs the shuffleJS sorting per text parameter
   * passed from props
   * @param {Object} e
   */
  changeFunc = (e) => {
    const { onClickByName } = this.props;
    if (e.target.value !== e.target.options[0].value) {
      onClickByName(e.target.value);
    }
  }

  /**
   * Set procedures from props to array to be used for mapping procedures inside render(0)
   * @return {Array} options
   */
  setProceduresOptions = () => {
    const { procedures } = this.props;
    const options = [];
    for (const procedure in procedures) {
      if ({}.hasOwnProperty.call(procedures, procedure)) {
        options.push(procedures[procedure]);
      }
    }
    return options;
  }

  render() {
    const { firstOption } = this.props;
    const { options } = this.state;
    return (
      <div className="select-box padding--5">
        <select id="select-tag" className="select__tag" name={`select-${firstOption}`} onChange={this.changeFunc}>
          <option value={`${firstOption}`}>{firstOption}</option>
          {options && options.map((option, index) => <option key={index} value={option.name}>{option.name}</option>)}
        </select>
      </div>
    );
  }
}

SelectBox.propTypes = {
  procedures: PropTypes.objectOf(PropTypes.object).isRequired,
  onClickByName: PropTypes.func.isRequired,
  firstOption: PropTypes.string.isRequired,
};
