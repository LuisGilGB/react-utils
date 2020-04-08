/*
 * A function that joins different strings to form a single one that will be the final className.
 * 
 * Additional classNames can be added conditionally by passing an object with the following structure
 * as a param:
 *  {
 *      className: 'classToAdd',
 *      check: statementThatReturnsTrueOrFalse
 *  }
 * Being className the key for the className to add to the return value and check a boolean that
 * indicates if the className will be added (check: true) or not (check: false).
 */
import {isObject, isNonEmptyString} from '@luisgilgb/js-utils';

const concatIf = (s1 = '', s2 = '', cond) => cond ? `${s1} ${s2}`.trim() : s1;

const iterate = (temp, s) => isObject(s) ? concatIf(temp, s.className, s.check) : concatIf(temp, s, isNonEmptyString(s));

const classNamer = (...classNames) => classNames.reduce(iterate, '');

export default classNamer;