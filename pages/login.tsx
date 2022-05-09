import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import s from "../styles/Login.module.scss";
import Banner from "../assets/images/illustration_login.svg";
import Link from "next/link";
import { Button } from "../components/Button/Button";

const Login: NextPage = () => {
	const { register, handleSubmit, formState: {errors} } = useForm();
	const onSubmit = (data: any) => {
		console.log(data)
	};
	return (
		<div>
			<div>authBanner</div>
			<div>
				<header>
					<span>Нет учетной записи?</span>
					<Link href='/registration'>Зарегистрироваться</Link>
				</header>
				<h1>Войти</h1>
				<p>Введите свои данные ниже</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					{errors.email || errors.password && <span>Ошибка</span> }
					<input
						type='text'
						{...register("email", { required: true })}
					/>
					<input
						type='password'
						{...register("password", { required: true })}
					/>
					<div>
						<div>
							<input
								type='checkbox'
								{...register("rememberMe")}
							/>
							<label className={s.rememberMe}>
								Запомнить меня
							</label>
						</div>
						<Link href='/resetPassword'>Забыли пароль?</Link>
					</div>
					<Button type='submit' apparance={"primary"}>
						Войти
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
