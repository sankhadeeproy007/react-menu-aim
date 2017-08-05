'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = reactMenuAimDecorator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('./src/core.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-menu-aim is a React Mixin heavily inspired by jQuery-menu-aim. All rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * reserved by the original author.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/jasonslyvia/react-menu-aim
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/kamens/jQuery-menu-aim
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// import {on, off, handleMouseMoveDocument, activate, getActivateDelay, mousemoveListener, mouseLocs} from './src/core.js';


function possiblyActivate(rowIdentifier, handler, config) {
  var delay = _core.getActivateDelay.call(this, config);

  if (delay) {
    var self = this;
    this.__reactMenuAimTimer = setTimeout(function () {
      possiblyActivate.call(self, rowIdentifier, handler, config);
    }, delay);
  } else {
    handler(rowIdentifier);
  }
}

/**
 * @export
 */
function reactMenuAimDecorator(reactMenuAimConfig) {
  return function (ComposedComponent) {
    return function (_React$Component) {
      _inherits(MenuAimDecorator, _React$Component);

      function MenuAimDecorator() {
        _classCallCheck(this, MenuAimDecorator);

        return _possibleConstructorReturn(this, (MenuAimDecorator.__proto__ || Object.getPrototypeOf(MenuAimDecorator)).apply(this, arguments));
      }

      _createClass(MenuAimDecorator, [{
        key: '__getMouseMoveDocumentHandler',
        value: function __getMouseMoveDocumentHandler() {
          if (!this.__mouseMoveDocumentHandler) {
            this.__mouseMoveDocumentHandler = _core.handleMouseMoveDocument.bind(this);
          }

          return this.__mouseMoveDocumentHandler;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (_core.menuAimModel.mousemoveListener === 0) {
            (0, _core.on)(document, 'mousemove', this.__getMouseMoveDocumentHandler());
          }

          _core.menuAimModel.mousemoveListener += 1;
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          _core.menuAimModel.mousemoveListener -= 1;

          if (_core.menuAimModel.mousemoveListener === 0) {
            (0, _core.off)(document, 'mousemove', this.__getMouseMoveDocumentHandler());
            _core.menuAimModel.mouseLocs = [];
          }

          clearTimeout(this.__reactMenuAimTimer);
          this.__reactMenuAimTimer = null;
          this.__mouseMoveDocumentHandler = null;
        }

        /**
         * @param  {function} handler The true event handler for your app
         * @param  {object}   e       React's synthetic event object
         */

      }, {
        key: 'handleMouseLeaveMenu',
        value: function handleMouseLeaveMenu(handler, e) {
          if (this.__reactMenuAimTimer) {
            clearTimeout(this.__reactMenuAimTimer);
          }

          if (typeof handler === 'function') {
            handler.call(this, e);
          }
        }

        /**
         * @param  {number}   rowIdentifier  The identifier of current row, ie. index or name
         * @param  {function} handler        The true event handler for your app
         * @param  {object}   e              React's synthetic event object
         */

      }, {
        key: 'handleMouseEnterRow',
        value: function handleMouseEnterRow(rowIdentifier, handler) {
          if (this.__reactMenuAimTimer) {
            clearTimeout(this.__reactMenuAimTimer);
          }

          // possiblyActivate.call(this, rowIdentifier, handler, reactMenuAimConfig);
          possiblyActivate.call(this, rowIdentifier, handler, reactMenuAimConfig);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
            handleMouseLeaveMenu: this.handleMouseLeaveMenu.bind(this),
            handleMouseEnterRow: this.handleMouseEnterRow.bind(this)
          }));
        }
      }]);

      return MenuAimDecorator;
    }(_react2.default.Component);
  };
}
//# sourceMappingURL=decorator.js.map