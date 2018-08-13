/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class DASH extends AbstractNetwork {

  constructor() {
    super({
      type: 'dash',
      addressPrefix: {
        pubkeyhash: 76,
        scripthash: 16,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
      }
    });

  }
}

module.exports = new DASH();
