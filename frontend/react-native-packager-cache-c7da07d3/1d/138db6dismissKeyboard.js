
'use strict';

var TextInputState = require('TextInputState');

function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}

module.exports = dismissKeyboard;