
/**
 * Ignore selectors with `arr`.
 *
 * Example:
 *
 *      rework('.btn { color: red; }')
 *      .use(ignore('.btn'))
 *      .toString();
 *
 *      // => ''
 *
 * @param {Array} arr
 * @return {Function}
 */

module.exports = function(arr){
  arr = ! Array.isArray(arr)
    ? [arr]
    : arr;

  return function(style){
    style.rules = style.rules.filter(function(rule){
      if (!rule.selectors) return rule;
      return !~ arr.indexOf(rule.selectors[0]);
    });
  };
};
