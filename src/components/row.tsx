import React, { useEffect, useState } from 'react'
import { Contract, Signer, BigNumber, BigNumberish } from 'ethers'
import { Button, Grid, Typography, Card } from '@mui/material'
import Address from './Address'

const Row: React.FC<{ token: any, add: string, signer: Signer, faucet: Contract }> = ({ token, add, signer, faucet }) => {
  const baseDir =
  'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/'
  const contractAbi = [
    // Get the account balance
    'function balanceOf(address) view returns (uint)'
  ]
  const contract = new Contract(add.toLowerCase(), contractAbi, signer)
  const [balance, setBalance] = useState<any>(null)
  const [address, setAddress] = useState('')
  const [faucetBalance, setFaucetBalance] = useState<any>(null)
  const [disable, setDisable] = useState(true)
  useEffect(() => {
    (async () => {
      const a = await signer.getAddress()
      const b = await contract.balanceOf(a)

      const faucetB = await contract.balanceOf(faucet.address)

      setBalance(b)
      setAddress(a)
      setFaucetBalance(faucetB)

      console.log(token.symbol, b)
      if (faucetB.gte(BigNumber.from('10').mul(BigNumber.from('10').pow(token.decimals)))) {
        setDisable(false)
      }
    })()
  }, [])

  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <Grid container>
        <Grid item xs={3}>
          <Typography><img src = {baseDir + token.logo} width="30px" /><span style={{ marginBottom: '10px' }}>{token.symbol} ({token.name})</span></Typography>
          <Address address={add} small={true} />
        </Grid>
        <Grid item xs={6}>
          <Typography align='center'>Your Balance: {balance && balanceToString(balance, token.decimals)}</Typography>
          <Typography align='center'>Faucet Balance: {faucetBalance && balanceToString(faucetBalance, token.decimals)}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button size='small' disabled={disable} onClick={() => faucet.dispense(add.toLowerCase(), address)}>Get Funds</Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export const balanceToString = (balance: BigNumber, decimals: BigNumberish) => {
  const parts = {
    div: balance.div(BigNumber.from('10').pow(decimals)),
    mod: balance.mod(BigNumber.from('10').pow(decimals))
  }
  if (parts.mod.isZero()) return parts.div.toString()
  return `${parts.div.toString()}.${parts.mod.toString().slice(0, 4)}...`
}

export default Row
