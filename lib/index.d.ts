/// <reference path="../src/typings/v8n.d.ts" />
declare const _default: {
    core: {
        assetIndex: import("v8n").Validation;
        algoAddress: import("v8n").Validation;
        algoTxn: import("v8n").Validation;
        assetCreateParams: import("v8n").Validation;
        assetConfigureParams: import("v8n").Validation;
        isAlgorandAddress: typeof import("./core").isAlgorandAddress;
        isTransactionId: typeof import("./core").isTransactionId;
        isAssetIndex: typeof import("./core").isAssetIndex;
        isTransactionPayload: typeof import("./core").isTransactionPayload;
    };
    assets: {
        assetTotalIssuance: typeof import("./assets").assetTotalIssuance;
        assetDecimalPlaces: typeof import("./assets").assetDecimalPlaces;
        defaultFrozen: typeof import("./assets").defaultFrozen;
        assetName: typeof import("./assets").assetName;
        unitName: typeof import("./assets").unitName;
        assetUrl: typeof import("./assets").assetUrl;
        assetMetadataHash: typeof import("./assets").assetMetadataHash;
    };
    transactionFields: {
        transactionSender: typeof import("./transactionFields").transactionSender;
        transactionFee: typeof import("./transactionFields").transactionFee;
        firstValidRound: typeof import("./transactionFields").firstValidRound;
        lastValidRound: typeof import("./transactionFields").lastValidRound;
        transactionNote: typeof import("./transactionFields").transactionNote;
        transactionGenesisId: typeof import("./transactionFields").transactionGenesisId;
        transactionGenesisHash: typeof import("./transactionFields").transactionGenesisHash;
        transactionGroup: typeof import("./transactionFields").transactionGroup;
        transactionType: typeof import("./transactionFields").transactionType;
        transactionReceiver: typeof import("./transactionFields").transactionReceiver;
        transactionAmount: typeof import("./transactionFields").transactionAmount;
        closeRemainderTo: typeof import("./transactionFields").closeRemainderTo;
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
