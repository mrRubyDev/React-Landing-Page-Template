import React from "react";
import Footer from "./Footer";
import { NavigationExternal } from "./NavigationExternal";

export default function Legal() {
	return (
		<div style={{ minHeight: "100vh" }}>
			<NavigationExternal />
			<div
				style={{
					minHeight: "90vh",
					zIndex: 100,
					marginTop: "1vh",
					padding: "10vh",
				}}
			>
				<h2>Aviso Legal</h2>
				<p>
					Este aviso legal regula la navegación y uso de la web
					www.basarigrupomedico.com (“Web”) y se aplicará sin perjuicio de
					aquellas otras eventuales condiciones particulares que el usuario
					acepte en las webs que lo integran.{" "}
				</p>
				<p>
					El responsable de la Web es Basari Grupo Médico SLP (la “Entidad”),
					con C.I.F. B66557208 y domicilio en Calle Turo Blau 11 de Barcelona.
					Puede contactar con nosotros mediante nuestra dirección electrónica
					itovar@primedica.org .{" "}
				</p>
				<p>
					El objetivo de esta información divulgativa es acercar a la sociedad
					el conocimiento del Grupo Médico Basari sobre temas relacionados con
					la salud de las personas.{" "}
				</p>
				<p>
					La utilización de la Web conforme a la Ley se someterá al presente
					Aviso Legal y a las condiciones particulares que le puedan ser de
					aplicación. En caso de incumplimiento por parte del usuario, la
					Entidad se reserva el ejercicio de las acciones legales oportunas, así
					como el derecho a restringir el acceso a la web. Todas las personas
					que aparecen en los vídeos o imagenes de esta Web han dado su
					consentimiento a la entidad, y al resto de entidades de su entorno,
					para difundir su imagen. El acceso a esta Web implica la adquisición
					de la condición de usuario y la aceptación de las condiciones de
					utilización que se detallan a continuación.{" "}
				</p>
				<p>
					El establecimiento de enlaces en ningún momento implicará relación,
					colaboración o apoyo alguno con la Entidad. En particular, no se
					permitirá la realización de un enlace que, de forma fraudulenta,
					induzca o establezca cualquier tipo de relación con la Entidad. Quedan
					prohibidos los enlaces desde páginas web difamatorias, pornográficas,
					racistas, xenófobas, o que ofrezcan información falsa sobre la Entidad
					o cualquiera de sus colaboradores.{" "}
				</p>
				<p>
					La Entidad revisa y actualiza la información contenida en esta Web
					periódicamente, pero no garantiza que la información sea veraz,
					actualizada y no errónea. En consecuencia, no se responsabiliza por
					los daños ocasionados por las decisiones tomadas en base a la
					información o contenidos de esta Web. El acceso a la Web es a cuenta y
					riesgo del usuario, siendo responsabilidad del mismo la utilización de
					los medios idóneos para evitar cualquier daño o virus. Igualmente, el
					usuario se compromete a evitar toda conducta que pueda dañar,
					inutilizar, deteriorar, sobrecargar o perjudicar, de cualquier forma,
					la Web y su utilización. Esta Web puede contener información básica
					relativa a diferentes aspectos de salud elaborada por profesionales y
					pacientes. Puede ofrecer en algún momento recomendaciones y guías
					genéricas para el tratamiemto de determinadas enfermedades, que en
					ningún caso se tiene que utilizar para realizar diagnósticos,
					tratamientos médicos o cualquier actuación médica por parte de
					profesionales sanitarios. El contenido de esta Web no sustituye la
					atención personalizada de los profesionales de la salud. La presente
					Web queda sometida a lo establecido por la legislación española. Los
					tribunales de Barcelona serán los competentes para conocer de
					cualquier conflicto que pueda nacer de la utilización de esta Web.
				</p>
			</div>
			<Footer />
		</div>
	);
}
