declare module 'algosdk/src/encoding/address' {
  /**
   * isValidAddress takes an Algorand address and checks if valid.
   * @param address Algorand address
   * @returns {boolean}n true if valid, false otherwise
   */
  export function isValidAddress(address: any): boolean;
  export function decode(
    address: any
  ): {
    publicKey: Uint8Array;
    checksum: Uint8Array;
  };
  export function encode(address: any): any;
  /**
   * fromMultisigPreImg takes multisig parameters and returns a 32 byte typed array public key,
   * representing an address that identifies the "exact group, version, and public keys" that are required for signing.
   * Hash("MultisigAddr" || version uint8 || threshold uint8 || PK1 || PK2 || ...)
   * Encoding this output yields a human readable address.
   * @param version multisig version
   * @param threshold multisig threshold
   * @param pks array of typed array public keys
   */
  export function fromMultisigPreImg({
    version,
    threshold,
    pks
  }: {
    version: any;
    threshold: any;
    pks: any;
  }): any;
  /**
   * fromMultisigPreImgAddrs takes multisig parameters and returns a human readable Algorand address.
   * This is equivalent to fromMultisigPreImg, but interfaces with encoded addresses.
   * @param version multisig version
   * @param threshold multisig threshold
   * @param addrs array of encoded addresses
   */
  export function fromMultisigPreImgAddrs({
    version,
    threshold,
    addrs
  }: {
    version: any;
    threshold: any;
    addrs: any;
  }): any;
  export const MALFORMED_ADDRESS_ERROR: Error;
  export const INVALID_MSIG_VERSION: Error;
  export const INVALID_MSIG_THRESHOLD: Error;
  export const INVALID_MSIG_PK: Error;
  export const UNEXPECTED_PK_LEN: Error;
}
