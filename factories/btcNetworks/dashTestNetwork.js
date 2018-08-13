/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class DASHTEST extends AbstractNetwork {

  constructor() {
    super({
      type: 'dashtest',
      addressPrefix: {
        pubkeyhash: 140,
        scripthash: 19,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
      }
    });
  }

}

module.exports = new DASHTEST();
