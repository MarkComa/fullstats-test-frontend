import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/Button/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <div>Home
    <Button apparance={'primary'} className={styles.btn}>Попробовать сейчас</Button>
  </div>
}

export default Home
