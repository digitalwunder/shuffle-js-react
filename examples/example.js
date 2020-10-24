/* eslint-disable no-console */
const defaultAwesomeFunction = require('../lib').default;
const { awesomeFunction, SortFilter } = require('../lib');

const defaultVal = defaultAwesomeFunction('Dinesh');
const val = awesomeFunction();

// defaultVal === 'I am the Default Awesome Function, fellow comrade! - Dinesh'
console.log(defaultVal);
// val === 'I am just an Awesome Function'
console.log(val);
/**
 * [Function: SortFilter] {
  propTypes: {
    defaultSort: [Function: bound checkType],
    taxonomies: [Function: bound checkType],
    itemSelector: [Function: bound checkType],
    children: [Function: bound checkType]
  }
}
 */
console.log(SortFilter);
