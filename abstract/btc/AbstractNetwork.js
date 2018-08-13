const Network = require('bcoin/lib/protocol/network');

class AbstractNetwork extends Network {

  constructor(options) {
    delete Network[options.type];
    options.deploys = [];
    options.checkpointMap = [];
    super(options);
  }

  getAllAddressForms(address) {
    return {
      legacy: address,
      new: null
    };
  }

}


module.exports = AbstractNetwork;