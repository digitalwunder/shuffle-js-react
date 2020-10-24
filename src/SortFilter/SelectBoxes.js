import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from './SelectBox';

export default function SelectBoxes(props) {
  const { taxonomies, onClickByName } = props;
  const taxonomiesNames = Object.keys(taxonomies);// used for first option in SelectBox components
  return (
    <div className="col-md-12 procedures-select-boxes flex flex--warp margin--5tb">
      <div className="procedures-select-boxes__label width--100 padding--5lr">Filter by Specific Procedure</div>
      {taxonomiesNames.map((taxonomyName, index) => {
        if (index !== 0) {
          return <SelectBox key={index} onClickByName={onClickByName} procedures={taxonomies[taxonomyName]} firstOption={taxonomyName} />;
        }
        return <div />;
      })}
    </div>
  );
}

SelectBoxes.propTypes = {
  taxonomies: PropTypes.objectOf(PropTypes.object).isRequired,
  onClickByName: PropTypes.func.isRequired
};
