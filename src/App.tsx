import Footer from "./components/Footer";
import Community from "./pages/Community";
import FrequentlyAskQuestion from "./pages/FrequentlyAskQuestion";
import Home from "./pages/Home";
import HowToBuy from "./pages/HowToBuy";
import Partner from "./pages/Partner";
import Story from "./pages/Story";
import Tokenomic from "./pages/Tokenomic";

function App() {
	return (
		<div className="overflow-hidden">
			<Home />
			<Story />
			<Partner />
			<Tokenomic />
			<HowToBuy />
			<FrequentlyAskQuestion />
			<Community />
			<Footer />
		</div>
	);
}

export default App;
