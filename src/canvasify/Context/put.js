/*
 * File: /src/canvasify/Context/put.js
 * File Created: Wednesday, 13th November 2019 12:59:02 am
 * Author: Alex Chomiak 
 * 
 * Last Modified: Wednesday, 13th November 2019 7:10:12 pm
 * Modified By: Alex Chomiak 
 * 
 * Author Github: https://github.com/alexchomiak
 */

CanvasRenderingContext2D.prototype.put = function ( imageData ) {
    this.putImageData( imageData, 0, 0 )
}