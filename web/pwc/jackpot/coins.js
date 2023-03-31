var SATOSHI_CONST = 100000000
var coins = {
  BTC: {
    name: 'Bitcoin',
    code: 'BTC',
    symbol: '฿',
    api: {
      url: 'https://blockchain.info/q/addressbalance/{address}',
      getUnits: (data) => data / SATOSHI_CONST,
    },
  },
  BCH: {
    name: 'Bitcoin Cash',
    code: 'BCH',
    symbol: '฿',
    api: {
      url: 'https://rest.bitcoin.com/v2/address/details/{address}',
      getUnits: (data) => data.balance,
    },
  },
  DOGE: {
    name: 'Dogecoin',
    code: 'DOGE',
    symbol: 'Ð',
    api: {
      url: 'https://dogechain.info/api/v1/address/balance/{address}',
      getUnits: (data) => parseFloat(data.balance),
    },
  },
  MONA: {
    name: 'MonaCoin',
    code: 'MONA',
    symbol: 'M',
    api: {
      url: 'https://mona.chainsight.info/api/addr/{address}?noTxList=1',
      getUnits: (data) => data.balance,
    },
  },
  LTC: {
    name: 'Litecoin',
    code: 'LTC',
    symbol: 'Ł',
    api: {
      url: 'https://api.blockcypher.com/v1/ltc/main/addrs/{address}',
      getUnits: (data) => data.balance / SATOSHI_CONST,
    },
  },
  DASH: {
    name: 'Dash',
    code: 'DASH',
    symbol: 'D',
    api: {
      url: 'https://api.blockcypher.com/v1/dash/main/addrs/{address}',
      getUnits: (data) => data.balance / SATOSHI_CONST,
    },
  },
  /*NMC: {
    name: 'Namecoin',
    code: 'NMC',
    symbol: 'ℕ',
    api: {
      proxy: true,
      url: 'http://namecoin.webbtc.com/address/{address}.json',
      callback: function (data) {
        return data.balance / SATOSHI_CONST
      },
    },
  },*/
  PPC: {
    name: 'Peercoin',
    code: 'PPC',
    symbol: 'Ᵽ',
    api: {
      url: 'https://chainz.cryptoid.info/ppc/api.dws?a={address}&q=getbalance',
      getUnits: (data) => parseFloat(data),
    },
  },
  BLK: {
    name: 'BlackCoin',
    code: 'BLK',
    symbol: 'B',
    api: {
      url: 'https://chainz.cryptoid.info/blk/api.dws?a={address}&q=getbalance',
      getUnits: (data) => parseFloat(data),
    },
  },
}
