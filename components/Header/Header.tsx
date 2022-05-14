import Link from "next/link";
import React from "react";
import { Logo } from "../Logo/Logo";
import s from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

export const Header = ({isAuth}:HeaderProps) => {
	return (
		<div className={s.header}>
			<div>
				<Logo />
			</div>

			<div>
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
