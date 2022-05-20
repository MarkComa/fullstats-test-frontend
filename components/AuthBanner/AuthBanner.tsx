import React from "react";
import { AuthBannerProps } from "./AuthBanner.props";
import s from "./AuthBanner.module.scss";
import cn from "classnames";
import { Logo } from "../Logo/Logo";
import Image from "next/image";

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
			{banner && <div className={s.banner}><Image priority width='364' height='273' src={banner} alt='banner' /></div>}
		</div>
	);
};
