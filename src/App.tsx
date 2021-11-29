import React, { useState } from 'react'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import Row from './components/row'
import rLogin from './rLogin'
import { ethers, Contract } from 'ethers'
import { RifThemeProvider } from '@rsksmart/rif-material-ui'
import { Button, Typography } from '@mui/material'
import Address from './components/Address'

const contractMapEntries = Object.entries(contractMap)
const erc20tokensKeys = contractMapEntries.reduce<any>((prev, curr) => {
  if (curr[1].erc20) return [...prev, curr[0]]
  else return prev
}, [])

const faucetAddress = '0xea184604347fd5cede89217e1ab1eed322c8c98b'
const faucetContract = new Contract(faucetAddress, [
  'function dispense(address token, address to)'
])

function App () {
  const [userAddress, setUserAddress] = useState('')
  const [faucet, setFaucet] = useState<Contract>()

  const handleLogin = async () => {
    const { provider } = await rLogin.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider).getSigner()
    const address = await web3Provider.getAddress()
    const connectedFaucetContract = faucetContract.connect(web3Provider)

    setUserAddress(address)
    setFaucet(connectedFaucetContract)
  }

  return (
    <RifThemeProvider>
      <div style={{ padding: '20px' }}>
        <Typography variant="h1" align='center'>RSK Token Faucet</Typography>
        <Typography variant="h4" color="white" align='center'>Get testing funds of your favorite tokens</Typography>
        <Address small={false} address={faucetAddress} center={true} color="white"/>
        <Typography color="white" align='center'>You can donate tokes to the faucet</Typography>
        {!userAddress ? <Button onClick = {handleLogin} >Log In</Button> : <Typography color="white" align='center'>Your address: {userAddress}</Typography>}
        {faucet && erc20tokensKeys.map((tokenAddress: any) => <Row key={tokenAddress} tokenMeta={contractMap[tokenAddress]} tokenAddress={tokenAddress} faucet={faucet} />)}
      </div>
    </RifThemeProvider>
  )
}

export default App
