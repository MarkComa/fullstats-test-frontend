import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import s from "../styles/Login.module.scss";
import banner from "../assets/images/illustration_login.svg";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { ErrorForm } from "../components/ErrorForm/ErrorForm";
import { AuthBanner } from "../components/AuthBanner/AuthBanner";

const Login: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<div className={s.login}>
			<AuthBanner banner={banner.src} />
			<div>
				<header className={s.header}>
					<span>Нет учетной записи?</span>
					<Link href='/registration'>Зарегистрироваться</Link>
				</header>
				<div className={s.hero}>
				<h2 className={s.title}>Войти</h2>
				<p>Введите свои данные ниже</p>
				<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
					
						{errors.email || errors.password ? <span className={s.err}> <ErrorForm /> </span>: null}
					
					<input
						type='email'
						className={s.email}
						placeholder={'Email'}
						{...register("email", { required: true })}
					/>
					<input
						className={s.password}
						placeholder={'Пароль'}
						type='password'
						{...register("password", { required: true })}
					/>
						<div className={s.checkbox}>
							<input
								type='checkbox'
								{...register("rememberMe")}
							/>
							<label className={s.rememberMe}>
								Запомнить меня
							</label>
						</div>
						<div className={s.link}>
						<Link href='/resetPassword' >
							Забыли пароль?
						</Link>
						</div>
					<Button type='submit' className={s.btn} apparance={"primary"}>
						Войти
					</Button>
				</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
