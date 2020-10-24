// Utils
/**
 * Capitalie first letter of string and return new string
 * Taken from https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
 * And referenced from http://php.net/manual/en/function.ucfirst.php
 * @param {String} string to be capitalize first letter e.g. test
 * @return {String} test > Text
 */
export const jsUcfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Put search parameter to the url
 * If the search parameter is '', then only pathname
 * If it's not empty-string, then add it to the url with '/?'
 * @param {String} searchParams to put on the url as '.../?searchParams'
 */
export const putSearchParams = (searchParams = '') => {
  const newRelativePathQuery = window.location.pathname
    + (searchParams ? `?${searchParams.toLowerCase()}` : '');
  window.history.pushState(null, '', newRelativePathQuery);
};

/**
 * Remove tag from string
 * e.g. "<p>test</p>"
 * @param {(String|HTML)} str html as string
 * @return {HTML} str > test
 */
export const stripTags = (str) => {
  if (str) {
    str.toString();
    return str.replace(/<\/?[^>]+>/gi, '');
  }
  return null;
};
