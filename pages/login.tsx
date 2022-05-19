import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "../styles/Login.module.scss";
import banner from "../assets/images/illustration_login.svg";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { ErrorForm } from "../components/ErrorForm/ErrorForm";
import { AuthBanner } from "../components/AuthBanner/AuthBanner";
import { useLoginMutation } from "../store/auth/auth.api";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../store/auth/auth.types";
import { login } from "../store/reducers/authSlice";

const Login: NextPage = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginRequest>();
	const [apiLogin, { isLoading }] = useLoginMutation();
	const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
		try {
			const res = await apiLogin(data);
			dispatch(login(res.data));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={s.login}>
			<AuthBanner banner={banner.src} className={s.authBanner} />
			<section>
				<header className={s.header}>
					<span>Нет учетной записи?</span>
					<Link href='/registration'>Зарегистрироваться</Link>
				</header>
				<div className={s.hero}>
					<h2 className={s.title}>Войти</h2>
					<p>Введите свои данные ниже</p>
					<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
						{errors.email || errors.password ? (
							<span className={s.err}>
								<ErrorForm />
							</span>
						) : null}

						<input
							type='email'
							className={s.email}
							placeholder={"Email"}
							{...register("email", { required: true })}
						/>
						<input
							className={s.password}
							placeholder={"Пароль"}
							type='password'
							{...register("password", { required: true })}
						/>
						<div className={s.checkbox}>
							<input type='checkbox' />
							<label className={s.rememberMe}>
								Запомнить меня
							</label>
						</div>
						<div className={s.link}>
							<Link href='/resetPassword'>Забыли пароль?</Link>
						</div>
						<Button
							type='submit'
							className={s.btn}
							apparance={"primary"}>
							Войти
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Login;
