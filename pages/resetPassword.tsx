import { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/Button/Button';

const ResetPassword: NextPage = () => {
  const {register,handleSubmit, formState: {errors}} = useForm();
  const onSubmit = () => {}
  return (
    <div>
      <h2>Забыли свой пароль?</h2>
      <p>Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам ссылку для сброса пароля.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" />
        <Button type='submit' apparance={'primary'}>Востанновить пароль</Button>
        <Button apparance='transparent' onClick={() => history.back()} color='blue'>Назад</Button>
      </form>
    </div>
  )
}
export default ResetPassword
