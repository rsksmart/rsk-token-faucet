import React, { useEffect, useState } from 'react'
import { ethers, providers, Contract, Signer } from 'ethers'

const Row: React.FC<{ token: any, add: string, signer: Signer }> = ({ token, add, signer }) => {
  const baseDir =
  'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/'
  const contractAbi = [
    // Get the account balance
    'function balanceOf(address) view returns (uint)'
  ]
  const contract = new Contract(add.toLowerCase(), contractAbi, signer)
  const [balance, setBalance] = useState<any>(null)
  useEffect(() => {
    signer.getAddress().then(address => contract.balanceOf(address).then((b: any) => setBalance(b)))
  })
  return (
    <div>
      <img src = {baseDir + token.logo} width = "50px"></img>
      <h3>Nombre: {token.name} </h3>
      <h3>Symbol: {token.symbol} </h3>
      <h3>Address: {add} </h3>
      <h3>Balance: {balance && (balance / Math.pow(10, 18) + balance % Math.pow(10, 18)).toString()}</h3>
    </div>
  )
}

export default Row
