import { Link } from "react-router-dom";
import style from "./Proyects.module.css";
const Proyects = () => {
	return (
		<div className={style.ProyectsPadre}>
			<div className={style.titulo}>
				<h1>Mis Proyectos</h1>
			</div>
			<div className={style.divProyectos}>
				{/* <button className={style.buttonProyecto}> */}
				<div className={style.divProyecto}>
					<Link to="https://pokedex-rodriguezsn.vercel.app/" target="_blank">
						<img
							src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728513293/phrvdh28jzfwkzje7bgt.png"
							alt=""
						/>
					</Link>
				</div>
				{/* </button> */}
			</div>
		</div>
	);
};

export default Proyects;
