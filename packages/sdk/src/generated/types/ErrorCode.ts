/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
/**
 * @category enums
 * @category generated
 */
export enum ErrorCode {
  BadArtithmetic,
  InvalidAuthority,
  InsufficientShares,
  SharesArentAtMax,
  NewMintAccountRequired,
  MintAccountRequired,
  InvalidMembershipModel,
  InvalidMembershipVoucher,
  MintDoesNotMatch,
  InvalidHoldingAccount,
  HoldingAccountMustBeAnATA,
  DerivedKeyInvalid,
  IncorrectOwner,
  WalletDoesNotOwnMembershipToken,
  InvalidMetadata,
  NumericalOverflow,
  InsufficientBalanceToDistribute,
  InvalidFanoutForMint,
  MustDistribute,
  InvalidStakeAta,
  CannotTransferToSelf,
  TransferNotSupported,
  RemoveNotSupported,
}

/**
 * @category userTypes
 * @category generated
 */
export const errorCodeBeet = beet.fixedScalarEnum(
  ErrorCode
) as beet.FixedSizeBeet<ErrorCode, ErrorCode>;
