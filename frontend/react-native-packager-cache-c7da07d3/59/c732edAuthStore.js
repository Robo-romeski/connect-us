Object.defineProperty(exports, "__esModule", {
  value: true
});

var _desc, _value, _class, _descriptor;

var _reactNative = require('react-native');

var _mobx = require('mobx');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _AppViewStore = require('../ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

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

var TOKEN_KEY = '@Token:key';

var AuthStore = (_class = function () {
  function AuthStore() {
    babelHelpers.classCallCheck(this, AuthStore);

    _initDefineProp(this, 'user', _descriptor, this);
  }

  babelHelpers.createClass(AuthStore, [{
    key: 'setUser',
    value: function setUser(user) {
      this.user = user;
    }
  }, {
    key: 'unsetUser',
    value: function unsetUser() {
      _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
      _reactNative.AsyncStorage.removeItem(TOKEN_KEY).then(function () {
        console.log('Data Removed');
      }).catch(function (error) {
        console.log('Error in removing data: ', error);
      });
    }
  }, {
    key: 'isLoggedIn',
    get: function get() {
      return this.user;
    }
  }]);
  return AuthStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'isLoggedIn', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'isLoggedIn'), _class.prototype)), _class);
exports.default = new AuthStore();