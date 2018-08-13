/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class BTCTEST extends AbstractNetwork {

  constructor() {
    super({
      type: 'regtest',
      addressPrefix: {
        pubkeyhash: 0x3c,
        scripthash: 0x26,
        witnesspubkeyhash: 0x7a,
        witnessscripthash: 0x14,
        bech32: 'rb'
      }
    });

  }
}

module.exports = new BTCTEST();
