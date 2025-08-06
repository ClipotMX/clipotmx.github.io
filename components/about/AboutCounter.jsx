"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={5} duration={5} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Años de experiencia</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={10} duration={3} redraw={true} enableScrollSpy />
					</span>
					+

				</h2>
				<p>Projectos Exitosos</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={98} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Rango de satisfaccion del cliente</p>
			</div>
		</div>
	);
}

export default AboutCounter;
