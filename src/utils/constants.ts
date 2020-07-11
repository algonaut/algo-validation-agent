export const ALGORAND_ADDRESS_LENGTH = 58;
export const ALGORAND_TRANSACTION_LENGTH = 52;
export const VALID_ALGORAND_TRANSACTION =
  'JNIN7CQCXOC3OYKPDNP7IQW6HOL5UN4EP47OXSDKK6TY3E55Y2VA';
export const VALID_ALGORAND_ADDRESS =
  'CINCNAPB2RLDUCS3EVDLURZZD742TMWRQEZ4CBEWF2QMOYXMH6RWRZEIEA';
export const BASE32_RFC_4648_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export const MAINNET_GENESIS_ID = 'mainnet-v1.0';
export const TESTNET_GENESIS_ID = 'testnet-v1.0';
export const BETANET_GENESIS_ID = 'betanet-v1.0';

export const MAINNET_GENESIS_HASH =
  'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=';
export const TESTNET_GENESIS_HASH =
  'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=';
export const BETANET_GENESIS_HASH =
  'mFgazF+2uRS1tMiL9dsj01hJGySEmPN28B/TjjvpVW0=';

export const TRANSACTION_TYPES = {
  PAY: 'pay',
  KEYREG: 'keyreg',
  ACFG: 'acfg',
  AXFER: 'axfer',
  AFRZ: 'afrz'
};

export const VALID_PAY_TRANSACTION = {
  txn: {
    amount: 5000000,
    fee: 1000,
    firstRound: 6000000,
    genesisID: 'mainnet-v1.0',
    genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
    lastRound: 6001000,
    note: 'SGVsbG8gV29ybGQ=',
    to: 'GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A',
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'pay'
    // lease
    // group
  }
};

export const INVALID_ROUND_TRANSACTION = {
  txn: {
    amount: 5000000,
    fee: 1000,
    firstRound: 1000,
    lastRound: 500, // lower than first round on purpose for testing
    genesisID: 'mainnet-v1.0',
    genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
    note: 'SGVsbG8gV29ybGQ=',
    to: 'GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A',
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'pay'
    // lease
    // group
  }
};

export const VALID_CLOSE_TRANSACTION = {
  txn: {
    closeRemainderTo:
      'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    fee: 1000,
    firstRound: 4695599,
    genesisID: 'testnet-v1.0',
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 4696599,
    to: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    from: 'SYGHTA2DR5DYFWJE6D4T34P4AWGCG7JTNMY4VI6EDUVRMX7NG4KTA2WMDA',
    type: 'pay'
  }
};

export const REGISTER_KEY_ONLINE_TRANSACTION = {
  txn: {
    fee: 2000,
    firstRound: 6002000,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 6003000,
    selectionKey: 'X84ReKTmp+yfgmMCbbokVqeFFFrKQeFZKEXG89SXwm4=',
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'keyreg',
    voteFirst: 6000000,
    voteKeyDilution: 1730,
    voteKey: 'eXq34wzh2UIxCZaI1leALKyAvSz/+XOe0wqdHagM+bw=',
    voteLast: 9000000
  }
};

export const REGISTER_KEY_OFFLINE_TRANSACTION = {
  txn: {
    fee: 1000,
    firstRound: 7000000,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 7001000,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'keyreg'
  }
};

export const CREATE_ASSET_TRANSACTION = {
  txn: {
    assetMetadataHash: 'gXHjtDdtVpY7IKwJYsJWdCSrnUyRsX4jr3ihzQ2U9CQ=',
    assetName: 'My New Coin',
    assetURL: 'developer.algorand.org',
    assetClawback: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetDecimals: 2,
    assetFreeze: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetManager: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetReserve: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetTotal: 50000000,
    assetUnitName: 'MNC',
    fee: 1000,
    firstRound: 6000000,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 6001000,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'acfg'
  }
};

export const CONFIGURE_ASSET_TRANSACTION = {
  txn: {
    assetClawback: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetFreeze: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetManager: 'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    assetReserve: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetIndex: 168103,
    fee: 1000,
    firstRound: 6002000,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 6003000,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'acfg'
  }
};

export const DESTROY_ASSET_TRANSACTION = {
  txn: {
    assetIndex: 168103,
    fee: 1000,
    firstRound: 7000000,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 7001000,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'acfg'
  }
};

export const OPT_IN_ASSET_TRANSACTION = {
  txn: {
    to: 'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    fee: 1000,
    firstRound: 6631154,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 6632154,
    from: 'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    type: 'axfer',
    assetIndex: 168103
  }
};

export const TRANSFER_ASSET_TRANSACTION = {
  txn: {
    amount: 1000000,
    to: 'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    fee: 3000,
    firstRound: 7631196,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 7632196,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'axfer',
    assetIndex: 168103
  }
};

export const REVOKE_ASSET_TRANSACTION = {
  txn: {
    amount: 500000,
    to: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    assetRevocationTarget:
      'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    fee: 1000,
    firstRound: 7687457,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 7688457,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'axfer',
    assetIndex: 168103
  }
};

export const FREEZE_ASSET_TRANSACTION = {
  txn: {
    freezeState: true,
    freezeAccount: 'QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ',
    assetIndex: 168103,
    fee: 1000,
    firstRound: 7687793,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 7688793,
    from: 'EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4',
    type: 'afrz'
  }
};
