import React from "react";

function article_1() {
	return {
		date: "17 June 2023",
		title: "Les avantages du cloud computing",
		description:
"Le cloud computing offre une gamme d'avantages, notamment des économies de coûts et une flexibilité accrue. Découvrez pourquoi de plus en plus d'entreprises se tournent vers le cloud.",		keywords: [
			"waelrhim",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Contenu de l'article 1</div>
					<img src="https://picsum.photos/200/300" alt="random" className="randImage"	/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "17 June 2023",
		title: "L'intelligence artificielle dans les soins de santé",
		description:
"L'IA transforme le secteur de la santé, de l'amélioration des résultats pour les patients à la rationalisation des opérations. Découvrez les dernières applications de cette technologie révolutionnaire.",		style: ``,
		keywords: [
			"waelrhim",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
