import Marquee from "react-fast-marquee";
import { Button, NavButton } from "../components/Button";
import { PiStarFourFill } from "react-icons/pi";
import { nav } from "../data/data";
import miggles from "../assets/miggles.png";

const Home = () => {
	return (
		<div className="bg-[url('/src/assets/bg-one.jpg')] bg-bottom font-kardia flex flex-col-reverse bg-cover">
			<div className="flex h-10 mb-1">
				<Marquee autoFill className="bg-[#effafe]">
					<p className="w-32 text-lg cursor-default text-[#1b2d36]">
						<PiStarFourFill className="inline-block mr-2" />
						$MIGGLES
					</p>
				</Marquee>
			</div>
			<div className="container flex flex-col gap-12 mx-auto md:py-8">
				<div className="flex flex-col items-center gap-4 mx-auto mt-4 md:flex-row md:justify-around md:mx-0">
					<h1 className="text-4xl font-bold text-white text-outline-black">
						<a href="#">$MIGGLES</a>
					</h1>
					<div className="flex gap-12">
						{nav.map(
							({ logo, url }: { logo: string; url: string }, id: number) => (
								<NavButton logo={logo} url={url} key={id} />
							)
						)}
					</div>
				</div>
				<div className="flex flex-col-reverse gap-10 mb-10 md:justify-evenly md:mb-0 md:flex-row">
					{/* Left */}
					<div className="mx-auto md:mx-0">
						<img src={miggles} className="w-56 md:w-60 lg:w-96" alt="Miggles" />
					</div>
					{/* Right */}
					<div className="flex flex-col text-center text-white md:justify-center">
						<h2 className="text-5xl cursor-default text-outline-black md:text-6xl lg:text-8xl">
							MISTER <br /> MIGGLES
						</h2>
						<h4 className="text-[#1b2d36] my-4 cursor-default text-outline-white md:text-2xl lg:text-4xl text-xl">
							The Coinbase Cat Mascot
						</h4>
						<div>
							<Button text="Buy Now" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
