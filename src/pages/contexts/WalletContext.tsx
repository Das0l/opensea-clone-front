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
  signIn: () => { }
})

export const WalletContextProvider = ({ children }: PropsWithChildren) => {
  const [provider, setProvider] = useState<BrowserProvider | JsonRpcProvider>(
    new JsonRpcProvider(jsonRpcUrl)
  )
  const [account, setAccount] = useState('')
  const signIn = useCallback(async () => {
    const installed: boolean = window?.ethereum ?? false

    if (installed) {
      setProvider(new BrowserProvider(window.ethereum))
    } else {
      console.log('Not installed Metamask. using read-only defaults.')
    }
    await window.ethereum
      .request({
        method: 'eth_requestAccounts'
      })
      .then(([account]: string[]) => {
        setAccount(account)        
      })

    console.log(account)

    //await axios.get(`/auth/${account}`)
    //(await provider.getSigner()).signMessage('')
  }, [])

  return (
    <WalletContext.Provider
      value={{ provider, account, signIn }}>
      {children}
    </WalletContext.Provider>
  )
}