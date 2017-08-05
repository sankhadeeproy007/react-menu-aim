'use strict';

var React = require('react');
var ReactMenuAim = require('../../index');

var Menu = React.createClass({
  displayName: 'Menu',

  mixins: [ReactMenuAim],

  getDefaultProps: function getDefaultProps() {
    return {
      submenuDirection: 'right'
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeMenuIndex: 0
    };
  },

  componentWillMount: function componentWillMount() {
    this.initMenuAim({
      submenuDirection: this.props.submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
  },

  handleSwitchMenuIndex: function handleSwitchMenuIndex(index) {
    this.setState({
      activeMenuIndex: index
    });
  },

  render: function render() {
    var self = this;
    var containerClassName = 'menu-container ' + this.props.submenuDirection;

    var subMenuStyle = {};
    if (this.props.submenuDirection === 'below') {
      subMenuStyle.left = this.state.activeMenuIndex * 140;
    }

    return React.createElement(
      'div',
      { className: containerClassName },
      React.createElement(
        'ul',
        { className: 'menu', onMouseLeave: this.handleMouseLeaveMenu },
        this.props.menuData.map(function (menu, index) {
          var className = 'menu-item';
          if (index === self.state.activeMenuIndex) {
            className += ' active';
          }

          return React.createElement(
            'li',
            { className: className, key: index,
              onMouseEnter: function onMouseEnter() {
                self.handleMouseEnterRow.call(self, index, self.handleSwitchMenuIndex);
              } },
            menu.name
          );
        })
      ),
      React.createElement(
        'ul',
        { className: 'sub-menu', style: subMenuStyle },
        this.props.menuData[this.state.activeMenuIndex].subMenu.map(function (subMenu, index) {
          return React.createElement(
            'li',
            { className: 'sub-menu-item', key: index },
            subMenu
          );
        })
      )
    );
  }
});

module.exports = exports = Menu;
//# sourceMappingURL=Menu.js.map