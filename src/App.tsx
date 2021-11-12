import React, { useState } from 'react'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import Row from './components/row'
import RLogin from '@rsksmart/rlogin'
import { ethers, providers, Contract } from 'ethers'

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
  const [faucet, setFaucet] = useState<null | Contract>(null)
  const handleLogin = async () => {
    const { provider } = await rLogin.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider).getSigner()
    const faucet = new Contract('0x11f2753e9a597473da2f51492f4fefac1c572640', [
      'function dispense(address token, address to)'
    ], web3Provider)
    setMM(web3Provider)
    setFaucet(faucet)
  }
  return (
    <div className="App">
      RSK Token Faucet
      {(mm && faucet) && addresses.map((address: any) => <Row key={address} token = {contractMap[address]} add = {address} signer = {mm} faucet={faucet} />)}
      <button onClick = {handleLogin} >Log In</button>
      {mm && mm.toString()}
    </div>
  )
}

export default App
