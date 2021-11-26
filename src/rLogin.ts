import RLogin from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Portis from '@portis/web3'
import Torus from '@toruslabs/torus-embed'
import { ledgerProviderOptions } from '@rsksmart/rlogin-ledger-provider'
import { dcentProviderOptions } from '@rsksmart/rlogin-dcent-provider'

const rpcUrls = {
  31: 'https://public-node.testnet.rsk.co'
}

const supportedChains = Object.keys(rpcUrls).map(Number)

const rLogin = new RLogin({
  rpcUrls,
  supportedChains,
  cacheProvider: false,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: rpcUrls,
        bridge: 'https://walletconnect-bridge.rifos.org/'
      }
    },
    portis: {
      package: Portis,
      options: {
        id: 'a1c8672b-7b1c-476b-b3d0-41c27d575920',
        network: {
          nodeUrl: 'https://public-node.testnet.rsk.co',
          chainId: 31
        }
      }
    },
    torus: {
      package: Torus
    },
    'custom-ledger': ledgerProviderOptions,
    'custom-dcent': dcentProviderOptions
  }
})

export default rLogin
