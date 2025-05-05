"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star3Img from "./../../public/images/v1/star3.png";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Diseño Gráfico",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Marketing Digital",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Publicidad Online",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Generación de Leads",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo Web",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Gestión de Leads",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Diseño Web",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Manejo de Redes Sociales",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Desarrollo de e-Commerce",
		img: Star3Img,
	},
	
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<Image src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
