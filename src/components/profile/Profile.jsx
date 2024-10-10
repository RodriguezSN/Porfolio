import style from "./Profile.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";

// or via CommonJS
const Profile = () => {
	const handleCopy = () => {
		navigator.clipboard.writeText("sebas.rodriguez.is123@gmail.com");
		// alert("Correo copiado");
		Swal.fire({
			title: "Copiado!",
			text: "Correo copiado con exito",
			icon: "success",
			confirmButtonText: "Perfecto"
		});
	};
	return (
		<div className={style.divProfilePadre}>
			<div className={style.presentacion}>
				<div className={style.titulos}>
					<h3>Soy</h3>
					<h1>Sebastian Rodriguez</h1>
					<h1>Desarrollador Full-Stack</h1>
					<p>
						JavaScript | React | Redux | Express.Js | Node.Js | PostgreSQL |
						Sequelize
					</p>
				</div>
				<div className={style.enlaces}>
					<button>
						<a
							href="/Cv-Sebastian Rodriguez.pdf"
							dowload="CV-Rodriguez-Sebastian"
							target="_black"
							rel="noopener noreferrer"
						>
							CV
						</a>
					</button>

					<button>
						<Link
							to="https://www.linkedin.com/in/sebastian-nicolas-rodriguez-271b26202/"
							target="_black"
						>
							linkedin
						</Link>
					</button>
					<button>
						<Link to="https://github.com/RodriguezSN" target="_black">
							GitHub
						</Link>
					</button>
					<button onClick={handleCopy}>Correo</button>
				</div>
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
