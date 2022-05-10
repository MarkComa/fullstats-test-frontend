import React from "react";
import s from './ErrorForm.module.scss'
import ShapeIcon from "../../assets/images/shape.svg";

export const ErrorForm = () => {
	return (
		<div className={s.errorForm}>
			<img className={s.img} src={ShapeIcon.src} alt="icon"/>
			<span>Используй email : demo@minimals.ru / пароль : demo1234</span>
		</div>
	);
};
