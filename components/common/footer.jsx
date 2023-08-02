import React from "react";
import Link from "next/link";
import '../../public/styles.css'

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link href="/">Accueil</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/about">À propos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/projects">Projets</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 WAEL. Tous les droits sont réservés.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
