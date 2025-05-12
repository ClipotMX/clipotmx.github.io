import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Proceso para
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				desarrollo de proyectos
			</h2>
			<p>
				Nos esfocamos en la creación de soluciones innovadoras y efectivas para nuestros clientes. Nuestro
				proceso de desarrollo de proyectos se basa en una metodología ágil y flexible que se adapta a las
				necesidades de cada cliente.
			</p>
			
		</div>
	);
}

export default Content;
