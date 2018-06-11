const interfaceValidator = require('../../validators/interfaceValidator');

const blockWatchingServiceInterface = {
  name: 'blockWatchingServiceInterface',
  props: {
    startSync: 'function',
    doJob: 'function',
    unconfirmedTxEvent: 'function',
    stopSync: 'function',
    processBlock: 'function'
  }
};

module.exports = function (instance) {
  return interfaceValidator(blockWatchingServiceInterface, instance);
};