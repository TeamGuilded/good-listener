/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    if (value === undefined) return false;

    var isDocNode = value instanceof HTMLElement;
    if (!isDocNode && value.ownerDocument){
        isDocNode = value.ownerDocument.isConnected;
    }

    return isDocNode && value.nodeType === Node.ELEMENT_NODE;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a SVG element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.svg = function(value) {
    return value !== undefined
        && value instanceof SVGElement;
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};
