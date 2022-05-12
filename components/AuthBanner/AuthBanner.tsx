import React from "react";
import { AuthBannerProps } from "./AuthBanner.props";
import s from "./AuthBanner.module.scss";
import Logo from "../../assets/images/logo.svg";

export const AuthBanner = ({
	banner,
	className,
	...props
}: AuthBannerProps) => {
	return (
		<div className={s.authBanner} {...props}>
			<div className={s.logo}>
				<img src={Logo.src} alt='logo' />
				<span className={s.title}>FullStats</span>
			</div>
			{banner && <img className={s.banner} src={banner} alt='banner' />}
		</div>
	);
};
