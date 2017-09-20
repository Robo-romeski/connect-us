Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/node_modules/react-native-drawer/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _tweener = require('./tweener');

var _tweener2 = babelHelpers.interopRequireDefault(_tweener);

var deviceScreen = _reactNative.Dimensions.get('window');
var DOUBLE_TAP_INTERVAL = 500;
var TAP_DURATION = 250;
var propsWhomRequireUpdate = ['closedDrawerOffset', 'openDrawerOffset', 'type', 'styles'];

var Drawer = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Drawer, _Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this._length = 0, _this._prevLength = 0, _this._offsetOpen = 0, _this._offsetClosed = 0, _this._open = false, _this._panning = false, _this._tweenPending = false, _this._activeTween = null, _this._lastPress = 0, _this._panStartTime = 0, _this._syncAfterUpdate = false, _this._interactionHandle = null, _this.state = {
      viewport: deviceScreen
    }, _this.getChildContext = function () {
      return { drawer: _this };
    }, _this.initialize = function (props) {
      var fullLength = _this.getDeviceLength();
      _this._offsetClosed = _this.getClosedOffset(props, _this.state.viewport);
      _this._offsetOpen = _this.getOpenOffset(props, _this.state.viewport);

      _this._prevLength = _this._length;

      var styles = {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      };

      styles.main = babelHelpers.extends({
        position: 'absolute',
        borderWidth: 0
      }, _this.isLeftOrRightSide() ? { top: 0 } : { left: 0 }, _this.props.styles.main);

      styles.drawer = babelHelpers.extends({
        position: 'absolute',
        borderWidth: 0
      }, _this.isLeftOrRightSide() ? { top: 0 } : { left: 0 }, _this.props.styles.drawer);

      if (props.initializeOpen || props.open) {
        _this._open = true;
        _this._length = fullLength - _this._offsetOpen;
        styles.main[_this.props.side] = 0;
        styles.drawer[_this.props.side] = 0;
        if (props.type === 'static') styles.main[_this.props.side] = fullLength - _this._offsetOpen;
        if (props.type === 'displace') styles.main[_this.props.side] = fullLength - _this._offsetOpen;
      } else {
        _this._open = false;
        _this._length = _this._offsetClosed;
        styles.main[_this.props.side] = _this._offsetClosed;
        if (props.type === 'static') styles.drawer[_this.props.side] = 0;
        if (props.type === 'overlay') styles.drawer[_this.props.side] = _this._offsetClosed + _this._offsetOpen - fullLength;
        if (props.type === 'displace') styles.drawer[_this.props.side] = -fullLength + _this._offsetClosed + _this._offsetOpen;
      }

      if (_this.main) {
        _this.drawer.setNativeProps({ style: { left: styles.drawer.left } });
        _this.main.setNativeProps({ style: { left: styles.main.left } });
      } else {
        _this.stylesheet = _reactNative.StyleSheet.create(styles);
        _this.responder = _reactNative.PanResponder.create({
          onStartShouldSetPanResponder: _this.onStartShouldSetPanResponder,
          onStartShouldSetPanResponderCapture: _this.onStartShouldSetPanResponderCapture,
          onMoveShouldSetPanResponder: _this.onMoveShouldSetPanResponder,
          onMoveShouldSetPanResponderCapture: _this.onMoveShouldSetPanResponderCapture,
          onPanResponderMove: _this.onPanResponderMove,
          onPanResponderRelease: _this.onPanResponderRelease,
          onPanResponderTerminate: _this.onPanResponderTerminate
        });
      }

      _this.resync(null, props);
    }, _this.updatePosition = function () {
      var mainProps = {};
      var drawerProps = {};
      var ratio = (_this._length - _this._offsetClosed) / (_this.getOpenLength() - _this._offsetClosed);

      switch (_this.props.type) {
        case 'overlay':
          drawerProps[_this.props.side] = -_this.getDeviceLength() + _this._offsetOpen + _this._length;
          mainProps[_this.props.side] = _this._offsetClosed;
          break;
        case 'static':
          mainProps[_this.props.side] = _this._length;
          drawerProps[_this.props.side] = 0;
          break;
        case 'displace':
          mainProps[_this.props.side] = _this._length;
          drawerProps[_this.props.side] = -_this.getDeviceLength() + _this._length + _this._offsetOpen;
          break;
      }

      var mainOverlayProps = null;
      var drawerOverlayProps = null;
      if (_this.props.tweenHandler) {
        var propsFrag = _this.props.tweenHandler(ratio, _this.props.side);
        mainProps = babelHelpers.extends(mainProps, propsFrag.main);
        drawerProps = babelHelpers.extends(drawerProps, propsFrag.drawer);
        mainOverlayProps = propsFrag.mainOverlay;
        drawerOverlayProps = propsFrag.drawerOverlay;
      }
      if (_this.main && _this.drawer && _this.mainOverlay && _this.drawerOverlay) {
        _this.drawer.setNativeProps({ style: drawerProps });
        _this.main.setNativeProps({ style: mainProps });
        if (mainOverlayProps) _this.mainOverlay.setNativeProps({ style: mainOverlayProps });
        if (drawerOverlayProps) _this.drawerOverlay.setNativeProps({ style: drawerOverlayProps });
      }
    }, _this.onPanResponderTerminate = function (e, gestureState) {
      _this._panning = false;
      _this.shouldOpenDrawer(_this.getGestureDelta(gestureState)) ? _this.open() : _this.close();
    }, _this.onStartShouldSetPanResponderCapture = function (e, gestureState) {
      if (_this.shouldCaptureGestures()) return _this.processShouldSet(e, gestureState);
      return false;
    }, _this.onStartShouldSetPanResponder = function (e, gestureState) {
      if (!_this.shouldCaptureGestures()) return _this.processShouldSet(e, gestureState);
      return false;
    }, _this.onMoveShouldSetPanResponderCapture = function (e, gestureState) {
      if (_this.shouldCaptureGestures() && _this.props.negotiatePan) return _this.processMoveShouldSet(e, gestureState);
      return false;
    }, _this.onMoveShouldSetPanResponder = function (e, gestureState) {
      if (!_this.shouldCaptureGestures() && _this.props.negotiatePan) return _this.processMoveShouldSet(e, gestureState);
      return false;
    }, _this.onPanResponderMove = function (e, gestureState) {
      var delta = _this.getGestureDelta(gestureState);
      if (!_this.props.acceptPan) return false;

      if (_this._open ^ delta < 0 ^ _this.isRightOrBottomSide()) return false;

      delta = _this.isRightOrBottomSide() ? delta * -1 : delta;
      var length = _this._prevLength + delta;
      length = Math.min(length, _this.getOpenLength());
      length = Math.max(length, _this.getClosedLength());
      _this._length = length;

      _this.updatePosition();
      _this._panning = true;
    }, _this.onPanResponderRelease = function (e, gestureState) {
      var delta = _this.getGestureDelta(gestureState);
      _this._panning = false;
      if (Date.now() - _this._panStartTime < TAP_DURATION) _this.processTapGestures();
      if (Math.abs(delta) < 50 && _this._activeTween) return;

      _this.shouldOpenDrawer(delta) ? _this.open() : _this.close();
      _this.updatePosition();
      _this._prevLength = _this._length;
    }, _this.processShouldSet = function (e, gestureState) {
      var inMask = _this.testPanResponderMask(e, gestureState);
      if (!inMask) return false;
      _this._panStartTime = Date.now();
      if (inMask && _this.shouldCaptureGestures()) return true;
      if (_this.props.negotiatePan) return false;
      if (!_this.props.acceptPan) return false;
      _this.terminateActiveTween();
      return true;
    }, _this.processMoveShouldSet = function (e, gestureState) {
      var inMask = _this.testPanResponderMask(e, gestureState);
      if (!inMask && (!_this.props.acceptPanOnDrawer || _this._open === false)) return false;
      if (!_this.props.acceptPan) return false;

      if (!_this.props.negotiatePan || _this.props.disabled || !_this.props.acceptPan || _this._panning) return false;
      var delta = _this.getGestureDelta(gestureState);
      var deltaOppositeAxis = _this.getGestureDeltaOppositeAxis(gestureState);
      var swipeToLeftOrTop = delta < 0 ? true : false;
      var swipeToRightOrBottom = delta > 0 ? true : false;
      var swipeOppositeAxis = Math.abs(deltaOppositeAxis) >= Math.abs(delta) ? true : false;
      var swipeInCloseDirection = _this.isLeftOrTopSide() ? swipeToLeftOrTop : swipeToRightOrBottom;
      if (swipeOppositeAxis || _this._open && !swipeInCloseDirection || !_this._open && swipeInCloseDirection) {
        return false;
      }

      _this.terminateActiveTween();
      return true;
    }, _this.processTapGestures = function () {
      if (_this._activeTween) return false;
      if (_this.props.acceptTap || _this.props.tapToClose && _this._open) {
        _this._open ? _this.close() : _this.open();
        return true;
      }
      if (_this.props.acceptDoubleTap) {
        var now = new Date().getTime();
        var timeDelta = now - _this._lastPress;
        _this._lastPress = now;
        if (timeDelta < DOUBLE_TAP_INTERVAL) {
          _this._open ? _this.close() : _this.open();
          return true;
        }
      }
      return false;
    }, _this.testPanResponderMask = function (e, gestureState) {
      if (_this.props.disabled) return false;

      if (_this.context.drawer && _this.context.drawer._open) return false;
      if (_this._childDrawer && _this._childDrawer._open) return false;

      var pos0 = _this.isLeftOrRightSide() ? e.nativeEvent.pageX : e.nativeEvent.pageY;
      var deltaOpen = _this.isLeftOrTopSide() ? _this.getDeviceLength() - pos0 : pos0;
      var deltaClose = _this.isLeftOrTopSide() ? pos0 : _this.getDeviceLength() - pos0;

      if (_this._open && deltaOpen > _this.getOpenMask()) return false;
      if (!_this._open && deltaClose > _this.getClosedMask()) return false;
      return true;
    }, _this.terminateActiveTween = function () {
      if (_this._activeTween) {
        _this._activeTween.terminate();
        _this._activeTween = null;
      }
    }, _this.open = function (type, cb) {
      var start = _this._length;
      var end = _this.getOpenLength();

      if (_this._activeTween) return;
      if (type !== 'force' && start - end === 0 && _this._open === true) return;

      _this.props.onOpenStart && _this.props.onOpenStart();
      _this.setInteractionHandle();
      _this._activeTween = (0, _tweener2.default)({
        start: _this._length,
        end: _this.getOpenLength(),
        duration: _this.props.tweenDuration,
        easingType: _this.props.tweenEasing,
        onFrame: function onFrame(tweenValue) {
          _this._length = tweenValue;
          _this.updatePosition();
        },
        onEnd: function onEnd() {
          _this._activeTween = null;
          _this._open = true;
          _this._prevLength = _this._length;
          _this.adjustForCaptureGestures();
          _this.props.onOpen();
          _this.clearInteractionHandle();

          if (typeof type === 'function') {
            type();
          } else cb && cb();
        }
      });
    }, _this.close = function (type, cb) {
      var start = _this._length;
      var end = _this.getClosedLength();

      if (_this._activeTween) return;
      if (type !== 'force' && start - end === 0 && _this._open === false) return;

      _this.props.onCloseStart && _this.props.onCloseStart();
      _this.setInteractionHandle();
      _this._activeTween = (0, _tweener2.default)({
        start: start,
        end: end,
        easingType: _this.props.tweenEasing,
        duration: _this.props.tweenDuration,
        onFrame: function onFrame(tweenValue) {
          _this._length = tweenValue;
          _this.updatePosition();
        },
        onEnd: function onEnd() {
          _this._activeTween = null;
          _this._open = false;
          _this._prevLength = _this._length;
          _this.adjustForCaptureGestures();
          _this.props.onClose();
          _this.clearInteractionHandle();

          if (typeof type === 'function') {
            type();
          } else cb && cb();
        }
      });
    }, _this.toggle = function () {
      _this._open ? _this.close() : _this.open();
    }, _this.handleSetViewport = function (e) {
      var viewport = e.nativeEvent.layout;
      var oldViewport = _this.state.viewport;
      if (viewport.width === oldViewport.width && viewport.height === oldViewport.height) return;
      var didRotationChange = viewport.width !== oldViewport.width;
      _this.resync(viewport, null, didRotationChange);
    }, _this.resync = function (viewport, props, didRotationChange) {
      if (didRotationChange) _this._syncAfterUpdate = true;
      viewport = viewport || _this.state.viewport;
      props = props || _this.props;
      _this._offsetClosed = _this.getClosedOffset(props, viewport);
      _this._offsetOpen = _this.getOpenOffset(props, viewport);
      _this.setState({ viewport: viewport });
    }, _this.requiresResync = function (nextProps) {
      for (var i = 0; i < propsWhomRequireUpdate.length; i++) {
        var key = propsWhomRequireUpdate[i];
        if (_this.props[key] !== nextProps[key]) return true;
      }
    }, _this.getDeviceLength = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;
      return _this.isLeftOrRightSide() ? viewport.width : viewport.height;
    }, _this.getOpenLength = function () {
      return _this.getDeviceLength() - _this._offsetOpen;
    }, _this.getClosedLength = function () {
      return _this._offsetClosed;
    }, _this.getMainWidth = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;

      return _this.isLeftOrRightSide() ? viewport.width - _this._offsetClosed : viewport.width;
    }, _this.getMainHeight = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;

      return _this.isTopOrBottomSide() ? viewport.height - _this._offsetClosed : viewport.height;
    }, _this.getDrawerWidth = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;

      return _this.isLeftOrRightSide() ? viewport.width - _this._offsetOpen : viewport.width;
    }, _this.getDrawerHeight = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;

      return _this.isTopOrBottomSide() ? viewport.height - _this._offsetOpen : viewport.height;
    }, _this.getOpenMask = function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.viewport;

      if (_this.props.panCloseMask && _this.props.panCloseMask % 1 === 0) return _this.props.panCloseMask;
      if (_this.props.panCloseMask) return _this.getDeviceLength(viewport) * _this.props.panCloseMask;
      return Math.max(0.05, _this._offsetOpen);
    }, _this.getClosedMask = function () {
      if (_this.props.panOpenMask && _this.props.panOpenMask % 1 === 0) return _this.props.panOpenMask;
      if (_this.props.panOpenMask) return _this.getDeviceLength() * _this.props.panOpenMask;
      return Math.max(0.05, _this._offsetClosed);
    }, _this.getOpenOffset = function (props, viewport) {
      if (typeof props.openDrawerOffset === 'function') return props.openDrawerOffset(viewport);
      return props.openDrawerOffset > 1 || props.openDrawerOffset < 0 ? props.openDrawerOffset : props.openDrawerOffset * _this.getDeviceLength(viewport);
    }, _this.getClosedOffset = function (props, viewport) {
      if (typeof props.closedDrawerOffset === 'function') return props.closedDrawerOffset(viewport);
      return props.closedDrawerOffset > 1 || props.closedDrawerOffset < 0 ? props.closedDrawerOffset : props.closedDrawerOffset * _this.getDeviceLength(viewport);
    }, _this.getGestureDelta = function (gestureState) {
      return _this.isLeftOrRightSide() ? gestureState.dx : gestureState.dy;
    }, _this.getGestureDeltaOppositeAxis = function (gestureState) {
      return _this.isLeftOrRightSide() ? gestureState.dy : gestureState.dx;
    }, _this.isLeftOrRightSide = function () {
      if (_reactNative.I18nManager.isRTL) {
        return ["right", "left"].includes(_this.props.side);
      } else {
        return ["left", "right"].includes(_this.props.side);
      }
    }, _this.isTopOrBottomSide = function () {
      return ["top", "bottom"].includes(_this.props.side);
    }, _this.isLeftOrTopSide = function () {
      var side = "left";
      if (_reactNative.I18nManager.isRTL) {
        side = "right";
      }
      return [side, "top"].includes(_this.props.side);
    }, _this.isRightOrBottomSide = function () {
      var side = "right";
      if (_reactNative.I18nManager.isRTL) {
        side = "left";
      }
      return [side, "bottom"].includes(_this.props.side);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Drawer, [{
    key: '_registerChildDrawer',
    value: function _registerChildDrawer(drawer) {
      this._childDrawer = drawer;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.context.drawer) this.context.drawer._registerChildDrawer(this);
      if (this.props.openDrawerThreshold && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: openDrawerThreshold is obsolete. Use panThreshold instead.');
      if (this.props.panStartCompensation && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: panStartCompensation is deprecated.');
      if (this.props.relativeDrag && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: relativeDrag is deprecated.');
      this.initialize(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.requiresResync(nextProps)) this.resync(null, nextProps);

      if (nextProps.open !== null && this._open !== nextProps.open) {
        this._syncAfterUpdate = true;
        this._open = nextProps.open;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._syncAfterUpdate) {
        this._syncAfterUpdate = false;
        this._open ? this.open('force') : this.close('force');
      }
    }
  }, {
    key: 'shouldOpenDrawer',
    value: function shouldOpenDrawer(delta) {
      var hasActiveHeading = this._open ^ delta > 0 ^ this.isRightOrBottomSide();
      if (!hasActiveHeading) return this._open;else return this._open ^ Math.abs(delta) > this.getDeviceLength() * this.props.panThreshold;
    }
  }, {
    key: 'shouldCaptureGestures',
    value: function shouldCaptureGestures() {
      if (this.props.captureGestures === true) return true;
      if (this.props.captureGestures === 'closed' && this._open === false) return true;
      if (this.props.captureGestures === 'open' && this._open === true) return true;
      return false;
    }
  }, {
    key: 'adjustForCaptureGestures',
    value: function adjustForCaptureGestures() {
      if (!this.props.captureGestures) return;
      var shouldCapture = this.shouldCaptureGestures();
      if (this.mainOverlay && this.drawerOverlay) {
        this.mainOverlay.setNativeProps({ pointerEvents: shouldCapture && this._open ? 'auto' : 'none' });
        this.drawerOverlay.setNativeProps({ pointerEvents: shouldCapture && !this._open ? 'auto' : 'none' });
      }
    }
  }, {
    key: 'setInteractionHandle',
    value: function setInteractionHandle() {
      if (this._interactionHandle) _reactNative.InteractionManager.clearInteractionHandle(this._interactionHandle);
      if (this.props.useInteractionManager) this._interactionHandle = _reactNative.InteractionManager.createInteractionHandle();
    }
  }, {
    key: 'clearInteractionHandle',
    value: function clearInteractionHandle() {
      if (this._interactionHandle) _reactNative.InteractionManager.clearInteractionHandle(this._interactionHandle);
    }
  }, {
    key: 'render',
    value: function render() {
      var first = this.props.type === 'overlay' ? this.renderMain() : this.renderDrawer();
      var second = this.props.type === 'overlay' ? this.renderDrawer() : this.renderMain();

      return _react2.default.createElement(
        _reactNative.View,
        {
          key: 'drawerContainer',
          onLayout: this.handleSetViewport,
          style: this.stylesheet.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 559
          }
        },
        first,
        second
      );
    }
  }, {
    key: 'renderMain',
    value: function renderMain() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, this.responder.panHandlers, {
          key: 'main',
          ref: function ref(c) {
            return _this2.main = c;
          },
          style: [this.stylesheet.main, { height: this.getMainHeight(), width: this.getMainWidth() }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572
          }
        }),
        this.props.children,
        _react2.default.createElement(_reactNative.View, {
          pointerEvents: this._open && this.shouldCaptureGestures() ? 'auto' : 'none',
          ref: function ref(c) {
            return _this2.mainOverlay = c;
          },
          style: [styles.overlay, this.props.styles && this.props.styles.mainOverlay],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          }
        })
      );
    }
  }, {
    key: 'renderDrawer',
    value: function renderDrawer() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, this.responder.panHandlers, {
          key: 'drawer',
          ref: function ref(c) {
            return _this3.drawer = c;
          },
          elevation: this.props.elevation,
          style: [this.stylesheet.drawer, { height: this.getDrawerHeight(), width: this.getDrawerWidth() }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 590
          }
        }),
        this.props.content,
        _react2.default.createElement(_reactNative.View, {
          pointerEvents: !this._open && this.shouldCaptureGestures() ? 'auto' : 'none',
          ref: function ref(c) {
            return _this3.drawerOverlay = c;
          },
          style: [styles.overlay, this.props.styles && this.props.styles.drawerOverlay],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          }
        })
      );
    }
  }]);
  return Drawer;
}(_react.Component), _class.tweenPresets = {
  parallax: function parallax(ratio) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';

    var drawer = babelHelpers.defineProperty({}, side, -150 * (1 - ratio));
    return { drawer: drawer };
  }
}, _class.propTypes = {
  acceptDoubleTap: _propTypes2.default.bool,
  acceptPan: _propTypes2.default.bool,
  acceptTap: _propTypes2.default.bool,
  acceptPanOnDrawer: _propTypes2.default.bool,
  captureGestures: _propTypes2.default.oneOf([true, false, 'open', 'closed']),
  children: _propTypes2.default.node,
  closedDrawerOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  content: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  elevation: _propTypes2.default.number,
  initializeOpen: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  negotiatePan: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onCloseStart: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onOpenStart: _propTypes2.default.func,
  openDrawerOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  panThreshold: _propTypes2.default.number,
  panCloseMask: _propTypes2.default.number,
  panOpenMask: _propTypes2.default.number,
  side: _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom']),
  styles: _propTypes2.default.object,
  tapToClose: _propTypes2.default.bool,
  tweenDuration: _propTypes2.default.number,
  tweenEasing: _propTypes2.default.string,
  tweenHandler: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['overlay', 'static', 'displace']),
  useInteractionManager: _propTypes2.default.bool,

  panStartCompensation: _propTypes2.default.bool,
  openDrawerThreshold: _propTypes2.default.any
}, _class.defaultProps = {
  open: null,
  initializeOpen: false,

  type: 'displace',
  closedDrawerOffset: 0,
  openDrawerOffset: 0,
  panThreshold: 0.25,
  panOpenMask: null,
  panCloseMask: null,

  tweenHandler: null,
  tweenDuration: 250,
  tweenEasing: 'linear',

  disabled: false,
  negotiatePan: false,
  captureGestures: 'open',
  acceptDoubleTap: false,
  acceptTap: false,
  acceptPan: true,
  acceptPanOnDrawer: true,
  tapToClose: false,

  styles: {},
  elevation: 0,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  side: 'left',

  useInteractionManager: false
}, _class.contextTypes = { drawer: _propTypes2.default.object }, _class.childContextTypes = { drawer: _propTypes2.default.object }, _temp2);
exports.default = Drawer;


var styles = _reactNative.StyleSheet.create({
  overlay: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});