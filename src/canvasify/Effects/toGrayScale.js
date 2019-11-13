CanvasRenderingContext2D.prototype.toGrayScale = function() {
    return this.mapPixels(({ r, g, b, a }) => {
        let bw = 0.3 * r + 0.59 * g + 0.11 * b // * Calculate grayscale value
        return { r: bw, g: bw, b: bw, a: a } // * Set values
    })
}
