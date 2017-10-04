Object.defineProperty(exports, "__esModule", {
  value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

var _mobx = require('mobx');

var _reactNative = require('react-native');

var _validate2 = require('validate.js');

var _validate3 = babelHelpers.interopRequireDefault(_validate2);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _AuthService = require('../../services/AuthService.js');

var _AuthService2 = babelHelpers.interopRequireDefault(_AuthService);

var _AppViewStore = require('./AppViewStore');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _UserModel = require('../../models/UserModel.js');

var _UserModel2 = babelHelpers.interopRequireDefault(_UserModel);

var _AuthStore = require('../EntityStore/AuthStore.js');

var _AuthStore2 = babelHelpers.interopRequireDefault(_AuthStore);

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

var LoginViewStore = (_class = function () {
  function LoginViewStore() {
    babelHelpers.classCallCheck(this, LoginViewStore);

    _initDefineProp(this, 'email', _descriptor, this);

    _initDefineProp(this, 'password', _descriptor2, this);

    _initDefineProp(this, 'isSubmitted', _descriptor3, this);

    _initDefineProp(this, 'isSubmitting', _descriptor4, this);

    _initDefineProp(this, 'isValid', _descriptor5, this);

    _initDefineProp(this, 'apiSuccess', _descriptor6, this);

    _initDefineProp(this, 'apiErrors', _descriptor7, this);

    _initDefineProp(this, 'validationErrors', _descriptor8, this);

    _initDefineProp(this, 'apiSuccess', _descriptor9, this);

    _initDefineProp(this, 'apiErrors', _descriptor10, this);

    this.constraints = {
      email: {
        presence: true,
        email: true
      },
      password: {
        presence: true
      }
    };
  }

  babelHelpers.createClass(LoginViewStore, [{
    key: 'validate',
    value: function validate() {
      this.validationErrors = (0, _validate3.default)({
        email: this.email,
        password: this.password }, this.constraints);
      this.isValid = !this.validationErrors;
    }
  }, {
    key: 'submit',
    value: function submit() {
      var _this = this;

      this.isSubmitted = true;
      this.isSubmitting = true;
      this.validate();
      if (this.isValid === true) {
        _AuthService2.default.login(this.email, this.password).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          console.log('returned response is: ', responseJson);
          if (responseJson.success === true) {
            _this.apiSuccess = responseJson;
            var userObj = new _UserModel2.default(_this.apiSuccess.data);
            _AuthStore2.default.setUser(userObj);

            _reactNative.AsyncStorage.setItem(TOKEN_KEY, _AuthStore2.default.user.token).then(function () {
              console.log('Successfully added data ');
            }).catch(function (error) {
              console.log('Failed with error', error);
            }).finally(function () {});
            _reactNativeRouterFlux.Actions.home();
            _this.isSubmitting = false;
            _this.email = _this.password = '';
          } else {
            _this.apiErrors = responseJson;
            alert(_this.apiErrors.message);
          }
        }).catch(function (error) {
          console.log('Error is: ', error);
        }).finally(function () {
          _this.isSubmitting = false;
        });
      } else {
        this.isSubmitting = false;
      }
    }
  }]);
  return LoginViewStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'email', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'password', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'isSubmitted', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'isSubmitting', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'isValid', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'apiSuccess', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'apiErrors', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'validationErrors', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'apiSuccess', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'apiErrors', [_mobx.observable], {
  enumerable: true,
  initializer: null
})), _class);
exports.default = new LoginViewStore();