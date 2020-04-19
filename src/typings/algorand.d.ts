declare module 'algosdk' {
  //export = <any> {};

  //algod

  export function Algod(
    token?: any,
    baseServer?: string,
    port?: number,
    headers?: {}
  ): void;
  export class Algod {
    constructor(
      token?: any,
      baseServer?: string,
      port?: number | string,
      headers?: {}
    );
    /**
     * status retrieves the StatusResponse from the running node
     * @param headers, optional
     * @returns {Promise<*>}
     */
    status: (headers?: {}) => Promise<any>;
    /**
     * healthCheck returns an empty object iff the node is running
     * @param headers, optional
     * @returns {Promise<*>}
     */
    healthCheck: (headers?: {}) => Promise<any>;
    /**
     * statusAfterBlock waits for round roundNumber to occur then returns the StatusResponse for this round.
     * This call blocks
     * @param roundNumber
     * @param headers, optional
     * @returns {Promise<*>}
     */
    statusAfterBlock: (roundNumber: any, headers?: {}) => Promise<any>;
    /**
     * pendingTransactions asks algod for a snapshot of current pending txns on the node, bounded by maxTxns.
     * If maxTxns = 0, fetches as many transactions as possible.
     * @param maxTxns number
     * @param headers, optional
     * @returns {Promise<*>}
     */
    pendingTransactions: (maxTxns: any, headers?: {}) => Promise<any>;
    /**
     * versions retrieves the VersionResponse from the running node
     * @param headers, optional
     * @returns {Promise<*>}
     */
    versions: (headers?: {}) => Promise<any>;
    /**
     * LedgerSupply gets the supply details for the specified node's Ledger
     * @param headers, optional
     * @returns {Promise<*>}
     */
    ledgerSupply: (headers?: {}) => Promise<any>;
    /**
     * transactionsByAddress returns all transactions for a PK [addr] in the [first, last] rounds range.
     * @param addr string
     * @param first number, optional
     * @param last number, optional
     * @param maxTxns number, optional
     * @param headers, optional
     * @returns {Promise<*>}
     */
    transactionByAddress: (
      addr: any,
      first?: any,
      last?: any,
      maxTxns?: any,
      headers?: {}
    ) => Promise<any>;
    /**
     * transactionsByAddressAndDate returns all transactions for a PK [addr] in the [fromDate, toDate] date range.
     * The date is a string in the YYYY-MM-DD format.
     * @param addr string
     * @param fromDate string
     * @param toDate string
     * @param maxTxns number, optional
     * @param headers, optional
     * @returns {Promise<*>}
     */
    transactionByAddressAndDate: (
      addr: any,
      fromDate: any,
      toDate: any,
      maxTxns?: any,
      headers?: {}
    ) => Promise<any>;
    /**
     * transactionById returns the a transaction information of a specific txid [txId]
     * Note - This method is allowed only when Indexer is enabled.
     * @param txid
     * @param headers, optional
     * @returns {Promise<*>}
     */
    transactionById: (txid: any, headers?: {}) => Promise<any>;
    /**
     * transactionInformation returns the transaction information of a specific txid and an address
     * @param addr
     * @param txid
     * @param headers, optional
     * @returns {Promise<*>}
     */
    transactionInformation: (
      addr: any,
      txid: any,
      headers?: {}
    ) => Promise<any>;
    /**
     * pendingTransactionInformation returns the transaction information for a specific txid of a pending transaction
     * @param txid
     * @param headers, optional
     * @returns {Promise<*>}
     */
    pendingTransactionInformation: (txid: any, headers?: {}) => Promise<any>;
    /**
     * accountInformation returns the passed account's information
     * @param addr string
     * @param headers, optional
     * @returns {Promise<*>}
     */
    accountInformation: (addr: any, headers?: {}) => Promise<any>;
    /**
     * assetInformation returns the information for the asset with the passed creator and index.tsx
     * @param index.tsx number
     * @param headers, optional
     * @returns {Promise<*>}
     */
    assetInformation: (index: any, headers?: {}) => Promise<any>;
    /**
     * suggestedFee gets the recommended transaction fee from the node
     * @param headers, optional
     * @returns {Promise<*>}
     */
    suggestedFee: (headers?: {}) => Promise<any>;
    /**
     * sendRawTransaction gets an encoded SignedTxn and broadcasts it to the network
     * @param txn Uin8Array
     * @param headers, optional
     * @returns {Promise<*>}
     */
    sendRawTransaction: (txn: any, headers?: {}) => Promise<any>;
    /**
     * sendRawTransactions gets a list of encoded SignedTxns and broadcasts it to the network
     * @param txn Array of Uin8Array
     * @param headers, optional
     * @returns {Promise<*>}
     */
    sendRawTransactions: (txns: any, headers?: {}) => Promise<any>;
    /**
     * getTransactionParams returns to common needed parameters for a new transaction
     * @param headers, optional
     * @returns {Promise<*>}
     */
    getTransactionParams: (headers?: {}) => Promise<any>;
    /**
     * block gets the block info for the given round This call blocks
     * @param roundNumber
     * @param headers, optional
     * @returns {Promise<*>}
     */
    block: (roundNumber: any, headers?: {}) => Promise<any>;
  }

  //main

  /**
   * isValidAddress takes an Algorand address and checks if valid.
   * @param addr Algorand address
   * @returns {boolean} true if valid, false otherwise
   */
  export function isValidAddress(addr: any): boolean;
  /**
   * generateAccount returns a new Algorand address and its corresponding secret key
   * @returns {{sk: Uint8Array, addr: string}}
   */
  export function generateAccount(): {
    sk: Uint8Array;
    addr: string;
  };
  /**
   * secretKeyToMnemonic takes an Algorand secret key and returns the corresponding mnemonic.
   * @param sk Uint8Array
   * @returns string mnemonic
   */
  export function secretKeyToMnemonic(sk: any): string;
  /**
   * mnemonicToSecretKey takes a mnemonic string and returns the corresponding Algorand address and its secret key.
   * @param mn 25 words Algorand mnemonic
   * @returns {{sk: Uint8Array, addr: string}}
   * @throws error if fails to decode the mnemonic
   */
  export function mnemonicToSecretKey(
    mn: any
  ): {
    sk: Uint8Array;
    addr: string;
  };
  /**
   * signTransaction takes an object with either payment or key registration fields and
   * a secret key and returns a signed blob.
   *
   * Payment transaction fields: to, amount, fee, firstRound, lastRound, genesisHash,
   * note(optional), GenesisID(optional), closeRemainderTo(optional)
   *
   * Key registration fields: fee, firstRound, lastRound, voteKey, selectionKey, voteFirst,
   * voteLast, voteKeyDilution, genesisHash, note(optional), GenesisID(optional)
   * @param txn object with either payment or key registration fields
   * @param sk Algorand Secret Key
   * @returns object contains the binary signed transaction and its txID
   */
  export function signTransaction(
    txn: any,
    sk: any
  ): {
    txID: any;
    blob: Uint8Array;
  };
  /**
   * signBid takes an object with the following fields: bidder key, bid amount, max price, bid ID, auctionKey, auction ID,
   * and a secret key and returns a signed blob to be inserted into a transaction Algorand note field.
   * @param bid Algorand Bid
   * @param sk Algorand secret key
   * @returns Uint8Array binary signed bid
   */
  export function signBid(bid: any, sk: any): Uint8Array;
  /**
   * signBytes takes arbitrary bytes and a secret key, prepends the bytes with "MX" for domain separation, signs the bytes
   * with the private key, and returns the signature.
   * @param bytes Uint8array
   * @param sk Algorand secret key
   * @returns binary signature
   */
  export function signBytes(bytes: any, sk: any): any;
  /**
   * verifyBytes takes array of bytes, an address, and a signature and verifies if the signature is correct for the public
   * key and the bytes (the bytes should have been signed with "MX" prepended for domain separation).
   * @param bytes Uint8Array
   * @param signature binary signature
   * @param addr string address
   * @returns bool
   */
  export function verifyBytes(bytes: any, signature: any, addr: any): any;
  /**
   * encodeObj takes a javascript object and returns its msgpack encoding
   * Note that the encoding sorts the fields alphabetically
   * @param o js obj
   * @returns Uint8Array binary representation
   */
  export function encodeObj(o: any): Uint8Array;
  /**
   * decodeObj takes a Uint8Array and returns its javascript obj
   * @param o Uint8Array to decode
   * @returns object
   */
  export function decodeObj(o: any): any;
  /**
   * mnemonicToMasterDerivationKey takes a mnemonic string and returns the corresponding master derivation key.
   * @param mn 25 words Algorand mnemonic
   * @returns Uint8Array
   * @throws error if fails to decode the mnemonic
   */
  export function mnemonicToMasterDerivationKey(mn: any): Uint8Array;
  /**
   * masterDerivationKeyToMnemonic takes a master derivation key and returns the corresponding mnemonic.
   * @param mdk Uint8Array
   * @returns string mnemonic
   */
  export function masterDerivationKeyToMnemonic(mdk: any): string;
  /**
   * appendSignMultisigTransaction takes a multisig transaction blob, and appends our signature to it.
   * While we could derive public key preimagery from the partially-signed multisig transaction,
   * we ask the caller to pass it back in, to ensure they know what they are signing.
   * @param multisigTxnBlob an encoded multisig txn. Supports non-payment txn types.
   * @param version multisig version
   * @param threshold multisig threshold
   * @param addrs a list of Algorand addresses representing possible signers for this multisig. Order is important.
   * @param sk Algorand secret key
   * @returns object containing txID, and blob representing encoded multisig txn
   */
  export function appendSignMultisigTransaction(
    multisigTxnBlob: any,
    {
      version,
      threshold,
      addrs
    }: {
      version: any;
      threshold: any;
      addrs: any;
    },
    sk: any
  ): {
    txID: any;
    blob: Uint8Array;
  };
  /**
   * mergeMultisigTransactions takes a list of multisig transaction blobs, and merges them.
   * @param multisigTxnBlobs a list of blobs representing encoded multisig txns
   * @returns blob representing encoded multisig txn
   */
  export function mergeMultisigTransactions(multisigTxnBlobs: any): Uint8Array;
  /**
   * signMultisigTransaction takes a raw transaction (see signTransaction), a multisig preimage, a secret key, and returns
   * a multisig transaction, which is a blob representing a transaction and multisignature account preimage. The returned
   * multisig txn can accumulate additional signatures through mergeMultisigTransactions or appendMultisigTransaction.
   * @param txn object with either payment or key registration fields
   * @param version multisig version
   * @param threshold multisig threshold
   * @param addrs a list of Algorand addresses representing possible signers for this multisig. Order is important.
   * @param sk Algorand secret key. The corresponding pk should be in the pre image.
   * @returns object containing txID, and blob of partially signed multisig transaction (with multisig preimage information)
   */
  export function signMultisigTransaction(
    txn: any,
    {
      version,
      threshold,
      addrs
    }: {
      version: any;
      threshold: any;
      addrs: any;
    },
    sk: any
  ): {
    txID: any;
    blob: Uint8Array;
  };
  /**
   * multisigAddress takes multisig metadata (preimage) and returns the corresponding human readable Algorand address.
   * @param version mutlisig version
   * @param threshold multisig threshold
   * @param addrs list of Algorand addresses
   */
  export function multisigAddress({
    version,
    threshold,
    addrs
  }: {
    version: any;
    threshold: any;
    addrs: any;
  }): any;
  export const ERROR_MULTISIG_BAD_SENDER: Error;
  export const ERROR_INVALID_MICROALGOS: Error;
  /**
   * microalgosToAlgos converts microalgos to algos
   * @param microalgos number
   * @returns number
   */
  export function microalgosToAlgos(microalgos: any): number;
  /**
   * algosToMicroalgos converts algos to microalgos
   * @param algos number
   * @returns number
   */
  export function algosToMicroalgos(algos: any): number;
  /**
   * computeGroupID returns group ID for a group of transactions
   * @param txns array of transactions (every element is a dict or Transaction)
   * @return Buffer
   */
  export function computeGroupID(txns: any): any;
  /**
   * assignGroupID assigns group id to a given list of unsigned transactions
   * @param txns array of transactions (every element is a dict or Transaction)
   * @param from optional sender address specifying which transaction return
   * @return possible list of matching transactions
   */
  export function assignGroupID(txns: any, from?: any): any[];
  /**
   * makeLogicSig creates LogicSig object from program and arguments
   *
   * @param {Uint8Array} program Program to make LogicSig from
   * @param {[Uint8Array]} args Arguments as array of Uint8Array
   * @returns {LogicSig} LogicSig object
   */
  export function makeLogicSig(program: Uint8Array, args: [Uint8Array]): any;
  /**
   * signLogicSigTransaction takes  a raw transaction and a LogicSig object and returns a logicsig
   * transaction which is a blob representing a transaction and logicsig object.
   * @param {Object} txn transaction object
   * @param {LogicSig} lsig logicsig object
   * @returns {Object} Object containing txID and blob representing signed transaction.
   * @throws error on failure
   */
  export function signLogicSigTransaction(txn: any, lsig: any): any;
  /**
   * makePaymentTxn takes payment arguments and returns a Transaction object
   * @param from - string representation of Algorand address of sender
   * @param to - string representation of Algorand address of recipient
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param amount - integer amount to send, in microAlgos
   * @param closeRemainderTo - optionally close out remaining account balance to this account, represented as string rep of Algorand address
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @returns {Transaction}
   */
  export function makePaymentTxn(
    from: any,
    to: any,
    fee: any,
    amount: any,
    closeRemainderTo: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any
  ): any;
  /**
   * makeKeyRegistrationTxn takes key registration arguments and returns a Transaction object for
   * that key registration operation
   *
   * @param from - string representation of Algorand address of sender
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param voteKey - string representation of voting key. for key deregistration, leave undefined
   * @param selectionKey - string representation of selection key. for key deregistration, leave undefined
   * @param voteFirst - first round on which voteKey is valid
   * @param voteLast - last round on which voteKey is valid
   * @param voteKeyDilution - integer
   * @returns {Transaction}
   */
  export function makeKeyRegistrationTxn(
    from: any,
    fee: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    voteKey: any,
    selectionKey: any,
    voteFirst: any,
    voteLast: any,
    voteKeyDilution: any
  ): any;
  /** makeAssetCreateTxn takes asset creation arguments and returns a Transaction object
   * for creating that asset
   *
   * @param from - string representation of Algorand address of sender
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param total - integer total supply of the asset
   * @param decimals - integer number of decimals for asset unit calculation
   * @param defaultFrozen - boolean whether asset accounts should default to being frozen
   * @param manager - string representation of Algorand address in charge of reserve, freeze, clawback, destruction, etc
   * @param reserve - string representation of Algorand address representing asset reserve
   * @param freeze - string representation of Algorand address with power to freeze/unfreeze asset holdings
   * @param clawback - string representation of Algorand address with power to revoke asset holdings
   * @param unitName - string units name for this asset
   * @param assetName - string name for this asset
   * @param assetURL - string URL relating to this asset
   * @param assetMetadataHash - string representation of some sort of hash commitment with respect to the asset
   * @returns {Transaction}
   */
  export function makeAssetCreateTxn(
    from: any,
    fee: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    total: any,
    decimals: any,
    defaultFrozen: any,
    manager: any,
    reserve: any,
    freeze: any,
    clawback: any,
    unitName: any,
    assetName: any,
    assetURL: any,
    assetMetadataHash: any
  ): any;
  /** makeAssetConfigTxn can be issued by the asset manager to change the manager, reserve, freeze, or clawback
   * you must respecify existing addresses to keep them the same; leaving a field blank is the same as turning
   * that feature off for this asset
   *
   * @param from - string representation of Algorand address of sender
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param assetIndex - int asset index.tsx uniquely specifying the asset
   * @param manager - string representation of new asset manager Algorand address
   * @param reserve - string representation of new reserve Algorand address
   * @param freeze - string representation of new freeze manager Algorand address
   * @param clawback - string representation of new revocation manager Algorand address
   * @param strictEmptyAddressChecking - boolean - throw an error if any of manager, reserve, freeze, or clawback are undefined. optional, defaults to true.
   * @returns {Transaction}
   */
  export function makeAssetConfigTxn(
    from: any,
    fee: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    assetIndex: any,
    manager: any,
    reserve: any,
    freeze: any,
    clawback: any,
    strictEmptyAddressChecking?: boolean
  ): any;
  /** makeAssetDestroyTxn will allow the asset's manager to remove this asset from the ledger, so long
   * as all outstanding assets are held by the creator.
   *
   * @param from - string representation of Algorand address of sender
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param assetIndex - int asset index.tsx uniquely specifying the asset
   * @returns {Transaction}
   */
  export function makeAssetDestroyTxn(
    from: any,
    fee: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    assetIndex: any
  ): any;
  /** makeAssetFreezeTxn will allow the asset's freeze manager to freeze or un-freeze an account,
   * blocking or allowing asset transfers to and from the targeted account.
   *
   * @param from - string representation of Algorand address of sender
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param assetIndex - int asset index.tsx uniquely specifying the asset
   * @param freezeTarget - string representation of Algorand address being frozen or unfrozen
   * @param freezeState - true if freezeTarget should be frozen, false if freezeTarget should be allowed to transact
   * @returns {Transaction}
   */
  export function makeAssetFreezeTxn(
    from: any,
    fee: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    assetIndex: any,
    freezeTarget: any,
    freezeState: any
  ): any;
  /** makeAssetTransferTxn allows for the creation of an asset transfer transaction.
   * Special case: to begin accepting assets, set amount=0 and from=to.
   *
   * @param from - string representation of Algorand address of sender
   * @param to - string representation of Algorand address of asset recipient
   * @param closeRemainderTo - optional - string representation of Algorand address - if provided,
   * send all remaining assets after transfer to the "closeRemainderTo" address and close "from"'s asset holdings
   * @param revocationTarget - optional - string representation of Algorand address - if provided,
   * and if "from" is the asset's revocation manager, then deduct from "revocationTarget" rather than "from"
   * @param fee - integer fee per byte, in microAlgos. for a flat fee, overwrite the fee property on the returned object
   * @param amount - integer amount of assets to send
   * @param firstRound - integer first protocol round on which this txn is valid
   * @param lastRound - integer last protocol round on which this txn is valid
   * @param note - uint8array of arbitrary data for sender to store
   * @param genesisHash - string specifies hash genesis block of network in use
   * @param genesisID - string specifies genesis ID of network in use
   * @param assetIndex - int asset index.tsx uniquely specifying the asset
   * @param lease - see makePaymentTxn
   * @returns {Transaction}
   */
  export function makeAssetTransferTxn(
    from: any,
    to: any,
    closeRemainderTo: any,
    revocationTarget: any,
    fee: any,
    amount: any,
    firstRound: any,
    lastRound: any,
    note: any,
    genesisHash: any,
    genesisID: any,
    assetIndex: any
  ): any;
}
