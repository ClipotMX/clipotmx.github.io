import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/about";
import AutoSlider from "@/components/auto-slider";


function AboutUs() {
	return (
		<>
			<BreadCrumb title="Nosotros" />
			<About />
			<Story />
			<AutoSlider />
			
		</>
	);
}

export default AboutUs;
