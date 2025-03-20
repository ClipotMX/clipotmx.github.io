import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function SingleService() {
	return (
		<>
        <p>Post: {router.query.slug}</p>
			<BreadCrumb title="Service Details" />
			<ServiceDetails />
			<Testimonial />
		</>
	);
}

export default SingleService;