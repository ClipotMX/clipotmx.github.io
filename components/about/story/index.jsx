import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							El trato humano combinado
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
						con la tecnologia
					</h2>
					<p>
						Fundada en 2024, somos una empresa innovadora especializada en soluciones digitales integrales.
Nos enfocamos en generación de leads, desarrollo de e-commerce, gestión de redes sociales y diseño web. Con un equipo experto y metodología orientada a resultados, transformamos las necesidades de nuestros clientes en soluciones exitosas que impulsan su crecimiento.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
