/*
 * File: /src/canvasify/Effects/toGrayScale.js
 * File Created: Wednesday, 13th November 2019 1:01:36 am
 * Author: Alex Chomiak 
 * 
 * Last Modified: Wednesday, 13th November 2019 7:10:22 pm
 * Modified By: Alex Chomiak 
 * 
 * Author Github: https://github.com/alexchomiak
 */

CanvasRenderingContext2D.prototype.toGrayScale = function () {
    return this.mapPixels( ( {
        r,
        g,
        b,
        a
    } ) => {
        let bw = 0.3 * r + 0.59 * g + 0.11 * b // * Calculate grayscale value
        return {
            r: bw,
            g: bw,
            b: bw,
            a: a
        } // * Set values
    } )
}