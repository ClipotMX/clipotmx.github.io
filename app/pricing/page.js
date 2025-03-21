import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/auto-slider";
import Testimonial from "@/components/testimonial";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingPlan from "@/components/pricing/PricingPlan";

function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricingPlan />
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Pricing;
