import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function SingleService() {
	return (
		<>
			<BreadCrumb title="Service Details" />
			<ServiceDetails />
			<Testimonial />
		</>
	);
}

export default SingleService;
