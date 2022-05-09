import type { NextPage } from 'next'
import { Button } from '../components/Button/Button'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return <div>Home
    <Button apparance={'primary'} className={styles.btn}>Попробовать сейчас</Button>
  </div>
}

export default Home
