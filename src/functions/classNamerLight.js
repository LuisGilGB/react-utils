/*
 * A lightweight and faster classNamer function that joins all the given classNames.
 *
 * It doesn't support conditional adding of classNames by params objects and doesn't check
 * types or double spaces, so it also doesn't avoid them by trimming temp outputs.
 */
const classNamerLight = (...classNames) => classNames.join(' ');

export default classNamerLight;
