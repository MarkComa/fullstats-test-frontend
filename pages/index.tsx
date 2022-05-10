import type { NextPage } from 'next'
import { Button } from '../components/Button/Button'
import { Header } from '../components/Header/Header'
import s from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return <div className={s.home}>
    <Header/>
    <Button apparance={'primary'} className={s.btn}>Попробовать сейчас</Button>
  </div>
}

export default Home
