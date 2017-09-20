Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config.js');

var _config2 = babelHelpers.interopRequireDefault(_config);

function login(email, password) {
  var data = fetch(_config2.default.root + '/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  return data;
}

function signup(email, password) {
  var data = fetch(_config2.default.root + '/users/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  return data;
}

function getUser(token) {
  var data = fetch(_config2.default.root + '/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
  return data;
}

function logout(token) {
  var data = fetch(_config2.default.root + '/auth/logout', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
  return data;
}

exports.default = { login: login, signup: signup, getUser: getUser, logout: logout };