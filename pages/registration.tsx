import { NextPage } from "next";
import Link from "next/link";
import banner from "../assets/images/artboard.svg";
import { useForm } from "react-hook-form";
import { AuthBanner } from "../components/AuthBanner/AuthBanner";
import { Button } from "../components/Button/Button";
import s from "../styles/Registration.module.scss";

const Registration: NextPage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = () => {};
	return (
		<div className={s.registration}>
			<AuthBanner banner={banner.src} />
			<div>
				<header className={s.header}>
					<span>Уже есть аккаунт?</span>
					<Link href='/login'>Войти</Link>
				</header>
				<div className={s.hero}>
					<h2 className={s.title}>Зарегистрироваться</h2>
					<p>Зарегистрируйтесь, чтобы пользоваться сервисом:</p>
					<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
						<input
							type='text'
							className={s.firstname}
							placeholder='Имя'
							{...register("firstname", { required: true })}
						/>
						<input
							type='text'
							className={s.surname}
							placeholder='Фамилия'
							{...register("surname", { required: true })}
						/>
						<input
							type='email'
							className={s.email}
							placeholder='Почта'
							{...register("email", { required: true })}
						/>
						<input
							type='password'
							className={s.password}
							placeholder='Пароль'
							{...register("password", { required: true })}
						/>
						<Button type='submit' apparance={"primary"} className={s.btn}>
							Зарегистрироваться
						</Button>
					</form>
					<span className={s.privacy}>
						{`Регистрируясь, я соглашаюсь с минимальными условиями
						обслуживания и `}	
						<Link href='#'>Политикой конфиденциальности.</Link>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Registration;
