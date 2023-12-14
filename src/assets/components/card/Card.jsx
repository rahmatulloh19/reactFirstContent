import Img from "../../images/1280px-Flag_of_Germany.svg.png";
import "./card.css";

function Card() {
	return (
		<li className="cardlist__item">
			<img src={Img} height="160" alt="Flag" />
			<div className="cardlist__item-inner">
				<h3 className="cardlist__subtitle">Germany</h3>
				<p className="cardlist__desc">
					<strong>Population:</strong> 81,770,900
				</p>
				<p className="cardlist__desc">
					<strong>Region:</strong> Europe
				</p>
				<p className="cardlist__desc">
					<strong>Capital:</strong> Berlin
				</p>
			</div>
		</li>
	);
}
export default Card;
