import About from "../about/About";
import Construccion from "../construccion/Construccion";
import Profile from "../profile/Profile";
import Proyects from "../Proyects/Proyects";
import style from "./Home.module.css";
const Home = () => {
	return (
		<div className={style.profileComponent}>
			<Profile />
			<About />
			<Proyects />
			<Construccion />
		</div>
	);
};

export default Home;
