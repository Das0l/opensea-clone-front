import React, { useContext } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Autocomplete, TextField } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet'
import { WalletContext } from '@/pages/contexts/WalletContext'

const HeaderView = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items : center;
`

const SearchView = styled.div`
  flex: 1;
  margin-left: 64px;
`

const MenuView = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 64px;
`

const Menu = styled.div`
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 6px; 8px;
`

const IconView = styled.div`
  margin-left: 12px;
`

export const Header = () => { 
  const { signIn } = useContext(WalletContext)
  return (
    <HeaderView>
      <Image src='opensea-logo-blue.svg' width={40} height={40} alt={''} />
      <Title>OpenSea</Title>
      <SearchView>
        <Autocomplete
          renderInput={params => (
            <TextField {...params} label='Search items, collections, and accounts.' />
          )}
          options={[]} />
      </SearchView>
      <MenuView>
        <Menu>Explore</Menu>
        <Menu>Create</Menu>
      </MenuView>
      <IconView onClick={ signIn }>
        <WalletIcon />
      </IconView>
    </HeaderView>
  )
}