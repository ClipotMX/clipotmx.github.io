import { inter, syne } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "./../public/css/fontawesome.css";
import "./../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MetricoolTracker from "@/hooks/MetricoolTracker.js";


// main css
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";

export const metadata = {
	title: "Clipot | We Know About Leads",
	description: "Agencia de marketing digital especializada en la generación de leads.",
};

export default function HomeOneLayout({ children }) {
	
	return (
		<html lang="en">
			<body className={`${syne.variable} ${inter.variable}`}>
				<MetricoolTracker />
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
