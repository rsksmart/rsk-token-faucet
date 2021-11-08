import React, { useState } from 'react'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import Row from './components/row'
import RLogin from '@rsksmart/rlogin'

const addresses = Object.keys(contractMap)
const rpcUrls = {
  31: 'https://public-node.testnet.rsk.co'
}
const supportedChains = Object.keys(rpcUrls).map(Number)

const rLogin = new RLogin({
  rpcUrls,
  supportedChains
})

function App () {
  const [mm, setMM] = useState<any>(null)
  const handleLogin = () => {
    rLogin.connect().then(({ provider }) => setMM(provider))
  }
  return (
    <div className="App">
      RSK Token Faucet
      {addresses.map((address: any) => <Row key={address} token = {contractMap[address]} add = {address} />)}
      <button onClick = {handleLogin} >Log In</button>
      {mm && mm.toString()}
    </div>

  )
}

export default App
