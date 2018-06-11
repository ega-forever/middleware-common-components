const interfaceValidator = require('../../validators/interfaceValidator');

const syncCacheServiceInterface = {
  name: 'syncCacheServiceInterface',
  props: {
    start: 'function',
    indexCollection: 'function',
    doJob: 'function',
    runPeer: 'function'
  }
};

module.exports = function (instance) {
  return interfaceValidator(syncCacheServiceInterface, instance);
};