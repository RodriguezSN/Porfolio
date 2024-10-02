import style from "./Profile.module.css";
const Profile = () => {
	return (
		<div className={style.divProfilePadre}>
			<div className={style.presentacion}>
				<h3>Soy</h3>
				<h1>Sebastian Rodriguez</h1>
				<h1>Desarrollador Full-Stack</h1>
			</div>
			<div className={style.imagen}>
				<img
					src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1727895642/xiefok4vgfve1q2479xh.jpg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Profile;
