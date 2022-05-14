import Link from "next/link";
import React from "react";
import LogoIcon from "../../assets/images/logo.svg";
import s from './Logo.module.scss'
import cn from "classnames";
import { LogoProps } from "./Logo.props";

export const Logo = ({color = 'white', className, ...props}:LogoProps) => {
	return (
      <div className={className} {...props}>
      <Link href='/'>
      <div className={s.logo}>
			<img className={s.logo__icon} src={LogoIcon.src} alt='Logo' />
			<span className={cn(s.logo__title, {
        [s.logo__title__white]: color == 'white',
        [s.logo__title__black]: color == 'black',
      })}>FullStats</span>
      </div>
      </Link>
      </div>
	);
};
