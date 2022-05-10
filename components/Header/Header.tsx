import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { Button } from '../Button/Button'

export const Header = () => {
  const isAuth = false // 
  return (
    <div>
      <img src={Logo.src} alt="Logo" />
      <div>
        {isAuth ? <span></span> : <Button children={'Войти'} apparance='transparent' color='white' />}
      </div>
    </div>
  )
}
