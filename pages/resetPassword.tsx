import { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/Button/Button';
import s from '../styles/ResetPassword.module.scss'

const ResetPassword: NextPage = () => {
  const {register,handleSubmit, formState: {errors}} = useForm();
  const onSubmit = () => {}
  return (
    <div className={s.resetPassword}>
      <h2 className={s.title}>Забыли свой пароль?</h2>
      <p className={s.description}>Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам ссылку для сброса пароля.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input type="email" {...register('email', {required: true})} className={s.input} placeholder={'Email'}/>
        <Button className={s.btn} type='submit' apparance={'primary'}>Востанновить пароль</Button>
        <Button className={s.btn__back} apparance='transparent' onClick={() => history.back()} color='blue'>Назад</Button>
      </form>
    </div>
  )
}
export default ResetPassword
