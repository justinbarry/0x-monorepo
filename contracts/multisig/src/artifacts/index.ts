import { ContractArtifact } from 'ethereum-types';

import * as AssetProxyOwner from '../../generated-artifacts/AssetProxyOwner.json';
import * as MultiSigWallet from '../../generated-artifacts/MultiSigWallet.json';
import * as MultiSigWalletWithTimeLock from '../../generated-artifacts/MultiSigWalletWithTimeLock.json';
import * as TestAssetProxyOwner from '../../generated-artifacts/TestAssetProxyOwner.json';
import * as TestRejectEther from '../../generated-artifacts/TestRejectEther.json';

export const artifacts = {
    AssetProxyOwner: AssetProxyOwner as ContractArtifact,
    MultiSigWallet: MultiSigWallet as ContractArtifact,
    MultiSigWalletWithTimeLock: MultiSigWalletWithTimeLock as ContractArtifact,
    TestAssetProxyOwner: TestAssetProxyOwner as ContractArtifact,
    TestRejectEther: TestRejectEther as ContractArtifact,
};
