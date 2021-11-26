import React, { useState } from 'react'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import Row from './components/row'
import rLogin from './rLogin'
import { ethers, Contract } from 'ethers'
import { RifThemeProvider } from '@rsksmart/rif-material-ui'
import { Button, Typography } from '@mui/material'

const addresses = Object.keys(contractMap)

const faucetAddress = '0x11f2753e9a597473da2f51492f4fefac1c572640'

function App () {
  const [mm, setMM] = useState<any>(null)
  const [faucet, setFaucet] = useState<null | Contract>(null)
  const handleLogin = async () => {
    const { provider } = await rLogin.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider).getSigner()
    const faucet = new Contract(faucetAddress, [
      'function dispense(address token, address to)'
    ], web3Provider)
    setMM(web3Provider)
    setFaucet(faucet)
  }
  return (
    <RifThemeProvider>
      <div style={{ padding: '20px' }}>
        <Typography variant="h1" align='center'>RSK Token Faucet</Typography>
        {(mm && faucet) && addresses.map((address: any) => <Row key={address} token = {contractMap[address]} add = {address} signer = {mm} faucet={faucet} />)}
        <Button onClick = {handleLogin} >Log In</Button>
        {mm && mm.toString()}
      </div>
    </RifThemeProvider>
  )
}

export default App
