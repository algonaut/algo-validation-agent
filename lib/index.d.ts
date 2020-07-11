declare const _default: {
    core: {
        isAlgorandAddress: typeof import("./core").isAlgorandAddress;
        isTransactionId: typeof import("./core").isTransactionId;
    };
    assetFieldValidators: {
        assetIndex: typeof import("./assetFieldValidators").assetIndex;
        assetTotal: typeof import("./assetFieldValidators").assetTotal;
        assetDecimals: typeof import("./assetFieldValidators").assetDecimals;
        assetDefaultFrozen: typeof import("./assetFieldValidators").assetDefaultFrozen;
        assetName: typeof import("./assetFieldValidators").assetName;
        assetUnitName: typeof import("./assetFieldValidators").assetUnitName;
        assetURL: typeof import("./assetFieldValidators").assetURL;
        assetMetadataHash: typeof import("./assetFieldValidators").assetMetadataHash;
    };
    transactionFieldValidators: {
        from: typeof import("./transactionFieldValidators").from;
        fee: typeof import("./transactionFieldValidators").fee;
        firstRound: typeof import("./transactionFieldValidators").firstRound;
        lastRound: typeof import("./transactionFieldValidators").lastRound;
        note: typeof import("./transactionFieldValidators").note;
        genesisID: typeof import("./transactionFieldValidators").genesisID;
        genesisHash: typeof import("./transactionFieldValidators").genesisHash;
        group: typeof import("./transactionFieldValidators").group;
        type: typeof import("./transactionFieldValidators").type;
        to: typeof import("./transactionFieldValidators").to;
        amount: typeof import("./transactionFieldValidators").amount;
        closeRemainderTo: typeof import("./transactionFieldValidators").closeRemainderTo;
    };
    transactions: {
        payment: typeof import("./transactions").payment;
        close: typeof import("./transactions").close;
        registerKeyOnline: typeof import("./transactions").registerKeyOnline;
        registerKeyOffline: typeof import("./transactions").registerKeyOffline;
        assetCreate: typeof import("./transactions").assetCreate;
        assetConfigure: typeof import("./transactions").assetConfigure;
        assetDestroy: typeof import("./transactions").assetDestroy;
        assetOptIn: typeof import("./transactions").assetOptIn;
        assetTransfer: typeof import("./transactions").assetTransfer;
        assetRevoke: typeof import("./transactions").assetRevoke;
        assetFreeze: typeof import("./transactions").assetFreeze;
    };
};
export default _default;
