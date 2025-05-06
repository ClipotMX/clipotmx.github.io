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
						Establecidos desde 2024, fundamos nuestra marca como una empresa
						innovadora y comprometida con el éxito de nuestros clientes.
						Desde nuestros inicios, nos hemos enfocado en ofrecer soluciones para generar y gestionar leads,
						desarrollar e-commerce, gestionar redes sociales y diseñar páginas web.
						Con un equipo altamente capacitado y una metodología de trabajo
						basada en la excelencia, estamos comprometidos a brindar soluciones
						eficientes y efectivas para nuestros clientes.
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
