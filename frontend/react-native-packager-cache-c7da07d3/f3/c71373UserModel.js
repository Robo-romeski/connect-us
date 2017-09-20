Object.defineProperty(exports, "__esModule", {
  value: true
});

var UserModel = function UserModel(userData) {
  babelHelpers.classCallCheck(this, UserModel);

  this.token = userData.jwtAccessToken;
  this.email = userData.user.email;
};

exports.default = UserModel;