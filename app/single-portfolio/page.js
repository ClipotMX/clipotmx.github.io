import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/projects";
function SinglePortfolio() {
	return (
		<>
			<BreadCrumb title="Portfolio Deatails" />
			<PortfolioDetails />
			<Projects />
		</>
	);
}

export default SinglePortfolio;
