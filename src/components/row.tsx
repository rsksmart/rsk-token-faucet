import React, { useEffect, useState } from 'react'
import { Contract, Signer, BigNumber, BigNumberish } from 'ethers'
import { BigLink } from '@rsksmart/rif-material-ui'
import { Button, Typography } from '@mui/material'

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
      if (faucetBalance > 0) {
        setDisable(false)
      }
    })()
  })

  return (
    <div style = {{ backgroundColor: '#F3F3F3', margin: '10px', padding: '10px', borderRadius: '1em' }}>
      <div style = {{ }}>
        <img style={{ float: 'left', paddingTop: '10px' }} src = {baseDir + token.logo} width = "40px"></img>
        <h3 style={{ float: 'left', paddingLeft: '20px' }}>{token.symbol} </h3>
        <h3 style={{ float: 'left', paddingLeft: '20px' }}>{token.name} </h3>
        <h3 style={{ float: 'left', paddingLeft: '250px' }}>Your Balance: {balance && balanceToString(balance, token.decimals)}</h3>
      </div>
      <div style = {{ textAlign: 'right' }}>
        <h3 style={{ float: 'right' }}>Address: {add} </h3>
        <Button disabled={disable} onClick={() => faucet.dispense(add.toLowerCase(), address)}>Get Funds</Button>
      </div>
    </div>
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
