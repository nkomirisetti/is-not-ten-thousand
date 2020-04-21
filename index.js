/*!
 * is-not-ten-thousand <https://github.com/nkomirisetti/is-not-ten-thousand>
 *
 * Copyright (c) 2015, 2017, Nikhil Komirisetti.
 * Released under the MIT License.
 */

'use strict';

var isTenThousand = require('is-ten-thousand');

module.exports = function isNotTenThousand(i) {
  // TODO add stalin sort
  return !!(i >>> 1);
};
