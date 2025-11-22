
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/auto-slider";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
const services = [
	{
		id: crypto.randomUUID(),
		title: "Generación de Leads",
		description:
			"Creamos estrategias claras y poderosas para generar leads de manera eficiente y efectiva.",
		icon: "icon-design-tools",
		link: "lead-generation",
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo Web",
		description:
			"Desarrollamos sitios web modernos y funcionales, adaptados a las necesidades y objetivos de tu negocio.",
		icon: "icon-branding",
		link: "web-development",
	},
	{
		id: crypto.randomUUID(),
		title: "Marketing Digital",
		description:
			"Desarrollamos estrategias de marketing digital para aumentar la visibilidad y el tráfico de tu negocio en línea.",
		icon: "icon-web",
		link: "marketing-digital",
	},
	{
		id: crypto.randomUUID(),
		title: "Diseño Digital",
		description:
			"Desarrollamos diseños digitales atractivos y funcionales, que capturan la atención y convierten a los usuarios en clientes.",
		icon: "icon-design-thinking",
		link: "design-digital",
	},
	{
		id: crypto.randomUUID(),
		title: "Paid Media",
		description:
			"Desarrollamos campañas de publicidad en redes sociales para aumentar la presencia en línea de tu negocio y atraer a nuevos clientes.",
		icon: "icon-layers",
		link: "paid-media",
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		description:
			"Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda, aumentando así el tráfico orgánico y convertido en clientes.",
		icon: "icon-rating-stars-1",
		link: "seo",
	},
	{
		id: crypto.randomUUID(),
		title: "Gestion de Redes Sociales",
		description:
			"Administramos y optimizamos tus perfiles en redes sociales para aumentar la interacción y la presencia de tu negocio.",
		icon: "icon-chef",
		link: "social-media-management",
	},
	{
		id: crypto.randomUUID(),
		title: "Branding",
		description:
			"Desarrollamos una identidad visual única y memorable para tu negocio, que refleje su valores y atraiga a los clientes.",
		icon: "icon-target-1",
		link: "branding",
	},
];
function ServicePage() {
	return (
		<>
		
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
