import style from "./Construccion.module.css";

const Construccion = () => {
	return (
		<div className={style.divPadre}>
			<div className={style.divContenedorUno}>
				<img
					src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728431170/fgl2v0cpfdigsjrkrzis.jpg"
					alt=""
					width="300vw"
					className={style.imgPrimaria}
				/>
			</div>
			<div className={style.divContenedorDos}>
				<h1>Porfolio en desarrollo..</h1>
			</div>
			<div className={style.divContenedorTres}>
				<img
					src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1728431169/k0rmkx0jmfepkwfmoawi.jpg"
					alt=""
					width="300vw"
					className={style.imgSecundaria}
				/>
			</div>
		</div>
	);
};

export default Construccion;
