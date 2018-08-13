/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

const AbstractNetwork = require('../../abstract/btc/AbstractNetwork'),
  bcc = require('bitcoincashjs');



class BCCTEST extends AbstractNetwork {

  constructor() {
    super({
      type: 'bcctest',
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
      bitpay: null,
      new: null,
      legacy: address
    };

    try {
      const decoded = bcc.Address.fromString(address);
      types.bitpay = decoded.toString(bcc.Address.BitpayFormat);
      types.new = decoded.toString(bcc.Address.CashAddrFormat);
      types.legacy = decoded.toString();

      return types;
    } catch (e) {
      return types;
    }
  }

}

module.exports = new BCCTEST();
