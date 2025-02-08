import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Marketing Digital & Advertising",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Generacion & Seguimiento de Leads",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo Web & E-commerce",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Pocisionamiento SEO & SEM",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
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
