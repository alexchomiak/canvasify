/*
 * File: /src/canvasify/Matrix/at.js
 * File Created: Monday, 18th November 2019 12:37:54 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Monday, 18th November 2019 12:40:32 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import { Matrix } from './Matrix'

/**
 * @description Access the row at row R and column C
 * @param {*} r
 * @param {*} c
 * @returxns
 */
Matrix.prototype.at = function(r, c) {
  return this.data[this.numCols * r + c]
}
