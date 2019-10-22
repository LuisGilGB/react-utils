/*
 * A function that joins different strings to form a single one that will be the final className.
 */
const classNamer = (...classNames) => classNames.reduce((temp, s) => `${temp} ${s}`.trim(), '');

module.exports = classNamer;