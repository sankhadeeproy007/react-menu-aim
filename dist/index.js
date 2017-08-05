'use strict';

var _core = require('./src/core.js');

function possiblyActivate(rowIdentifier, handler, config) {
  var delay = _core.getActivateDelay.call(this, config);

  if (delay) {
    var self = this;
    this.__reactMenuAimTimer = setTimeout(function () {
      possiblyActivate.call(self, rowIdentifier, handler, config);
    }, delay);
  } else {
    _core.activate.call(this, rowIdentifier, handler);
  }
}

/**
 * @export
 */
module.exports = exports = {
  initMenuAim: function initMenuAim(options) {
    this.__reactMenuAimConfig = options;
  },

  __getMouseMoveDocumentHandler: function __getMouseMoveDocumentHandler() {
    if (!this.__mouseMoveDocumentHandler) {
      this.__mouseMoveDocumentHandler = _core.handleMouseMoveDocument.bind(this);
    }

    return this.__mouseMoveDocumentHandler;
  },

  componentDidMount: function componentDidMount() {
    if (_core.menuAimModel.mousemoveListener === 0) {
      (0, _core.on)(document, 'mousemove', this.__getMouseMoveDocumentHandler());
    }

    _core.menuAimModel.mousemoveListener += 1;
  },

  componentWillUnmount: function componentWillUnmount() {
    _core.menuAimModel.mousemoveListener -= 1;

    if (_core.menuAimModel.mousemoveListener === 0) {
      (0, _core.off)(document, 'mousemove', this.__getMouseMoveDocumentHandler());
      _core.menuAimModel.mouseLocs = [];
    }

    clearTimeout(this.__reactMenuAimTimer);
    this.__reactMenuAimTimer = null;
    this.__mouseMoveDocumentHandler = null;
  },

  /**
   * @param  {function} handler The true event handler for your app
   * @param  {object}   e       React's synthetic event object
   */
  handleMouseLeaveMenu: function handleMouseLeaveMenu(handler, e) {
    if (this.__reactMenuAimTimer) {
      clearTimeout(this.__reactMenuAimTimer);
    }

    if (typeof handler === 'function') {
      handler.call(this, e);
    }
  },

  /**
   * @param  {number}   rowIdentifier  The identifier of current row, ie. index or name
   * @param  {function} handler        The true event handler for your app
   * @param  {object}   e              React's synthetic event object
   */
  handleMouseEnterRow: function handleMouseEnterRow(rowIdentifier, handler) {
    if (this.__reactMenuAimTimer) {
      clearTimeout(this.__reactMenuAimTimer);
    }

    possiblyActivate.call(this, rowIdentifier, handler, this.__reactMenuAimConfig);
  }
};
//# sourceMappingURL=index.js.map