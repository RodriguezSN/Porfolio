import About from "../about/About";
import Profile from "../profile/Profile";
import Proyects from "../Proyects/Proyects";
import style from "./Home.module.css";
const Home = () => {
	return (
		<div className={style.profileComponent}>
			<Profile />
			<About />
			<Proyects />
		</div>
	);
};

export default Home;
