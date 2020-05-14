export declare const ALGORAND_ADDRESS_LENGTH = 58;
export declare const ALGORAND_TRANSACTION_LENGTH = 52;
export declare const VALID_ALGORAND_TRANSACTION = "JNIN7CQCXOC3OYKPDNP7IQW6HOL5UN4EP47OXSDKK6TY3E55Y2VA";
export declare const VALID_ALGORAND_ADDRESS = "CINCNAPB2RLDUCS3EVDLURZZD742TMWRQEZ4CBEWF2QMOYXMH6RWRZEIEA";
export declare const BASE32_RFC_4648_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
export declare const MAINNET_GENESIS_ID = "mainnet-v1.0";
export declare const TESTNET_GENESIS_ID = "testnet-v1.0";
export declare const BETANET_GENESIS_ID = "betanet-v1.0";
export declare const MAINNET_GENESIS_HASH = "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=";
export declare const TESTNET_GENESIS_HASH = "SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=";
export declare const BETANET_GENESIS_HASH = "mFgazF+2uRS1tMiL9dsj01hJGySEmPN28B/TjjvpVW0=";
export declare const TRANSACTION_TYPES: {
    PAY: string;
    KEYREG: string;
    ACFG: string;
    AXFER: string;
    AFRZ: string;
};
export declare const VALID_PAY_TRANSACTION: {
    txn: {
        amt: number;
        fee: number;
        fv: number;
        gen: string;
        gh: string;
        lv: number;
        note: string;
        rcv: string;
        snd: string;
        type: string;
    };
};
export declare const VALID_CLOSE_TRANSACTION: {
    txn: {
        close: string;
        fee: number;
        fv: number;
        gen: string;
        gh: string;
        lv: number;
        rcv: string;
        snd: string;
        type: string;
    };
};
export declare const REGISTER_KEY_ONLINE_TRANSACTION: {
    txn: {
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        selkey: string;
        snd: string;
        type: string;
        votefst: number;
        votekd: number;
        votekey: string;
        votelst: number;
    };
};
export declare const REGISTER_KEY_OFFLINE_TRANSACTION: {
    txn: {
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
    };
};
export declare const CREATE_ASSET_TRANSACTION: {
    txn: {
        apar: {
            am: string;
            an: string;
            au: string;
            c: string;
            dc: number;
            f: string;
            m: string;
            r: string;
            t: number;
            un: string;
        };
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
    };
};
export declare const CONFIGURE_ASSET_TRANSACTION: {
    txn: {
        apar: {
            c: string;
            f: string;
            m: string;
            r: string;
        };
        caid: number;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
    };
};
export declare const DESTROY_ASSET_TRANSACTION: {
    txn: {
        caid: number;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
    };
};
export declare const OPT_IN_ASSET_TRANSACTION: {
    txn: {
        arcv: string;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
        xaid: number;
    };
};
export declare const TRANSFER_ASSET_TRANSACTION: {
    txn: {
        aamt: number;
        arcv: string;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
        xaid: number;
    };
};
export declare const REVOKE_ASSET_TRANSACTION: {
    txn: {
        aamt: number;
        arcv: string;
        asnd: string;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
        xaid: number;
    };
};
export declare const FREEZE_ASSET_TRANSACTION: {
    txn: {
        afrz: boolean;
        fadd: string;
        faid: number;
        fee: number;
        fv: number;
        gh: string;
        lv: number;
        snd: string;
        type: string;
    };
};
