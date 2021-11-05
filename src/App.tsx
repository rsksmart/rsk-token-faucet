import React from 'react'
import logo from './logo.svg'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import Row from './components/row'

const baseDir =
  'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/'
const addresses = Object.keys(contractMap)
console.log(addresses)

function App () {
  return (
    <div className="App">
      RSK Token Faucet
      {addresses.map((address: any) => <Row key={address} token = {contractMap[address]} add = {address} />)}
    </div>
  )
}

export default App
