const interfaceValidator = require('../../validators/interfaceValidator');

const masterNodeServiceInterface = {
  name: 'masterNodeServiceInterface',
  props: {
    start: 'function'
  }
};

module.exports = function (instance) {
  return interfaceValidator(masterNodeServiceInterface, instance);
};