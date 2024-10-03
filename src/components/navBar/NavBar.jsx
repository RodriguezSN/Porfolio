import style from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={style.navBarPadre}>
			{/* <button>inicio</button>
			<button>Sobre mi</button>
			<button>Proyectos</button>
			<button>Tech Kill</button>
			<button>Contacto</button> */}
			<div className={style.icono}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="3em"
					height="3em"
					viewBox="0 0 32 32"
				>
					<path
						fill="none"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"
					/>
				</svg>
			</div>
			<div className={style.buttons}>
				<button>
					<h1>inicio</h1>
				</button>
				<button>
					<h1>Sobre mi</h1>
				</button>
				<button>
					<h1>Proyectos</h1>
				</button>
				<button>
					<h1>Tech Kill</h1>
				</button>
				<button>
					<h1>Contacto</h1>
				</button>
			</div>
		</div>
	);
};

export default NavBar;
