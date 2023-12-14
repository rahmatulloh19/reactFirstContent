import "./main.css";
import Search from "../search/Search";
import CardList from "../cardlist/CardList";

function Main() {
	return (
		<main className="site-main">
			<Search />
			<CardList />
		</main>
	);
}

export default Main;
