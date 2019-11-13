/**
 * @description takes in canvas context, and returns new image data after passed through modifier function
 * @param {Canvas Context 2D} ctx2D
 * @param {Function} modifer - Function that returns new {r g b a} object values given original pixel values
 */
const forEachPixel = function(fun) {
    const ctx2D = this

    // * Get width, height
    const width = ctx2D.canvas.clientWidth
    const height = ctx2D.canvas.clientHeight

    if (width == undefined || height == undefined)
        throw 'Cannot map pixels of undefined canvas size!'
    // * Get canvas image data
    const imageData = ctx2D.getImageData(0, 0, width, height)

    // * Loop over all pixels and call function
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            //* Calculate Image Index
            let index = (col + row * imageData.width) * 4

            //* Calls function on pixel
            fun({
                r: imageData.data[index],
                g: imageData.data[index + 1],
                b: imageData.data[index + 2],
                a: imageData.data[index + 3],
            })
        }
    }
}

CanvasRenderingContext2D.prototype.forEachPixel = mapPixels
