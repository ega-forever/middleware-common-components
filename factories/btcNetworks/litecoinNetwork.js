/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const bitcoin = require('bitcoinjs-lib'),
  AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class LITECOIN extends AbstractNetwork {

  constructor() {
    super({
      type: 'litecoin',
      addressPrefix: {
        pubkeyhash: 0x30,
        scripthash: 0x32,
        witnesspubkeyhash: 0x06,
        witnessscripthash: 0x0a,
        bech32: 'lc'
      }
    });
  }

  getAllAddressForms(address) {
    const types = {
      legacy: address,
      new: null
    };

    try {
      const decoded = bitcoin.address.fromBase58Check(address);
      types.legacy = bitcoin.address.toBase58Check(decoded.hash, 50);
      types.new = bitcoin.address.toBase58Check(decoded.hash, 5);

      return types;
    } catch (e) {
      return types;
    }
  }

}

module.exports = new LITECOIN();
