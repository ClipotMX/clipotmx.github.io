import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import Projects from "@/components/projects";
function SinglePortfolio() {
	return (
		<>
			<BreadCrumb title="{slug}" />
			<PortfolioDetails title="{slug}"/>
			<Projects />
		</>
	);
}

export default SinglePortfolio;
