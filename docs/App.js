import React from 'react';
import PropTypes from 'prop-types';
import { SortFilter, awesomeFunction } from '../src/index';
import taxonomies from './data/taxonomiesObject.json';
// import proceduresStringArray from './data/proceduresStringArray.json';
import records from './data/basicRecords.json';

export default function App() {
  const defaultSort = 'Cat';// empty string defaults to show all
  const itemSelector = 'sortblock';
  // const taxonomies = '';
  return (
    <div className="App container">
      <h1>Hello!</h1>
      <h2>Start clicking to see some magic happen!</h2>
      <h3>
        ShuffleJS-React works::
        {awesomeFunction()}
      </h3>
      <SortFilter defaultSort={defaultSort} taxonomies={taxonomies} itemSelector={itemSelector}>
        <Elements records={records} itemSelector={itemSelector} />
      </SortFilter>
    </div>
  );
}

function Elements({ itemSelector }) {
  return records.map((record) => <Element key={record.id} record={record} itemSelector={itemSelector} />);
}

Elements.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemSelector: PropTypes.string.isRequired
};


function Element(props) {
  const { itemSelector, record } = props;
  return (
    <div className={`col-md-6 ${itemSelector}`} data-groups={`${JSON.stringify(record.dataGroupArrayString)}`}>
      <div className="aspect aspect--4x3">
        <div className="aspect__inner">
          <img className="element__img" src={record.src} alt="" />
        </div>
      </div>
    </div>
  );
}


Element.propTypes = {
  record: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  itemSelector: PropTypes.string.isRequired
};
