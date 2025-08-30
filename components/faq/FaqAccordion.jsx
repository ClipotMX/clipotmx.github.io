import Image from "next/image";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
function FaqAccordion() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<span className="aximo-title-animation">
							Nuestras Preguntas Frecuentes

							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
						ayuda a clientes a conocenor mejor.
					</h2>
				</div>

				<FadeInUp className="accordion aximo-accordion-wrap" id="aximo-accordion">
	<div className="accordion-item">
		<h3 className="accordion-header">
			<button
				className="accordion-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseOne"
			>
				¿Qué servicios ofrece su agencia de diseño?
			</button>
		</h3>
		<div
			id="collapseOne"
			className="accordion-collapse collapse show"
			data-bs-parent="#aximo-accordion"
		>
			<div className="accordion-body">
				Los clientes a menudo buscan entender la gama de servicios de diseño que una agencia 
				proporciona, como diseño gráfico, diseño web, branding y más. Ofrecemos una amplia 
				gama de servicios de diseño, incluyendo diseño gráfico, diseño web, branding, diseño 
				UI/UX y más.
			</div>
		</div>
	</div>
	<div className="accordion-item">
		<h3 className="accordion-header" id="headingOne">
			<button
				className="accordion-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseTwo"
			>
				¿Con qué industrias o tipos de clientes trabajan habitualmente?
			</button>
		</h3>
		<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
			<div className="accordion-body">
				Esta pregunta ayuda a los clientes potenciales a determinar si la agencia tiene 
				experiencia en su industria específica o con proyectos similares. Nuestra agencia 
				se destaca debido a nuestra experiencia creativa, atención al detalle y compromiso 
				con entregar diseños que no solo se ven geniales.
			</div>
		</div>
	</div>
	<div className="accordion-item">
		<h3 className="accordion-header">
			<button
				className="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseThree"
			>
				¿Pueden proporcionar ejemplos de su trabajo anterior/portafolio?
			</button>
		</h3>
		<div
			id="collapseThree"
			className="accordion-collapse collapse"
			data-bs-parent="#aximo-accordion"
		>
			<div className="accordion-body">
				Sí, estamos orgullosos de mostrar un portafolio de nuestros proyectos anteriores. 
				Puedes encontrar ejemplos de nuestro trabajo en nuestro sitio web o solicitar un 
				portafolio personalizado relevante a tus necesidades. Los clientes a menudo quieren 
				ver ejemplos de los proyectos anteriores de la agencia para evaluar la calidad y el estilo.
			</div>
		</div>
	</div>
	<div className="accordion-item">
		<h3 className="accordion-header">
			<button
				className="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseFour"
			>
				¿Cómo es su proceso de diseño?
			</button>
		</h3>
		<div
			id="collapseFour"
			className="accordion-collapse collapse"
			data-bs-parent="#aximo-accordion"
		>
			<div className="accordion-body">
				Explicar el proceso de la agencia de diseño desde el concepto inicial hasta la 
				entrega final ayuda a los clientes a entender qué esperar.
			</div>
		</div>
	</div>
	<div className="accordion-item">
		<h3 className="accordion-header">
			<button
				className="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseFive"
			>
				¿Cómo manejan las revisiones y comentarios durante un proyecto?
			</button>
		</h3>
		<div
			id="collapseFive"
			className="accordion-collapse collapse"
			data-bs-parent="#aximo-accordion"
		>
			<div className="accordion-body">
				Los clientes están interesados en saber cómo la agencia gestiona los comentarios y 
				realiza revisiones para asegurar que el diseño final cumpla con sus expectativas. 
				Valoramos los comentarios de los clientes y trabajamos estrechamente contigo para 
				asegurarnos de que estés satisfecho con el diseño final.
			</div>
		</div>
	</div>
	<div className="accordion-item">
		<h3 className="accordion-header">
			<button
				className="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseSix"
			>
				¿Ofrecen soporte continuo después de completar el proyecto?
			</button>
		</h3>
		<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
			<div className="accordion-body">
				Sí, ofrecemos soporte continuo, mantenimiento y actualizaciones según sea necesario, 
				asegurando que tus recursos de diseño y proyectos se mantengan actualizados y funcionales. 
				Algunos clientes pueden tener proyectos urgentes, por lo que es importante comunicar si 
				la agencia puede acomodar pedidos de último momento.
			</div>
		</div>
	</div>
</FadeInUp>
			</div>
		</div>
	);
}

export default FaqAccordion;
