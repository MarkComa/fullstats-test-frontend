import type { NextPage } from 'next'
import { Button } from '../components/Button/Button'
import { Header } from '../components/Header/Header'
import s from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return <div className={s.home}>
    <Header/>
    <div className={s.hero}>
      <h1 className={s.title}>Start a <br/>
      new project<br/>with <span>FullStats</span></h1>
      <p className={s.description}>Платформа для аналитики поможет вам в выборе товара или ниши, анализи конкурентов, &nbsp;увеличении продаж и в ускорении оборачиваемости вашего товара</p>
    
      
    </div>
    <Button apparance={'primary'} className={s.btn}>Попробовать сейчас</Button>
  </div>
}

export default Home
