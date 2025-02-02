import { useState, useEffect, createContext } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team } from "./components/Team";
import Footer from "./components/Footer";
import { Contact } from "./components/contact";
import Book from "./components/Book";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

export const AppointmentsContext = createContext({});
const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<Navigation />
			<Header data={landingPageData.Header} />
			<About data={landingPageData.About} />
			{/* <Services data={landingPageData.Services} /> */}
			<Team data={landingPageData.Team} />
			<Book data={landingPageData.Team} />
			<Contact data={landingPageData.Contact} />
			<Footer />
		</div>
	);
};

export default App;
