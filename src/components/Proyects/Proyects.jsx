import { Link } from "react-router-dom";
import style from "./Proyects.module.css";
const Proyects = () => {
	return (
		<div className={style.ProyectsPadre}>
			<div className={style.titulo}>
				<h1>Mis Proyectos</h1>
			</div>
			<div className={style.divProyectos}>
				<div className={style.divProyecto}>
					<div className={style.about}>
						<div className={style.tituloAbout}>
							<h1>Pokedex</h1>
						</div>
						<div className={style.descripcion}>
							<div className={style.texto}>
								<p>
									La página ofrece información detallada sobre cada Pokémon,
									permitiendo a los usuarios explorar y seleccionar diferentes
									Pokémon, así como ver los detalles y características de los
									mismos. ¡También tienen la posibilidad de crear su propio
									Pokémon!
								</p>
								<h4>Tecnologias utilizadas:</h4>
							</div>
							<div className={style.tecnologias}>
								<div className={style.tecnologiaImg}>
									<img
										src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728515839/nae0uu6ntq16g9gxv9hn.svg"
										alt="React"
									/>
								</div>
								<div className={style.tecnologiaImg}>
									<img
										src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728515778/flnbnhnuwy41tvosysu5.svg"
										alt="JavaScript"
									/>
								</div>
								<div className={style.tecnologiaImg}>
									<img
										src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728524929/eelvu00er9hnnfbcw3lq.svg"
										alt="Redux"
									/>
								</div>
								<div className={style.tecnologiaImg}>
									<img
										src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728524932/u8uftd4vyopj7c5ojvqe.svg"
										alt="Cloudinary"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={style.enlaces}>
						<Link to="https://pokedex-rodriguezsn.vercel.app/" target="_blank">
							<img
								className={style.imgEnlace}
								src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728513293/phrvdh28jzfwkzje7bgt.png"
								alt=""
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Proyects;
