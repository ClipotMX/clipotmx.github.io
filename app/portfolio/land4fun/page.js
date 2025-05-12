import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import Projects from "@/components/projects";
function SinglePortfolio() {
	return (
		<>
			<BreadCrumb title="Land 4 Fun" />
			<PortfolioDetails />
			<Projects />
		</>
	);
}

export default SinglePortfolio;
