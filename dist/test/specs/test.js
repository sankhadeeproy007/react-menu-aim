/*eslint no-unused-expressions:0 */
'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

var _Menu = require('../../demo/js/Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _menuData = require('../../demo/js/menuData');

var _menuData2 = _interopRequireDefault(_menuData);

var _DecoratedMenu = require('../../demo/js/DecoratedMenu');

var _DecoratedMenu2 = _interopRequireDefault(_DecoratedMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

chai.use(_chaiSpies2.default);

//Delay karma test execution
window.__karma__.loaded = function () {};

function injectCSS() {
  var link = document.createElement('link');
  link.href = 'base/demo/style.css';
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  link.onload = function () {
    window.__karma__.start();
  };
}

injectCSS();
var expect = chai.expect;

describe('ReactMenuAim', function () {
  var node = void 0;

  beforeEach(function () {
    node = _reactDom2.default.render(_react2.default.createElement(_Menu2.default, { menuData: _menuData2.default }), document.body);
  });

  afterEach(function () {
    console.log('after');

    _reactDom2.default.unmountComponentAtNode(document.body);
    node = null;
  });

  it('should mount without error', function () {
    var DOM = document.querySelector('.menu-container');
    expect(DOM).to.exist;
  });
});

describe('ReactMenuAim/decorator', function () {
  var node = void 0;

  beforeEach(function () {
    node = _reactDom2.default.render(_react2.default.createElement(_DecoratedMenu2.default, { menuData: _menuData2.default }), document.body);
  });

  afterEach(function () {
    console.log('after');

    _reactDom2.default.unmountComponentAtNode(document.body);
    node = null;
  });

  it('should mount without error', function () {
    var DOM = document.querySelector('.menu-container');
    expect(DOM).to.exist;
  });
});
//# sourceMappingURL=test.js.map