import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button/Button";
import s from "../styles/Registration.module.scss";

const Registration: NextPage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = () => {};
	return (
		<div>
			<div>
				<div>authBanner</div>
				<div>
					<header>
						<span>Уже есть аккаунт?</span>
						<Link href='/login'>Войти</Link>
					</header>
					<h1>Зарегистрироваться</h1>
					<p>Зарегистрируйтесь, чтобы пользоваться сервисом:</p>
					<form onSubmit={handleSubmit(onSubmit)}>
					<input
							type='text'
							{...register("firstname", { required: true })}
						/>
						<input
							type='text'
							{...register("surname", { required: true })}
						/>
						<input
							type='text'
							{...register("email", { required: true })}
						/>
						<input
							type='password'
							{...register("password", { required: true })}
						/>
						<Button type='submit' apparance={"primary"}>
							Зарегистрироваться
						</Button>
					</form>
					<span>Регистрируясь, я соглашаюсь с минимальными условиями обслуживания и <Link href='#'>Политикой конфиденциальности.</Link></span>
				</div>
			</div>
		</div>
	);
};
export default Registration;