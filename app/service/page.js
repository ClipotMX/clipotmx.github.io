
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/auto-slider";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
const services = [
	{
		id: crypto.randomUUID(),
		title: "Generación de Leads",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
		link: "lead-generation",
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo Web",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
		link: "web-development",
	},
	{
		id: crypto.randomUUID(),
		title: "Marketing Digital",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
		link: "web-design",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-design-thinking",
		link: "marketing-digital",
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		description:
			"Creating packaging solutions for products that not only protect them but also attract customers on store shelves.",
		icon: "icon-layers",
		link: "packaging-design",
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-rating-stars-1",
		link: "logo-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Illustration",
		description:
			"Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.",
		icon: "icon-chef",
		link: "illustration",
	},
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description:
			"Developing the look and feel of physical products, considering ergonomics, aesthetics, and functionality.",
		icon: "icon-target-1",
		link: "product-design",
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
