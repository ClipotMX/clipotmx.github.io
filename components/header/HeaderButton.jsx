import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn pill aximo-header-btn" href="https://calendly.com/clipotleads" target="_blank">
				Agendar Cita
			</Link>
		</div>
	);
}

export default HeaderButton;
