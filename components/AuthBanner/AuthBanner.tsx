import React from "react";
import { AuthBannerProps } from "./AuthBanner.props";
import s from "./AuthBanner.module.scss";
import cn from "classnames";
import { Logo } from "../Logo/Logo";

export const AuthBanner = ({
	banner,
	className,
	...props
}: AuthBannerProps) => {
	return (
		<div className={cn(s.authBanner, className)} {...props}>
			<div className={s.logo}>
				<Logo color='black'/>
			</div>
			{banner && <img className={s.banner} src={banner} alt='banner' />}
		</div>
	);
};
