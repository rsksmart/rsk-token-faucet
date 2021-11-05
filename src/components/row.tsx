import React from 'react'

const Row: React.FC<{ token: any, add: string }> = ({ token, add }) => {
  const baseDir =
  'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/'
  return (
    <div>
      <h3>Nombre: {token.name} </h3>
      <img src = {baseDir + token.logo} width = "50px"></img>
      <h3>Symbol: {token.symbol} </h3>
      <h3>Address: {add} </h3>
    </div>
  )
}

export default Row
