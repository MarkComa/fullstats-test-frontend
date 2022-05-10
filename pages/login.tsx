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
				<header>
					<span>Нет учетной записи?</span>
					<Link href='/registration'>Зарегистрироваться</Link>
				</header>
				<h1>Войти</h1>
				<p>Введите свои данные ниже</p>
				<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
					<span className={s.err}>
						{errors.email || errors.password ? <ErrorForm /> : null}
					</span>
					<input
						type='email'
						className={s.email}
						{...register("email", { required: true })}
					/>
					<input
						className={s.password}
						type='password'
						{...register("password", { required: true })}
					/>
					<div>
						<div className={s.checkbox}>
							<input
								type='checkbox'
								{...register("rememberMe")}
							/>
							<label className={s.rememberMe}>
								Запомнить меня
							</label>
						</div>
						<Link href='/resetPassword' className={s.link}>
							Забыли пароль?
						</Link>
					</div>
					<Button type='submit' className={s.btn} apparance={"primary"}>
						Войти
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
