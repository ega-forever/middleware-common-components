/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const bitcoin = require('bitcoinjs-lib'),
  AbstractNetwork = require('../../abstract/btc/AbstractNetwork');

class LITECOINTEST extends AbstractNetwork {

  constructor() {
    super({
      type: 'litecointest',
      addressPrefix: {
        pubkeyhash: 0x6f,
        scripthash: 0xc4,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
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
      types.legacy = bitcoin.address.toBase58Check(decoded.hash, 196);
      types.new = bitcoin.address.toBase58Check(decoded.hash, 58);

      return types;
    } catch (e) {
      return types;
    }
  }


}

module.exports = new LITECOINTEST();
