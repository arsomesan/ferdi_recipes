"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdium => {
  const getMessages = function getMessages() {
    // TODO: Insert your notification-finding code here
    Ferdi.setBadge(0, 0);
  };

  Ferdium.loop(getMessages);
  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
