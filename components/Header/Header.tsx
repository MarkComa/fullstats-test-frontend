import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import s from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

export const Header = ({isAuth}:HeaderProps) => {
	return (
		<div className={s.header}>
			<div className={s.left}>
				<img className={s.logo} src={Logo.src} alt='Logo' />
				<span className={s.logo__title}>FullStats</span>
			</div>

			<div className={s.right}>
				{isAuth ? (
					<span></span>
				) : (
					<span className={s.link}>
						<Link href='/login'>Войти</Link>
					</span>
				)}
			</div>
		</div>
	);
};
