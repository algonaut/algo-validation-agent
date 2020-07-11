interface TransactionPayload {
  genesisId: String;
  lease: String;
  fee: Number;
  note: String;
  group: String;
  reKeyTo: String;
  firstRound: Number;
  lastRound: Number;
  genesisHash: String;
  amount: Number;
  voteFirst: Number;
  voteKeyDilution: Number;
  voteLast: Number;
  voteKey: Number;
  selectionKey: String;
  type: String;
  assetDecimals: Number;
  assetToal: Number;
  assetDefaultFrozen: Number;
  assetMetadataHash: String;
  assetName: String;
  assetUnitName: String;
  assetURL: String;
  assetIndex: Number;
  freezeState: Boolean;
  closeRemainderTo: String;
}
