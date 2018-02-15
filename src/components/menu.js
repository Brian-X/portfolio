import React from "react";

const Menu = () => (
	<div>
		<section className="cento-header">
			<section className="logo">
				<img src={require("../images/BE-UI-Design.png")} alt="Logo" />
			</section>

			<section className="nav-wrap">
				<section className="nav">
					<ul>
						<li><a href="index.html">About</a></li>
						<li><a href="portfolio.html">Full Stack</a></li>
						<li><a href="http://www.be-ui.design/">UI Design</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</section>
			</section>
		</section>
	</div>
);

export default Menu;