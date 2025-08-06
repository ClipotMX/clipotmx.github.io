"use client";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "./../../public/images/v1/project1.png";
import Project2Img from "./../../public/images/v1/project2.png";
import Project3Img from "./../../public/images/v1/project3.png";
import Project4Img from "./../../public/images/v1/project4.png";
import Star2Img from "./../../public/images/v1/star2.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Expoceramicas",
		description: "Desarrollo de estrategias para generar leads de valor.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Land 4 Fun",
		description: "Desarrollo de sitio web e integracion de plataforma Kommmo CRM.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Aquipro",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "GLG Abogados",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Baroc México",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Emmet México",
		description: "Creating or refreshing a company&apos;s logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Contamos con una gran variedad de
						<span className="aximo-title-animation">
						 proyectos creativos.
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
