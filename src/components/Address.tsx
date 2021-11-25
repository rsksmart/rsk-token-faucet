import React from 'react'
import { Typography, Link } from '@mui/material'
import { Launch } from '@mui/icons-material'

const Address: React.FC<{ address: string, small: boolean }> = ({ address, small }) => <Typography>Address: {small ? `${address.slice(0, 8)}...${address.slice(-6)}` : address} <Link href={`https://explorer.testnet.rsk.co/address/${address}`} target='_blank'><Launch /></Link></Typography>

export default Address
