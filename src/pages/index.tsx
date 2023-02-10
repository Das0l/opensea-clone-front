import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Banner, Header } from '@/pages/components/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className} >
      <Header />
      <Banner />
    </div>
  )
}
