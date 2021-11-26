import RLogin from '@rsksmart/rlogin'

const rpcUrls = {
  31: 'https://public-node.testnet.rsk.co'
}

const supportedChains = Object.keys(rpcUrls).map(Number)

const rLogin = new RLogin({
  rpcUrls,
  supportedChains
})

export default rLogin
