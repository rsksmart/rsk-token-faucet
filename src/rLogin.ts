import RLogin from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'

const rpcUrls = {
  31: 'https://public-node.testnet.rsk.co'
}

const supportedChains = Object.keys(rpcUrls).map(Number)

const rLogin = new RLogin({
  rpcUrls,
  supportedChains,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: rpcUrls,
        bridge: 'https://walletconnect-bridge.rifos.org/'
      }
    }
  }
})

export default rLogin
