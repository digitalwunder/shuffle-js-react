import { assert } from 'chai';
import { jsUcfirst, stripTags } from '../src/Utils';

describe('Utils', () => {
  it('should capitalie first letter of string', () => {
    assert(jsUcfirst('test') === 'Test', 'did not capitalize');
  });

  it('should add param to url', () => {
    // testing here via BDD from lack of full window access
    const putSearchParams = (searchParams = '') => {
      /*eslint-disable */
      const newRelativePathQuery = '/'
        + (searchParams ? `?${searchParams.toLowerCase()}` : '');
      /*eslint-disable */
      return newRelativePathQuery;
    };
    assert(putSearchParams('Test') === '/?test', 'did not add param to url');
    assert(putSearchParams('test') === '/?test', 'did not add param to url');
  });

  it('should remove html tags from string', () => {
    assert(stripTags('<p>test</p>') === 'test', 'did not remove tags');
  });
});
