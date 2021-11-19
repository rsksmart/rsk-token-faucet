import React, { useEffect, useState } from 'react'
import { Contract, Signer, BigNumber, BigNumberish } from 'ethers'

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
    <div>
      <img src = {baseDir + token.logo} width = "50px"></img>
      <h3>Nombre: {token.name} </h3>
      <h3>Symbol: {token.symbol} </h3>
      <h3>Address: {add} </h3>
      <h3>Balance: {balance && balanceToString(balance, token.decimals)}</h3>
      <button disabled={disable} onClick={() => faucet.dispense(add.toLowerCase(), address)}>Dispense</button>
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
