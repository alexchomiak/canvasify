/**
 * @description takes in canvas context, and returns new image data after passed through modifier function
 * @param {Canvas Context 2D} ctx2D
 * @param {Function} modifer - Function that returns new {r g b a} object values given original pixel values
 */
const mapPixels = function(modifer) {
    const ctx2D = this

    // * Get width, height
    const width = ctx2D.canvas.clientWidth
    const height = ctx2D.canvas.clientHeight

    if (width == undefined || height == undefined)
        throw 'Cannot map pixels of undefined canvas size!'
    // * Get canvas image data
    const imageData = ctx2D.getImageData(0, 0, width, height)

    // * Loop over all pixels and apply modifications
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            //* Calculate Image Index
            let index = (col + row * imageData.width) * 4

            //* Calls modifier function
            let { r, g, b, a } = modifer({
                r: imageData.data[index],
                g: imageData.data[index + 1],
                b: imageData.data[index + 2],
                a: imageData.data[index + 3],
            })

            // * If any pixel value undefined, throw runtime error
            if (
                r == undefined ||
                g == undefined ||
                b == undefined ||
                a == undefined
            )
                throw 'Modifier function must return object containing {r,g,b,a} values for new pixel'

            // * Set new pixel values
            imageData.data[index] = r
            imageData.data[index + 1] = g
            imageData.data[index + 2] = b
            imageData.data[index + 3] = a
        }
    }

    // * Return modified imageData
    return imageData
}

CanvasRenderingContext2D.prototype.mapPixels = mapPixels
