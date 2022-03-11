import type { Principal } from '@dfinity/principal';
export type AccountIdText = string;
export type CanisterId = Principal;
export interface EscrowStats {
  'nftNumber' : bigint,
  'endTime' : Time,
  'nftPriceE8S' : bigint,
  'openSubaccounts' : bigint,
  'nftsSold' : bigint,
}
export type ProjectId = bigint;
export type Time = bigint;
export interface definite_canister_settings {
  'freezing_threshold' : bigint,
  'controllers' : [] | [Array<Principal>],
  'memory_allocation' : bigint,
  'compute_allocation' : bigint,
}
export interface _SERVICE {
  'acceptCycles' : () => Promise<undefined>,
  'availableCycles' : () => Promise<bigint>,
  'cancelTransfer' : (arg_0: ProjectId, arg_1: AccountIdText) => Promise<
      undefined
    >,
  'confirmTransfer' : (arg_0: ProjectId, arg_1: AccountIdText) => Promise<
      undefined
    >,
  'createEscrowCanister' : (
      arg_0: ProjectId,
      arg_1: Principal,
      arg_2: bigint,
      arg_3: bigint,
      arg_4: Time,
    ) => Promise<undefined>,
  'getProjectEscrowCanisterPrincipal' : (arg_0: ProjectId) => Promise<
      [] | [CanisterId]
    >,
  'getProjectStats' : (arg_0: ProjectId) => Promise<EscrowStats>,
  'requestSubaccount' : (arg_0: ProjectId, arg_1: Principal) => Promise<
      AccountIdText
    >,
  'test' : () => Promise<definite_canister_settings>,
  'wallet_receive' : () => Promise<undefined>,
}