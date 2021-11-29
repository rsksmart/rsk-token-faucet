import React, { useState } from 'react'
import { ethers, Contract } from 'ethers'
import contractMap from '@rsksmart/rsk-testnet-contract-metadata'
import { RifThemeProvider, AddressField } from '@rsksmart/rif-material-ui'
import { Button, Typography, Grid, Checkbox } from '@mui/material'
import Resolver from '@rsksmart/rns-resolver.js'

import rLogin from './rLogin'
import Row from './components/row'
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

const rnsResolver = Resolver.forRskTestnet({})

function App () {
  const [userAddress, setUserAddress] = useState('')
  const [faucet, setFaucet] = useState<Contract>()

  const [dispenseTo, setDispenseTo] = useState('')
  const [activeDispenseTo, setActiveDispenseTo] = useState(true)

  const handleLogin = async () => {
    const { provider } = await rLogin.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider).getSigner()
    const address = await web3Provider.getAddress()
    const connectedFaucetContract = faucetContract.connect(web3Provider)

    setUserAddress(address)
    setFaucet(connectedFaucetContract)
  }

  console.log(activeDispenseTo)

  return (
    <RifThemeProvider>
      <div style={{ padding: '20px' }}>
        <Typography variant="h1" align='center'>RSK Token Faucet</Typography>
        <Typography variant="h4" color="white" align='center'>Get testing funds of your favorite tokens</Typography>
        <Address small={false} address={faucetAddress} center={true} color="white" prefix='Faucet ' />
        <Typography color="white" align='center'>You can donate tokes to the faucet</Typography>
        <div style={{ height: '90px' }}>{!userAddress
          ? <Button onClick={handleLogin} size='small' >Log In</Button>
          : <Typography variant="h4" color="white" align='center'>Your address: {userAddress}</Typography>
        }</div>
        <Grid container>
          <Grid item xs={9}>
            <AddressField id='addressField' label='Dispense to' onReceiverAddressChange={setDispenseTo} resolverFn={rnsResolver.addr.bind(rnsResolver)} regexValidation={/\.rsk$/} />
          </Grid>
          <Grid item xs={3} style={{ marginTop: '20px' }}>
            <Typography color='white' fontSize='20px' align='center'><Checkbox color='primary' size='medium' checked={activeDispenseTo} onChange={e => setActiveDispenseTo(e.target.checked)} />Send to your connected address</Typography>
          </Grid>
        </Grid>
        {erc20tokensKeys.map((tokenAddress: any) => <Row key={tokenAddress} tokenMeta={contractMap[tokenAddress]} tokenAddress={tokenAddress} faucet={faucet} dispenseTo={activeDispenseTo ? userAddress : dispenseTo.toLowerCase()} />)}
      </div>
    </RifThemeProvider>
  )
}

export default App
