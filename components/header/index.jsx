"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
/* eslint-disable for-direction */
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/" className="active">
								Inicio
							</NavItem>
							<NavItem url="about-us">Nosotros</NavItem>
							<NavItem url="service">Soluciones</NavItem>
							<NavItem url="blog">Blog</NavItem>
							<NavItem url="contact-us">Contacto</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Clipot" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
