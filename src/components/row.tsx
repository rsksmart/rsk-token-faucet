import React, { useEffect, useState } from 'react'
import { Contract, BigNumber, BigNumberish } from 'ethers'
import { Button, Grid, Typography, Card } from '@mui/material'
import { ITokenMetadata } from '@rsksmart/rsk-testnet-contract-metadata'
import Address from './Address'

const baseDir = 'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/'
const contractAbi = [
  // Get the account balance
  'function balanceOf(address) view returns (uint)'
]

export const balanceToString = (balance: BigNumber, decimals: BigNumberish) => {
  const parts = {
    div: balance.div(BigNumber.from('10').pow(decimals)),
    mod: balance.mod(BigNumber.from('10').pow(decimals))
  }
  if (parts.mod.isZero()) return parts.div.toString()
  return `${parts.div.toString()}.${parts.mod.toString().slice(0, 4)}...`
}

const Row: React.FC<{ tokenMeta: ITokenMetadata[string], tokenAddress: string, faucet: Contract }> = ({ tokenMeta, tokenAddress, faucet }) => {
  const [userAddress, setUserAddress] = useState('')
  const [userBalance, setUserBalance] = useState<any>(null)
  const [faucetBalance, setFaucetBalance] = useState<any>(null)
  const [disable, setDisable] = useState(true)

  const tokenContract = new Contract(tokenAddress.toLowerCase(), contractAbi, faucet.signer)

  useEffect(() => {
    (async () => {
      const userAddress = await faucet.signer.getAddress()
      const userBalance = await tokenContract.balanceOf(userAddress)
      const faucetBalance = await tokenContract.balanceOf(faucet.address)

      setUserAddress(userAddress)
      setUserBalance(userBalance)
      setFaucetBalance(faucetBalance)

      if (faucetBalance.gte(BigNumber.from('10').mul(BigNumber.from('10').pow(tokenMeta.decimals)))) {
        setDisable(false)
      }
    })()
  }, [])

  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <Grid container>
        <Grid item xs={3}>
          <Typography><img src = {baseDir + tokenMeta.logo} width="30px" /><span style={{ marginBottom: '10px' }}>{tokenMeta.symbol} ({tokenMeta.name})</span></Typography>
          <Address address={tokenAddress} small={true} center={false}/>
        </Grid>
        <Grid item xs={6}>
          <Typography align='center'>Your Balance: {userBalance && balanceToString(userBalance, tokenMeta.decimals)}</Typography>
          <Typography align='center'>Faucet Balance: {faucetBalance && balanceToString(faucetBalance, tokenMeta.decimals)}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button size='small' disabled={disable} onClick={() => faucet.dispense(tokenAddress.toLowerCase(), userAddress)}>Get Funds</Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Row
