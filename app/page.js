import About from "@/components/about";
import AutoSlider from "@/components/auto-slider";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Teams from "@/components/teams";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";


// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";






const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Marketing Digital & Publicidad",
		description:
			"Creamos estrategias dedicadas a la generacion de Leads, lo que despues de procesados pueden convertirse en ventas y sumas a tu empresa..",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Generacion & Seguimiento de Leads",
		description:
			"Nuestro objetivo es captar a tus Leads que puedan convertirse en tu proximo cliente, nuestro objetivo principal en toda la estrategia.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo Web & E-commerce",
		description:
			"La presencia online es clave para el crecimiento de cualquier negocio tanto fisico como online, tu sitio web o tienda en linea y olvidate de complicaciones. ",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Pocisionamiento SEO & SEM",
		description:
			"Eleva tu negocio en Google y deja que te descubran para generar mas oportunides de ventas, obten mejores resultados en tus camapañas y aumenta las posibilidades de que te vean.",
		icon: "icon-design-thinking",
	},
];
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Ariel Loza",
		designation: "Front End Developer & CEO",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Pablo Bañuelos",
		designation: "Productor Audiovisual",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Isaac Rodriguez",
		designation: "Diseñador Gráfico",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Paola Orozco",
		designation: "Contact Center Manager",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}
