/*
 * A function that joins different strings to form a single one that will be the final className.
 */
import {isObject, isNonEmptyString} from '@luisgilgb/js-utils';

const concatIf = (s1 = '', s2 = '', cond) => cond ? `${s1} ${s2}`.trim() : s1;

const iterate = (temp, s) => isObject(s) ? concatIf(temp, s.className, s.check) : concatIf(temp, s, isNonEmptyString(s));

const classNamer = (...classNames) => classNames.reduce(iterate, '');

export default classNamer;