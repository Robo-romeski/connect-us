Object.defineProperty(exports, "__esModule", {
  value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = require('mobx');

var _reactNativeRouterFlux = require('react-native-router-flux');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AppViewStore = (_class = function () {
  function AppViewStore() {
    babelHelpers.classCallCheck(this, AppViewStore);

    _initDefineProp(this, 'routeStack2', _descriptor, this);

    this.routeStack = [{
      key: 'login'
    }];

    _initDefineProp(this, 'drawerOpened', _descriptor2, this);

    _initDefineProp(this, 'appLoading', _descriptor3, this);
  }

  babelHelpers.createClass(AppViewStore, [{
    key: 'replaceRoute',
    value: function replaceRoute(routeObj) {
      _reactNativeRouterFlux.Actions.home();
    }
  }]);
  return AppViewStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'routeStack2', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [{
      key: 'login'
    }];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'drawerOpened', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'appLoading', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
exports.default = new AppViewStore();