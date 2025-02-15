import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import StarImg from "../../../public/images/v1/star.png";
import User1Img from "../../../public/images/v1/user1.png";
import User2Img from "../../../public/images/v1/user2.png";
import User3Img from "../../../public/images/v1/user3.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Somos expertos en
						<Image src={StarImg} alt="StarImg" />
					</span>{" "}
					generación leads
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{`Como agencia de marketing digital, nos especializamos en la generación y seguimiento de leads, nuestro objetivo es que tus leads
					nunca esten desatendidos, lo que nos daria un margen de conversion mas grande al momento de mantener a los leads calientes, ya que un lead frio es dificil de 
					convertir, nuestras estrategias y nuestro equipo de mensajeria son la solución.`}
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
			{/*<div className="aximo-hero-user-wrap">
					<div className="aximo-hero-user-thumb">
						<div className="aximo-hero-user-thumb-item">
							<Image src={User1Img} alt="User1Img" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User3Img} alt="User3Img" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User2Img} alt="User2Img" />
						</div>
					</div>
					<div className="aximo-hero-user-data">
						<p>Believed by more than a thousand people</p>
					</div>
				</div>*/}
			</FadeInStaggerTwoChildren> 
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Agenda una videollamada <i className="icon-call"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg} alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
