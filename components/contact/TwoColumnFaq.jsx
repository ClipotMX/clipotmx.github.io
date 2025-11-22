import Image from "next/image";
import QuestionImg from "../../public/images/icon/question.svg";
import Star2Img from "../../public/images/v1/star2.png";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "Que servicios ofrece la agencia?",
			text: "Ofrecemos una amplia gama de servicios de diseño, incluyendo diseño gráfico, diseño web, branding y más.",
		},
		{
			id: crypto.randomUUID(),
			title: "Cual es tu proceso de diseño?",
			text: "El proceso de diseño incluye la discusión con el cliente para entender sus necesidades y objetivos, la creación de conceptos visuales, la iteración y revisión del diseño, y la finalización del proyecto.",
		},
		{
			id: crypto.randomUUID(),
			title: "Cual es el costo de los servicios de diseño?",
			text: "El costo de nuestros servicios de diseño varía según el alcance del proyecto. Ofrecemos cotizaciones personalizadas después de discutir los requisitos.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Cual es tu proceso de trabajo?",
			text: "El proceso de trabajo incluye la recepción de la solicitud, la discusión con el cliente para entender sus necesidades y objetivos, la creación de conceptos visuales, la iteración y revisión del diseño, y la finalización del proyecto.",
		},
		{
			id: crypto.randomUUID(),
			title: "Cual es el número de revisiones que ofreces?",
			text: "Ofrecemos un número específico de revisiones basadas en la complejidad del proyecto y la satisfacción del cliente.",
		},
		{
			id: crypto.randomUUID(),
			title: "Cual es el número de revisiones que ofreces?",
			text: "Ofrecemos un número específico de revisiones basadas en la complejidad del proyecto y la satisfacción del cliente.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Estas son algunas 
						<span className="aximo-title-animation">
						de las preguntas más frecuentes
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
