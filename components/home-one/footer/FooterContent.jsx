import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Comenzemos
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				esta aventura
			</h2>
			<p>
			Colaboramos estrechamente con nuestros clientes para comprender sus objetivos, público objetivo y necesidades específicas. Utilizamos nuestras habilidades creativas para transformar estos requisitos en soluciones de diseño eficaces y prácticas.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Llamanos:</li>
						<li>
							<a href="tel:(123) 456-7890">(123) 456-7890</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Envianos un Correo:</li>
						<li>
							<a href="mailto:hey@clipot.com.mx">hey@clipot.com.mx</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://www.facebook.com/clipotleads/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/clipotleads" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/clipotleads" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<Image src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
