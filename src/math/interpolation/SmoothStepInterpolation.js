/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var SmoothStep = require('../SmoothStep');

/**
 * A Smooth Step interpolation method.
 *
 * @function Phaser.Math.Interpolation.SmoothStep
 * @since 3.9.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep}
 *
 * @param {number} x - The percentage of interpolation, between 0 and 1.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The interpolated value.
 */
var SmoothStepInterpolation = function (x, min, max)
{
    var t = SmoothStep(min + (max - min) * x, min, max);

    return min + (max - min) * t;
};

module.exports = SmoothStepInterpolation;
