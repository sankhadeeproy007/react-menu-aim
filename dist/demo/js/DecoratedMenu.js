'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _decorator = require('../../decorator');

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (_dec = (0, _decorator2.default)({
  submenuDirection: 'right',
  menuSelector: '.menu',
  delay: 300,
  tolerance: 75 }), _dec(_class = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

    _this.state = {
      activeMenuIndex: 0
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'handleSwitchMenuIndex',
    value: function handleSwitchMenuIndex(index) {
      this.setState({
        activeMenuIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var containerClassName = 'menu-container ' + this.props.submenuDirection;

      var subMenuStyle = {};
      if (this.props.submenuDirection === 'below') {
        subMenuStyle.left = this.state.activeMenuIndex * 140;
      }

      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        _react2.default.createElement(
          'ul',
          { className: 'menu', onMouseLeave: this.props.handleMouseLeaveMenu },
          this.props.menuData.map(function (menu, index) {
            var className = 'menu-item';
            if (index === _this2.state.activeMenuIndex) {
              className += ' active';
            }

            return _react2.default.createElement(
              'li',
              { className: className, key: index,
                onMouseEnter: function onMouseEnter() {
                  _this2.props.handleMouseEnterRow(index, _this2.handleSwitchMenuIndex.bind(_this2));
                } },
              menu.name
            );
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'sub-menu', style: subMenuStyle },
          this.props.menuData[this.state.activeMenuIndex].subMenu.map(function (subMenu, index) {
            return _react2.default.createElement(
              'li',
              { className: 'sub-menu-item', key: index },
              subMenu
            );
          })
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component)) || _class);
exports.default = Menu;


Menu.defaultProps = {
  submenuDirection: 'right'
};
//# sourceMappingURL=DecoratedMenu.js.map