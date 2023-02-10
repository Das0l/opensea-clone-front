import { createContext, PropsWithChildren, useCallback, useState } from 'react'
import { BrowserProvider, JsonRpcProvider } from 'ethers'
import Axios from 'axios'

declare const window: any

interface IWalletContext {
  provider: BrowserProvider | JsonRpcProvider | null,
  account: string,
  signIn: () => void
}

const axios = Axios.create({
  baseURL: 'http://localhost:8082'
})

const jsonRpcUrl = 'https://rpc.builder0x69.io'

export const WalletContext = createContext<IWalletContext>({
  provider: null,
  account: '',
  signIn: () => {}
})

export const WalletContextProvider = ({ children }: PropsWithChildren) => {
  const [provider, setProvider] = useState<BrowserProvider | JsonRpcProvider>(
    new JsonRpcProvider(jsonRpcUrl)
  )
  const [account, setAccount] = useState('')
  const signIn = useCallback(async () => {
    const eth = window.ethereum
    
    if (!eth) {
      console.log('Not installed Metamask. using read-only defaults.')
      return
    }
    setProvider(new BrowserProvider(eth))
    await eth
      .request({
        method: 'eth_requestAccounts'
      })
      .then(([account]: string[]) => {
        setAccount(account)
      })
    const signer = await provider.getSigner()
    const signed = await signer.signMessage('xxxx')
    
    console.log(signed);

    //await axios.get(`/auth/${account}`)
  }, [])

  return (
    <WalletContext.Provider
      value={{ provider, account, signIn }} >
      { children }
    </WalletContext.Provider>
  )
}