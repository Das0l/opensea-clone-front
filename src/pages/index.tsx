import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Banner, Header } from '@/pages/components/index'

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
    </div>
  )
}