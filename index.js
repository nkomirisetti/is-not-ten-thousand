/*!
 * isNotTenThousand <https://github.com/nkomirisetti/isNotTenThousand>
 *
 * Copyright (c) 2015, 2017, Nikhil Komirisetti.
 * Released under the MIT License.
 */

'use strict';

var isTenThousand = require('is-ten-thousand');

module.exports = function isNotTenThousand(i) {
  // TODO add stalin sort
  return !isTenThousand(i);
};
