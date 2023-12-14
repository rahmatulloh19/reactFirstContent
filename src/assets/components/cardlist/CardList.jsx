import "./cardlist.css";
import "../container/container.css";
import Card from "../card/Card";

function CardList() {
	return (
		<>
			<section className="site-main__cardlist cardlist">
				<div className="container">
					<ul className="cardlist__list">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</ul>
				</div>
			</section>
		</>
	);
}

export default CardList;
