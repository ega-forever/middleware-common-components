/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class BTGTEST extends AbstractNetwork {

  constructor() {
    super({
      type: 'btgtest',
      addressPrefix: {
        pubkeyhash: 0x6f,
        scripthash: 0xc4,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
      }
    });
  }
}

module.exports = new BTGTEST();
