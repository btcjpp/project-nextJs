import React, { useEffect } from "react";

import NavBar from '../components/NavBar';
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
	
				<title>{`Projects | ${INFO.main.title}`}</title>
				

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Des choses que j'ai faites en essayant de m'enfoncer dans l'univers.
						</div>

						<div className="subtitle projects-subtitle">
							-Réalisation de projets pour différents clients dans des domaines variés
						</div>
						<div className="subtitle projects-subtitle">
							-Acquisition de nouvelles compétences pour répondre aux besoins des clients
						</div>
						<div className="subtitle projects-subtitle">
							-Collaboration avec des clients internationaux, nécessitant une adaptation à des cultures et des langues différentes
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
