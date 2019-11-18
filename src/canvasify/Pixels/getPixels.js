/*
 * File: /src/canvasify/Pixels/getPixels.js
 * File Created: Monday, 18th November 2019 12:43:49 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Monday, 18th November 2019 12:48:56 pm
 * Modified By: Alex Chomiak
 *
 * Author Github: https://github.com/alexchomiak
 */

import { Matrix } from '../Matrix'

/**
 * @description Returns a Matrix of the pixel data within a canvas context
 * @returns
 */

CanvasRenderingContext2D.prototype.getPixels = function() {
  const ctx2D = this

  // * Get width, height
  const width = ctx2D.canvas.clientWidth
  const height = ctx2D.canvas.clientHeight

  // * Make sure canvas size is defined
  if (width == undefined || height == undefined) throw 'Cannot retrieve pixels for canvas of undefined size!'

  // * Get canvas image data
  const imageData = ctx2D.getImageData(0, 0, width, height)

  // * Init pixel array
  let pixels = []

  // * Loop over all pixels and call function
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      //* Calculate Image Index
      let index = (col + row * imageData.width) * 4

      //* Calls function on pixel
      let r = imageData.data[index]
      let g = imageData.data[index + 1]
      let b = imageData.data[index + 2]
      let a = imageData.data[index + 3]

      // * Push pixels to array
      pixels.push({
        r,
        g,
        b,
        a,
        row,
        col
      })
    }
  }

  // * Return Pixel Matrix
  return new Matrix(height, width, pixels)
}
