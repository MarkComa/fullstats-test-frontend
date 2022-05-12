import type { NextPage } from "next";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import s from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const isAuth = false // получаем с BLL
	return (
		<div className={s.home}>
			<Header isAuth={isAuth}/>
			<div className={s.hero}>
				<h1 className={s.title}>
					Start a <br />
					new project
					<br />
					with <span>FullStats</span>
				</h1>
				<p className={s.description}>
					Платформа для аналитики поможет вам в выборе товара или
					ниши, анализи конкурентов, &nbsp;увеличении продаж и в
					ускорении оборачиваемости вашего товара
				</p>
				<Button apparance={"primary"} className={s.btn}>
					{isAuth ? 'Перейти к сервису' : 'Попробовать сейчас'}
				</Button>
			</div>
		</div>
	);
};

export default Home;
