const interfaceValidator = require('../../validators/interfaceValidator');

const providerServiceInterface = {
  name: 'providerServiceInterface',
  props: {
    resetConnector: 'function',
    switchConnector: 'function',
    get: 'function'
  }
};

module.exports = function (instance) {
  return interfaceValidator(providerServiceInterface, instance);
};