/*
 * jquery.tabbable
 * https://github.com/damian/jquery.tabbable
 *
 * Copyright (c) 2013 Damian Nicholson
 * Licensed under the MIT license.
 */

(function($) {

  /**
   * Contains a list of focussable elements
   *
   * @property FOCUSSABLE_ELEMS
   * @type Array
   * @static
   * @final
   */
  var FOCUSSABLE_ELEMS = [
    'input',
    'select',
    'textarea',
    'button', 'ul'
  ];

  /**
   * Adds a tabbable pseudo selector to jQuery
   *
   * @example
   *   $('form :input').filter(':tabbable');
   */
  $.expr[':'].tabbable = function(elem) {
    return isTabbable(elem) && isFocussable(elem) && isVisible(elem);
  };

  /**
   * @method isTabbable
   * @param {Node}
   * @return {Boolean}
   * @private
   */
  function isTabbable(elem) {
    return elem.tabIndex >= 0;
  }

  /**
   * @method isVisible
   * @param {Node}
   * @return {Boolean}
   * @private
   */
  function isVisible(elem) {
    return $(elem).is(':visible');
  }

  /**
   * @method isFocussable
   * @param {Node}
   * @return {Boolean}
   * @private
   */
  function isFocussable(elem) {
    var node = elem.nodeName,
        regex = new RegExp(FOCUSSABLE_ELEMS.join('|'), 'gi');

    if (regex.test(node) && !elem.disabled) {
      return true;
    }

    if (/a/i.test(node) && elem.href) {
      return true;
    }
	if (elem.tabIndex >= 0) {return true;}
    return false;
  }

}(jQuery));