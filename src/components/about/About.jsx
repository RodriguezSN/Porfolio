import { useState } from "react";
import style from "./About.module.css";
const About = () => {
	const [altura, setAltura] = useState("30vh");
	const [textButton, setTextButton] = useState("Seguir leyendo");
	const handleHeight = () => {
		altura === "30vh" ? setAltura("auto") : setAltura("30vh");
		textButton === "Seguir leyendo"
			? setTextButton("Dejar de leer")
			: setTextButton("Seguir leyendo");
	};
	return (
		<div className={style.about}>
			<div className={style.titulo}>
				<div className="loader"></div>
				<h1>Sobre mi</h1>
			</div>
			<div className={style.parrafos} style={{ height: altura }}>
				<p>
					¡Hola a todos! ^0^ Soy Sebastián, tengo 23 años y vivo en el barrio de
					Moreno, en la provincia de Buenos Aires, Argentina. Atiendo un PetShop
					en mi casa, lo cual me permite tener la comodidad de enfocarme más
					tiempo en mi carrera como Desarrollador Full Stack.
				</p>
				<p>Me gustaría contarles mi historia:</p>
				<p>
					A mediados del primer año de la secundaria, cuando tenía 12 años, me
					mudé a un pueblo. Fue un nuevo ritmo de vida y nuevos compañeros;
					costó adaptarse, pero lo logré. Estudié informática hasta quinto año
					en una "escuela técnica". Ahí creció mi pasión y amor por la
					tecnología y la programación. Sin embargo, a principios de 2018,
					cuando tenía 17 años, tuve que volver a mudarme a mi antiguo barrio.
					Volví a una escuela normal y me terminé graduando con un título en
					"economía", que no era algo que me apasionaba.
				</p>
				<p>
					Al terminar la escuela en 2018, tenía la idea de estudiar informática
					en la universidad, pero también tenía el deseo de trabajar y tener mis
					propios ingresos. Un conocido me aconsejó que hiciera ciertos cursos
					cortos y luego le diera mi CV para empezar a trabajar en cierto lugar.
					Así que en 2019 hice dos cursos: uno como gasista y otro de
					computación (ya tenía el conocimiento, pero me faltaba el
					certificado). Al entregar mi CV a comienzos de 2020, empezó la
					pandemia y el lugar donde me ofrecieron trabajar cerró. Por lo tanto,
					perdí un año de mi vida, y la pandemia limitaba mucho las
					oportunidades. Sentía que mi tiempo para estudiar una carrera ya había
					pasado y solo me quedaba trabajar en lo que consiguiera. Así fue como,
					en marzo de 2020, un amigo me invitó a trabajar con él.
				</p>
				<p>
					Mi primera experiencia como empleado distribuyendo alimentos a las
					escuelas durante la pandemia de 2020 me enseñó a ser adaptable, ya que
					el trabajo no siempre se daba como uno espera. También aprendí a
					analizar problemas en diversas situaciones que se presentaban, lo que
					me permitió facilitar el trabajo de mis compañeros. Siempre me gustó
					cooperar y ayudar en todo lo posible. Gracias al pensamiento creativo
					que fui desarrollando y a mi responsabilidad, mi jefe me asignó la
					tarea de ayudar en la organización del reparto y estar a cargo de un
					grupo de 10 personas. Luego, mi jefe me recomendó a uno de nuestros
					mayores proveedores, lo que me permitió conseguir mi siguiente
					trabajo.
				</p>
				<p>
					En este nuevo trabajo, donde repartía diversos alimentos y productos,
					estuve como chofer y también a cargo del manejo de stock y cuentas.
					Continué desarrollando mis habilidades para analizar problemas y
					buscar la mejor solución para facilitar el trabajo. Siempre mantuve
					una mente abierta para recibir consejos de un compañero con muchos más
					años de experiencia. Aprendí a desenvolverme en manejo de crisis, ya
					que mis jefes solían discutir entre sí, y mi jefa se desquitaba con
					nosotros, gritándonos o asignándonos diferentes tareas cada minuto. A
					pesar de esto, siempre mantuve una actitud positiva y hacía lo mejor
					posible. Gracias a mi buena actitud y responsabilidad, al momento de
					renunciar después de casi dos años, mi jefe me ofreció trabajar menos
					horas o menos días y un mejor salario con el tiempo, con la idea de
					que me quedara. Sin embargo, gracias al apoyo de mi familia y de mi
					pareja, estaba decidido a estudiar y sumergirme en el maravilloso
					mundo de la programación, que desde joven siempre me fascinó.
				</p>
				<p>
					Estoy contento, ya que en ambos trabajos dejé las puertas abiertas
					para regresar, y me llevo buenos recuerdos y una gran experiencia para
					mi vida.
				</p>
				<button className={style.buttonParrafos} onClick={handleHeight}>
					{textButton}
				</button>
			</div>
		</div>
	);
};

export default About;
