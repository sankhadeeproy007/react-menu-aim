'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./Menu');
var DecoratedMenu = require('./DecoratedMenu');
var menuData = require('./menuData');

window.React = React;

ReactDOM.render(React.createElement(Menu, { menuData: menuData }), document.querySelector('#demo1 .demo-container'));
ReactDOM.render(React.createElement(Menu, { menuData: menuData, submenuDirection: 'below' }), document.querySelector('#demo3 .demo-container'));

ReactDOM.render(React.createElement(DecoratedMenu, { menuData: menuData }), document.querySelector('#demo4 .demo-container'));
//# sourceMappingURL=app.js.map