import Image from "next/image";
import LogoWhiteImg from "./../../public/images/logo/logo_white.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
						<Image src={LogoWhiteImg} alt="Logo"  width={"128"}/>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2025, All Rights Reserved by Clipot</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
