import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, links } = props;

	return (
		<div className="project">

			<a className="project-container">
				<div className="project-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="project-title">{title}</div>
				<div className="project-description">{description}</div>
				<div className="project-link">
					<div className="project-link-icon">
						<FontAwesomeIcon icon={faLink} />
					</div>
					<div className="project-link-text">{linkText}</div>
				</div>
			</a>

		</div>
	);
};

export default Project;
